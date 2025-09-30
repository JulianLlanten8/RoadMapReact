import { CustomPagination } from "@/components/custom/CustomPagination";
import { products } from "@/mocks/products.mock";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";
import { useParams } from "react-router";

export const GenderPage = () => {
  const { gender } = useParams();

  const genderLabel = (() => {
    switch (gender) {
      case "men":
        return "Hombres";
      case "women":
        return "Mujeres";
      case "kid":
        return "Niños";
      default:
        return "Todos los productos";
    }
  })();

  return (
    <>
      <CustomJumbotron title={`Productos para ${genderLabel}`} />
      {/* Products Grid */}
      <ProductsGrid products={products} />
      <CustomPagination totalPages={7} />
    </>
  );
};
