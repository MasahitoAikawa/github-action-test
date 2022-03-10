import Home from "../index";
import { render } from "@testing-library/react";

describe("test!", () => {
  test("first", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Welcome to")).toBeTruthy();
    expect(getByText("Next.js!")).toBeTruthy();
  });
});
