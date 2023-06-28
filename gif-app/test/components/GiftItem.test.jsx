/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("GiftItem", () => {
  const title = "pokemon";
  const url = "https://localhost/pokemon.jpg";

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar la imagen con el url y el alt indicado", () => {
    render(<GifItem title={title} url={url} />);
    /* screen.debug(screen.getByRole("img"));
    expect(screen.getByRole("img").src).toBe(url); */

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("Debe de mostrar el titulo de lá imagen", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
