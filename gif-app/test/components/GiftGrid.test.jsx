import { render, screen } from "@testing-library/react";
import { GiftGrid } from "../../src/components/GiftGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas componentes <GiftGrid/>", () => {
  const category = "Futurama";
  test("Debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isloading: true,
    });
    render(<GiftGrid category={category} />);

    expect(screen.getByText("Cargando...")).toBeTruthy();
    expect(screen.getByText(category));
  });

  test("Debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "Cualquier cosa",
      },
      {
        id: "123",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "Cualquier cosa",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isloading: false,
    });

    render(<GiftGrid category={category} />);

    screen.debug();
  });
});
