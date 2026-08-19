import classes from "./ScanPanel.module.css";

/*
 * The Symbiotic scan, drawn to scale.
 *
 * Occupies the slot a hero photograph would, and does more work than a stock
 * image: it is the evidence the whole positioning rests on. Percentages are
 * the real published figures, and the bar flexes are those same numbers.
 */
export function ScanPanel() {
  return (
    <div className={classes.panel}>
      <div className={classes.label}>1,072 AI-built apps scanned</div>
      <div
        className={classes.bar}
        role="img"
        aria-label="Of 1,072 apps scanned, 16 percent had critical flaws, 82 percent had other vulnerabilities, and 2 percent were clean."
      >
        <span className={classes.crit} />
        <span className={classes.flaw} />
        <span className={classes.clean} />
      </div>
      <div className={classes.legend}>
        <div className={classes.row}>
          <span className={`${classes.swatch} ${classes.swCrit}`} />
          <span className={classes.fig}>16%</span>
          <span>had critical flaws</span>
        </div>
        <div className={classes.row}>
          <span className={`${classes.swatch} ${classes.swFlaw}`} />
          <span className={classes.fig}>82%</span>
          <span>had other vulnerabilities</span>
        </div>
        <div className={classes.row}>
          <span className={`${classes.swatch} ${classes.swClean}`} />
          <span className={classes.fig}>2%</span>
          <span>were completely clean</span>
        </div>
      </div>
      <p className={classes.foot}>
        Symbiotic Security, June 2026. 172 of those apps allowed anyone to delete their data
        without logging in. This is the base rate for apps like yours, not a finding about yours
        specifically.
      </p>
    </div>
  );
}
