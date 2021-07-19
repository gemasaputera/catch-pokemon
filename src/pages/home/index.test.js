import { render, screen } from "@testing-library/react";
import Home from "./index";

test("renders learn react link", () => {
  const props = {
    theme: {
      colors: {
        primary: "#000",
      },
    },
  };
  render(<Home {...props} />);
  const linkElement = screen.getByText(/Hi Master/i);
  expect(linkElement).toBeInTheDocument();
});
