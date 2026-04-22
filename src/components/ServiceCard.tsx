import classes from "./ServiceCard.module.css";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className={classes.card}>
      <div className={classes.icon}>{icon}</div>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
      <ul className={classes.features}>
        {features.map((f, i) => (
          <li key={i} className={classes.feature}>
            <span className={classes.featureCheck}>→</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
