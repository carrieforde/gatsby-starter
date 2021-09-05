import React from "react";
import ExampleComponent from "./ExampleComponent";
import { render } from "@testing-library/react";
import { DefaultExample, NameExample } from "./ExampleComponent.stories";

describe("ExampleComponent", () => {
  it("should render the ExampleComponent component", () => {
    const { container } = render(<ExampleComponent />);
    expect(container).toMatchSnapshot();
  });

  it("should print 'Hello world'", () => {
    const { container } = render(<DefaultExample {...DefaultExample.args} />);
    expect(container.firstElementChild).toHaveTextContent(/hello world/i);
  });

  it("should print 'Hello Carrie'", () => {
    const { container } = render(<NameExample {...NameExample.args} />);
    expect(container.firstElementChild).toHaveTextContent(/hello carrie/i);
  });
});
