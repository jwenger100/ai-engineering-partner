import classes from "./ProcessStep.module.css";

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
}

export function ProcessStep({ step, title, description }: ProcessStepProps) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.stepCircle}>{step}</div>
      <div className={classes.content}>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  );
}
