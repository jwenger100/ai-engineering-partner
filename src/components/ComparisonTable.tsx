import { Badge } from "@mantine/core";

interface ComparisonRow {
  attribute: string;
  lovable: string;
  github: string;
  aws: string;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
}

const headerStyle: React.CSSProperties = {
  fontFamily: "Georgia, serif",
  fontWeight: 700,
  fontSize: "0.95rem",
  padding: "1rem",
  textAlign: "center" as const,
  borderBottom: "2px solid #e9ecef",
};

const cellStyle: React.CSSProperties = {
  padding: "0.85rem 1rem",
  fontSize: "0.875rem",
  color: "#444",
  lineHeight: 1.5,
  verticalAlign: "top",
  borderBottom: "1px solid #f0f0f0",
};

const attrStyle: React.CSSProperties = {
  ...cellStyle,
  fontWeight: 600,
  color: "#1a1a1a",
  whiteSpace: "nowrap" as const,
};

export function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div style={{ overflowX: "auto", borderRadius: "10px", border: "1px solid #e9ecef" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
        <thead>
          <tr style={{ background: "#f8f9fa" }}>
            <th style={{ ...headerStyle, textAlign: "left", color: "#555", fontWeight: 600 }}>
              Criteria
            </th>
            <th style={{ ...headerStyle, color: "#1a1a1a" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.35rem" }}>
                <Badge color="orange" variant="light" size="sm">Current State</Badge>
                Lovable/Replit + Supabase
              </div>
            </th>
            <th style={{ ...headerStyle, color: "#1a1a1a" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.35rem" }}>
                <Badge color="brand" variant="light" size="sm">Tier 1–2 Outcome</Badge>
                GitHub + CI/CD + Supabase
              </div>
            </th>
            <th style={{ ...headerStyle, color: "#1a1a1a" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.35rem" }}>
                <Badge color="blue" variant="light" size="sm">Tier 3 Outcome</Badge>
                AWS ECS + Terraform
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
              <td style={attrStyle}>{row.attribute}</td>
              <td style={cellStyle}>{row.lovable}</td>
              <td style={cellStyle}>{row.github}</td>
              <td style={cellStyle}>{row.aws}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
