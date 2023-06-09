// escren es una representacion del DOM
import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en el <CounterApp/>", () => {
  const value = 100;
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el valor inicial de 100", () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText(value)).toBeTruthy(); //Se espera que en el documento se encuentre el valor
    /* expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      value
    ); */
  });

  test("Debe de incrementar con el <Boton +1>", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1")); //realiza un click en el boton con el texto +1
    expect(screen.getByText(value + 1)).toBeTruthy(); //Se espera que en el documento se encuentre el valor
  });

  test("Debe de decrementar con el <Boton +1>", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1")); //realiza un click en el boton con el texto +1
    screen.debug();
    expect(screen.getByText(value - 1)).toBeTruthy(); //Se espera que en el documento se encuentre el valor
  });

  test("Debe de funcionar el boton de reset", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("Reset"));
    // expect(screen.getByText(value)).toBeTruthy(); //Se espera que en el documento se encuentre el valor
    screen.getByRole("button", { name: "btn-reset" });
    expect(screen.getByText(value)).toBeTruthy();
  });
});
