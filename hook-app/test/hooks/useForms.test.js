import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en el useForm", () => {
  const initialForm = {
    name: "Julian",
    email: "julian@gmail.com",
  };
  test("Debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    console.log(result.current);
    //Se tiene la expectativa de que useForm retorne un objeto con las siguientes propiedades
    expect(result.current).toEqual({
      name: "Julian",
      email: "julian@gmail.com",
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("Debe de hacer el reset del formulario", () => {
    const newValue = "Juan";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });
      onResetForm();
    });
    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
