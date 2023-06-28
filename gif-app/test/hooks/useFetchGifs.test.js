import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en eol hook de useFetchGifs", () => {
  test("Debe de regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("Futurama"));
    const { images, isloading } = result.current;
    expect(images.length).toBe(0);
    expect(isloading).toBeTruthy();
  });

  test("Debe de retornar un arreglo de imagenes y isloading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("Futurama"));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isloading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isloading).toBeFalsy();
  });
});
