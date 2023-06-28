import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("test al componente <GifExpertApp/>", () => {
  test("Prueba la funcionabilidad de de onAddCategory ", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    const inputValue = "Futurama";

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(screen.getByText(inputValue)).toBe(screen.getByText(inputValue));
  });
});
