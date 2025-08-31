"use client";

import { useState } from "react";

import { Search, Zap, Shield, Heart } from "lucide-react";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

interface Hero {
  id: string;
  name: string;
  alias: string;
  powers: string[];
  description: string;
  strength: number;
  team: string;
  image: string;
}

const initialHeroes: Hero[] = [
  {
    id: "1",
    name: "Clark Kent",
    alias: "Superman",
    powers: ["Super Strength", "Flight", "Heat Vision", "X-Ray Vision"],
    description:
      "The Last Son of Krypton, protector of Earth and symbol of hope.",
    strength: 10,
    team: "Justice League",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    name: "Bruce Wayne",
    alias: "Batman",
    powers: ["Martial Arts", "Detective Skills", "Advanced Technology"],
    description:
      "The Dark Knight of Gotham City, using fear as a weapon against crime.",
    strength: 8,
    team: "Justice League",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    name: "Diana Prince",
    alias: "Wonder Woman",
    powers: ["Super Strength", "Flight", "Lasso of Truth", "Combat Skills"],
    description:
      "Amazonian princess and warrior, champion of truth and justice.",
    strength: 9,
    team: "Justice League",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    name: "Barry Allen",
    alias: "The Flash",
    powers: ["Super Speed", "Time Travel", "Speed Force"],
    description: "The Fastest Man Alive, protector of Central City.",
    strength: 7,
    team: "Justice League",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "5",
    name: "Peter Parker",
    alias: "Spider-Man",
    powers: ["Wall Crawling", "Spider Sense", "Web Shooting", "Super Agility"],
    description:
      "Your friendly neighborhood Spider-Man, with great power comes great responsibility.",
    strength: 7,
    team: "Avengers",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "6",
    name: "Tony Stark",
    alias: "Iron Man",
    powers: ["Powered Armor", "Genius Intellect", "Advanced Technology"],
    description:
      "Billionaire genius inventor who uses his technology to protect the world.",
    strength: 8,
    team: "Avengers",
    image: "/placeholder.svg?height=200&width=200",
  },
];

export const HomePage = () => {
  const [heroes, setHeroes] = useState<Hero[]>(initialHeroes);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newHero, setNewHero] = useState<Omit<Hero, "id">>({
    name: "",
    alias: "",
    powers: [],
    description: "",
    strength: 5,
    team: "",
    image: "/placeholder.svg?height=200&width=200",
  });

  const filteredHeroes = heroes.filter(
    (hero) =>
      hero.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hero.alias.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hero.powers.some((power) =>
        power.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      hero.team.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStrengthColor = (strength: number) => {
    if (strength >= 9) return "text-red-500";
    if (strength >= 7) return "text-orange-500";
    if (strength >= 5) return "text-yellow-500";
    return "text-green-500";
  };

  const getStrengthIcon = (strength: number) => {
    if (strength >= 9) return <Zap className="h-4 w-4" />;
    if (strength >= 7) return <Shield className="h-4 w-4" />;
    return <Heart className="h-4 w-4" />;
  };

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de SuperHeroes"
          description="descubre, explora y administra super heroes y villanos"
        />
        <CustomBreadcrumbs currentPage="Super Héroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Search and Add Hero Section */}

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredHeroes.length} of {heroes.length} heroes
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setActiveTab("favorites")}
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab("villains")}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostrar todos los personajes favoritos */}
            <h1>Favoritos!!!</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar todos los héroes */}
            <h1>Héroes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            {/* Mostrar todos los Villanos */}
            <h1>Villanos</h1>
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={8} />

        {/* No Results */}
        {filteredHeroes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No heroes found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or add a new hero to the database.
            </p>
          </div>
        )}
      </>
    </>
  );
};
