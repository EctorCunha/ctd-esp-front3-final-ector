import { render, screen } from "@testing-library/react";
import Index from "../pages/index.page";

describe("IndexPage", () => {
  describe("when rendering default", () => {
    it("should render the card", () => {
      render(<Index data={[]} />);
      const foo = 1
      const card = screen.getByRole('button', {
        name: /Comprar/i,
      });
      expect(card).toBeInTheDocument();
    });
  });
});
