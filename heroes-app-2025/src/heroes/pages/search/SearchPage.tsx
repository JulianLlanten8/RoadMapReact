import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "@/heroes/ui/SearchControls";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? undefined;
  const strength = searchParams.get("strength") ?? undefined;

  const { data: heroes, isError } = useQuery({
    queryKey: ["search", { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

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
      {!heroes || isError ? (
        <div>No existen resultados</div>
      ) : (
        <HeroGrid heroes={heroes}></HeroGrid>
      )}
    </>
  );
};

export default SearchPage;
