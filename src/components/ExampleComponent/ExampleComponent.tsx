import React from "react";
import { ExampleComponentProps } from "./ExampleComponent.interface";
import { exampleComponent } from "./ExampleComponent.module.css";

const ExampleComponent: React.FC<ExampleComponentProps> = ({
  testId,
  name,
}) => (
  <p data-testid={testId} className={exampleComponent}>
    Hello {name ?? "world"}!
  </p>
);

export default ExampleComponent;
