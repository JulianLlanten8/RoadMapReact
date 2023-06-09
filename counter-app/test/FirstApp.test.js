import { render } from "@testing-library/react";
import { SecondApp } from "../src/FirstApp";

describe("pruebas en el componente <FirsApp />", () => {
  /* test("Debe de hacer match con el snapshot", () => {
    const title = "Si tiene titulo";
    const { constainer, getByText } = render(
      <SecondApp title={title} subTitle="Frontend Developer" />
    );
    expect(constainer).toMatchSnapshot(); // debe de ser igual al snapshot
  }); */

  /* test("Debe de mostrar el titulo h1", () => {
    const title = "Si tiene titulo";
    const { container, getByText, getByTestId } = render(
      <SecondApp title={title} subTitle="Frontend Developer" />
    );
    expect(getByText(title)).toBeTruthy();
    expect(getByTestId("test-title").innerHTML).toBe(title); // toBe compara que sea exactamente igual
    console.log(getByTestId("test-title").textContent);
  }); */

  test("Debe mostrar el subtitulo enviado por prosp", () => {
    const title = "Si tiene titulo";
    const subTitle = "Frontend Developer";
    const { getAllByText, getByText } = render(
      <SecondApp title={title} subTitle={subTitle} />
    );
    //imprime el subtitulo
    expect(getByText(subTitle)).toBeTruthy();
    //imprime el subtitulo
    console.log(getByText(subTitle).textContent);
    expect(getAllByText(subTitle).length).toBe(1);
  });
});
