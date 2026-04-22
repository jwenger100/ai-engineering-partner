import classes from "./FeatureList.module.css";

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface FeatureListProps {
  features: Feature[];
  columns?: 1 | 2 | 3;
  dark?: boolean;
}

export function FeatureList({ features, columns = 3, dark = false }: FeatureListProps) {
  return (
    <div
      className={`${classes.grid} ${dark ? classes.gridDark : ""}`}
      style={
        {
          "--cols": columns,
        } as React.CSSProperties
      }
    >
      {features.map((feature, i) => (
        <div key={i} className={`${classes.item} ${dark ? classes.itemDark : ""}`}>
          {feature.icon && (
            <div className={classes.icon}>{feature.icon}</div>
          )}
          <div className={classes.title}>{feature.title}</div>
          <div className={classes.description}>{feature.description}</div>
        </div>
      ))}
    </div>
  );
}
