import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../src/examples/MultipleCustomHook";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

// jest.mock permite simular un modulo pasado como argumento
jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en <MultipleCustomHook/>", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrar el componenete por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: false,
    });

    render(<MultipleCustomHook />);


    expect(screen.getByText("Loading..."));

    expect(screen.queryByText("BreakingBad quotes"));

    const nextButton = screen.getByRole("button", {
      name: "Next quote",
    });

    expect(nextButton.disabled).toBeTruthy();
  });

  test("Debe de mostrar el quote", () => {
    /* 
      emula el comportamiento de useFetch con datos de prueba
     */
    useFetch.mockReturnValue({
      data: [{ author: "Hugo Julian", quote: "Hola mundo" }],
      isLoading: false,
      hasError: false,
    });

    render(<MultipleCustomHook />);
    // se espera que el componente no muestre el texto Hugo Julian
    expect(screen.getByText("Hugo Julian")).toBeTruthy();
    // se espera que el componente no muestre el texto Hola mundo
    expect(screen.getByText("Hola mundo")).toBeTruthy();

    // se espera que el componente no muestre el botón siguinete habilitado
    const nextButton = screen.getByRole("button", {
      name: "Next quote",
    });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("Debe de llamar la funcion incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Hugo Julian", quote: "Hola mundo" }],
      isLoading: false,
      hasError: false,
    });

    render(<MultipleCustomHook />);

    const nextButton = screen.getByRole("button", { name: "Next quote" });

    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
