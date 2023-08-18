import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/useContex/HomePage";
import { UserContext } from "../../src/useContex/context/UserContext";
import { json } from "react-router-dom";

describe("Pruebas en el componente <HomePage />", () => {
  const user = {
    id: 1,
    name: "Juan",
    email: "",
  };

  test("debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("preTag");
    const { id, name, email } = JSON.parse(preTag.textContent);
    expect(name).toBe("Juan");
    expect(typeof id).toBe("number");
    expect(typeof email).toBe("string");
  });
});
