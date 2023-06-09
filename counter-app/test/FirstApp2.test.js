import { render, screen } from "@testing-library/react";
import { SecondApp } from "../src/FirstApp";

describe("Puerabas en <SecondApp/>", () => {
  const title = "Hola soy Goku";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<SecondApp title={title} />);
    console.log(container.innerHTML);
    expect(container).toMatchSnapshot(); // Crea el snapshot y lo compara con el actual
  });

  test('Debe de mostrar el mensaje "Hola, soy goku', () => {
    render(<SecondApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("Debe de mostrar el titulo en un h1", () => {
    render(<SecondApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(title);
  });
  test("Debe mostrar el subtitulo enviado por props", () => {
    render(<SecondApp title={title} subTitle="Soy un subtitulo" />);
    expect(screen.getAllByText("Soy un subtitulo").length).toBe(2); //en el componente se repite el subtitulo
  });
});
