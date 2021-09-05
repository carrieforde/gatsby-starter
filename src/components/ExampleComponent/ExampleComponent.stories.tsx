import React from "react";
import ExampleComponent from "./ExampleComponent";
import { ExampleComponentProps } from "./ExampleComponent.interface";
import { Story, Meta } from "@storybook/react";

export default {
  title: "ExampleComponent",
  component: ExampleComponent,
} as Meta;

const Template: Story<ExampleComponentProps> = (args) => (
  <ExampleComponent {...args} />
);

export const DefaultExample = Template.bind({});
export const NameExample = Template.bind({});

NameExample.args = {
  name: "Carrie",
};
