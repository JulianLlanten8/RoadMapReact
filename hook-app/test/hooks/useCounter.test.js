import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
describe("prueabs en el use counter", () => {
  test("Debe de retonrar los valores por defecto", () => {
    //render hook es una funcion que recibe como argumento una funcion y la ejecuta
    const { result } = renderHook(() => useCounter());
    // result.current es el valor que retorna la funcion renderHook
    const { counter, increment, decrement, reset } = result.current;

    /*
     *expect recibe como argumento el valor que se espera que retorne la funcion
     *toBe es un metodo que compara el valor que retorna la funcion con el valor que se espera
     */
    expect(counter).toBe(10);

    /* 
      toBeInstanceOf espera que el valor que retorna la funcion 
      sea una instancia de la clase que se le pasa como argumento
     */
    expect(decrement).toBeInstanceOf(Function);
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("Debe de inicializar el counter en 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    // Espera que el valor que retorna la funcion sea 100.
    expect(counter).toBe(100);
  });

  test("Debe de incrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    // act es una funcion que ejecuta una otra funcion que modifica el estado de la aplicacion
    act(() => {
      increment(1);
    });

    expect(result.current.counter).toBe(101);
  });

  test("Debe de decrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    // act es una funcion que ejecuta una otra funcion que modifica el estado de la aplicacion
    act(() => {
      decrement(1);
      decrement(2);
    });

    expect(result.current.counter).toBe(97);
  });

  test("Debe de restablecer al valor de counter al predefinido", () => {
    const { result } = renderHook(() => useCounter(100));
    const { reset, increment } = result.current;
    // act es una funcion que ejecuta una otra funcion que modifica el estado de la aplicacion
    act(() => {
      increment(27);
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});
