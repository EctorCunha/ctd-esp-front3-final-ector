import { render, screen } from "@testing-library/react";
import LayoutGeneral from "../../components/layouts/layout-general";
import GeneralHeader from "./header/general-header.component";
import GeneralFooter from "./footer/general-footer.component";

jest.mock(
  "../../components/layouts/header/general-header.component",
  () => () => {
    return <GeneralHeader />;
  }
);
jest.mock(
  "../../components/layouts/footer/general-footer.component",
  () => () => {
    return <GeneralFooter />;
  }
);

describe("LayoutGeneral", () => {
  describe("when rendering default", () => {
    it("should render the children", () => {
      render(
        <LayoutGeneral>
          <p>children</p>
        </LayoutGeneral>
      );
      const children = screen.getByText("children");
      expect(children).toBeInTheDocument();
    });
    it("should render the header", () => {
      render(
        <LayoutGeneral>
          <GeneralHeader />
        </LayoutGeneral>
      );
      const header = screen.getByText("Header");
      expect(header).toBeInTheDocument();
    });
    it("should render the footer", () => {
      render(
        <LayoutGeneral>
          <GeneralFooter />
        </LayoutGeneral>
      );
      const footer = screen.getByText("Footer");
      expect(footer).toBeInTheDocument();
    });
  });
});
