import type { PropsWithChildren } from "react";
import { describe, expect, test, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useHeroSummary } from "./useHeroSummary";
import { getSummaryAction } from "../actions/get-summary.action";

vi.mock("../actions/get-summary.action", () => ({
  getSummaryAction: vi.fn(),
}));

const mockGetSummaryAction = vi.mocked(getSummaryAction);
// Crear un proveedor personalizado para envolver los hooks que usan React Query
const tanStackCustomProvider = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useHeroSummary", () => {
  test("should the initial state (isLoading)", () => {
    const { result } = renderHook(() => useHeroSummary(), {
      // Envuelve el hook con el proveedor personalizado, para que funcione React Query
      wrapper: tanStackCustomProvider(),
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toBe(undefined);
    expect(result.current.data).toBeUndefined();
  });

  test("should return success state with data when API call is successful", async () => {
    const mockSummaryData = {
      totalHeroes: 10,
      strongestHero: {
        id: "1",
        name: "Superman",
      },
      smartestHero: {
        id: "2",
        name: "Batman",
      },
      heroCount: 18,
      villainCount: 7,
    } as SummaryInformationResponse;

    mockGetSummaryAction.mockResolvedValue(mockSummaryData);

    const { result } = renderHook(() => useHeroSummary(), {
      wrapper: tanStackCustomProvider(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.isError).toBe(false);
    expect(mockGetSummaryAction).toHaveBeenCalled();
    expect(mockGetSummaryAction).toHaveBeenCalledWith();
  });

  test("should return error state when API call fails", async () => {
    const mockError = new Error("Failed to fetch summary data");

    mockGetSummaryAction.mockRejectedValue(mockError);

    const { result } = renderHook(() => useHeroSummary(), {
      wrapper: tanStackCustomProvider(),
    });

    await waitFor(() => {
      expect(result.current.error).toBeDefined();
      expect(result.current.isLoading).toBe(false);
      expect(mockGetSummaryAction).toHaveBeenCalled();
      expect(result.current.error?.message).toBe(
        "Failed to fetch summary data"
      );
    });
  });
});
