/**
 * Google Apps Script — appends site leads to a Google Sheet.
 *
 * WHY THIS EXISTS
 * The site is a static export on GitHub Pages, so there is no server. Web3Forms
 * handles email delivery, but its Google Sheets integration is a paid feature.
 * This script is the free equivalent: a tiny endpoint that accepts a POST and
 * appends a row.
 *
 * DEPLOY (~5 minutes)
 *  1. Create a Google Sheet. Name the first tab "Leads".
 *  2. Extensions → Apps Script. Delete the placeholder and paste this file.
 *  3. Deploy → New deployment → type "Web app".
 *       Execute as:      Me
 *       Who has access:  Anyone
 *     "Anyone" is required — the browser posts here unauthenticated. The
 *     endpoint only ever appends; it never reads or returns your data.
 *  4. Authorize when prompted, then copy the Web app URL (ends in /exec).
 *  5. Paste it into src/config/site.ts as leadSheet.endpoint.
 *
 * NOTE ON CORS
 * The site posts with Content-Type text/plain and no custom headers, which
 * keeps the request "simple" so the browser skips the CORS preflight that
 * Apps Script cannot answer. That is why the client sends a JSON string as
 * plain text rather than as application/json.
 */

var SHEET_NAME = 'Leads';

var COLUMNS = [
  'timestamp',
  'source',        // which form: contact | risk-check
  'name',
  'email',
  'platform',
  'message',
  'riskScore',     // risk-check only
  'riskAnswers',   // risk-check only, JSON
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
  'gclid',
  'landingPath',
  'referrer',
];

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var sheet = getSheet_();

    var row = COLUMNS.map(function (key) {
      if (key === 'timestamp') return new Date();
      var value = payload[key];
      if (value === null || value === undefined) return '';
      return typeof value === 'object' ? JSON.stringify(value) : String(value);
    });

    sheet.appendRow(row);
    return json_({ ok: true });
  } catch (err) {
    // Log and return 200 regardless — the client treats this as fire-and-forget
    // and must never surface a sheet failure to the visitor. The lead has
    // already been emailed by Web3Forms at this point.
    console.error(err);
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({ ok: true, note: 'Lead endpoint is live. POST only.' });
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  // Write the header row once, and freeze it.
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS);
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
