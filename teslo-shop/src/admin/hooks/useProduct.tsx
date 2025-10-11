import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductByIdAction } from "../pages/actions/get-product-id.action";
import type { Product } from "@/interfaces/product.interface";
import { createUpdateProductAction } from "../actions/create-update.action";

export const useProduct = (id: string) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProductByIdAction(id),
    staleTime: 1000 * 60 * 5, //5 minutos de refresco
  });

  // Manejar la mutación
  const mutation = useMutation({
    mutationFn: createUpdateProductAction,
    onSuccess: (product: Product) => {
      // Invalidar el cache para que se muestra con los datos anteriores
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({
        queryKey: ["product", { id: product.id }],
      });

      // Actualizar el queryData que ya se tenia de los productos globales asi no se hace un llamado adicional
      queryClient.setQueryData(["products", { id: product.id }], product);
      console.log("Todo salio bien", product);
      //TODO
    },
  });

  /*
   *Partial es una Función de TypeScript para hacer las propiedades no sean necesarias todas.
   */
  /* const handleSubmitForm = async (productLike: Partial<Product>) => {
    console.log({ productLike });
  }; */

  return {
    ...query,
    mutation,
  };
};
