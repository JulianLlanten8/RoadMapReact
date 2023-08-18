import { screen, render } from "@testing-library/react";
import { LoginPage } from "../../src/useContex/LoginPage";
import { UserContext } from "../../src/useContex/context/UserContext";

describe("Pruebas en el componente <LoginPage />", () => {
  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    screen.debug();
    const preTag = screen.getByLabelText("preTag");
    expect(preTag.textContent).toBe("null");
  });

  test("Debe de llamar el setUser cuando se hace click en el botton", () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    screen.debug();
    const button = screen.getByText("Login");
    button.click();
    expect(setUserMock).toHaveBeenCalledWith({
      id: 1234,
      email: "fernando@google.com",
      name: "Fernando",
    });
  });
});
