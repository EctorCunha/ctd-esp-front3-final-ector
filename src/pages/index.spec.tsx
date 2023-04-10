import { render, screen } from "@testing-library/react";
import Index from "../pages/index.page";

describe("IndexPage", () => {
  describe("when rendering default", () => {
    it("should render the title", () => {
      render(<Index data={[]} />);
      const foo = 1
      const title = screen.getByText("Sample");
      expect(title).toBeInTheDocument();
    });
  });
});
