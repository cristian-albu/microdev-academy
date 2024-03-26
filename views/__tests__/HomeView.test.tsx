import { render, screen } from "@testing-library/react";
import HomeView from "../home/HomeView";

describe("HomeView", () => {
  test("renders HomeView", () => {
    render(<HomeView />);
    expect(screen.getByText("HomeView")).toBeInTheDocument();
  });
});
