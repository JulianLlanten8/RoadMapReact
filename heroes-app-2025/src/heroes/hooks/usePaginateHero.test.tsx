import type { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { usePaginatedHero } from "./usePaginatedHero";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page-action";

vi.mock("../actions/get-heroes-by-page-action", () => ({
  getHeroesByPageAction: vi.fn(),
}));

const mockGetHeroesByPageAction = vi.mocked(getHeroesByPageAction);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const tanStackCustomProvider = () => {
  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("usePaginateHero", () => {
  beforeEach(() => {
    // Purga la caché antes de cada prueba, para no tener registro de ninguna petición anterior
    vi.clearAllMocks();
    queryClient.clear();
  });

  test("should the initial state (isLoading)", () => {
    const { result } = renderHook(() => usePaginatedHero(1, 6), {
      // Envuelve el hook con el proveedor personalizado, para que funcione React Query
      wrapper: tanStackCustomProvider(),
    });
    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toBe(undefined);
    expect(result.current.data).toBeUndefined();
  });

  test("should the success state with data when API call succeeds", async () => {
    const mockHeroesData = {
      total: 20,
      pages: 4,
      heroes: [],
    };

    mockGetHeroesByPageAction.mockResolvedValue(mockHeroesData);

    const { result } = renderHook(() => usePaginatedHero(1, 6), {
      // Envuelve el hook con el proveedor personalizado, para que funcione React Query
      wrapper: tanStackCustomProvider(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(mockGetHeroesByPageAction).toHaveBeenCalled();
      expect(mockGetHeroesByPageAction).toHaveBeenCalledWith(1, 6, "all");
    });
  });

  test("should call getHeroesByPageAction with arguments", async () => {
    const mockHeroesData = {
      total: 20,
      pages: 4,
      heroes: [],
    };

    mockGetHeroesByPageAction.mockResolvedValue(mockHeroesData);
    // Llamar al hook con argumentos específicos, 1: página, 6: límite, "heroes": categoría
    const { result } = renderHook(() => usePaginatedHero(1, 10, "heroes"), {
      // Envuelve el hook con el proveedor personalizado, para que funcione React Query
      wrapper: tanStackCustomProvider(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(mockGetHeroesByPageAction).toHaveBeenCalled();
      // Verifica que se haya llamado con los argumentos correctos
      expect(mockGetHeroesByPageAction).toHaveBeenCalledWith(1, 10, "heroes");
    });
  });
});
