import { CustomPagination } from "@/components/custom/CustomPagination";
import { products } from "@/mocks/products.mock";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";

export const HomePage = () => {
  return (
    <div>
      <CustomJumbotron
        title="Todos los productos"
        subtitle="Ropa minimalista y elegante inspirada en el diseño futurista de Tesla."
      />
      {/* Products Grid */}
      <ProductsGrid products={products} />
      <CustomPagination totalPages={7} />
    </div>
  );
};
