import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/useContex/MainApp";
import { MemoryRouter } from "react-router-dom";
describe("Test al componente <MainApp />", () => {
  test("Debe de mostrar el homePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("Debe de mostrar el LoginPage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );
    screen.debug();

    expect(screen.getByText("LoginPage")).toBeTruthy();
    const a = screen.getByText("login");
    expect(a.getAttribute("href")).toBe("/login");
  });
});
