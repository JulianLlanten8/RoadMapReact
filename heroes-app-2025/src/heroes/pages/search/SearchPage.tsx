import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "@/heroes/ui/SearchControls";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de SuperHeroes"
        description="descubre, explora y administra super heroes y villanos"
      />

      <CustomBreadcrumbs
        currentPage="Buscador de heroes"
        /* breadcrumbs={[
          { label: "home1", to: "/" },
          { label: "home2", to: "/" },
          { label: "home3", to: "/" },
        ]} */
      />

      {/* stats Dashboard */}
      <HeroStats />

      {/* Controls */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
