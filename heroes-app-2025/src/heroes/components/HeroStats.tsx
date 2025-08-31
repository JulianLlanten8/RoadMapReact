import { Badge } from "@/components/ui/badge";
import { Heart, Trophy, Users, Zap } from "lucide-react";
import { HeroStatCars } from "./HeroStatCars";

export const HeroStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <HeroStatCars
        title="Total Characters"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold"></div>
        <div className="flex gap-1 mt-2">
          <Badge variant="secondary" className="text-xs">
            Heroes
          </Badge>
          <Badge variant="destructive" className="text-xs">
            Villains
          </Badge>
        </div>
      </HeroStatCars>

      <HeroStatCars
        title="Favoritos"
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold text-red-600">3</div>
        <p className="text-xs text-muted-foreground">% of total</p>
      </HeroStatCars>

      <HeroStatCars
        title="Strongest"
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">Super Man</div>
        <p className="text-xs text-muted-foreground">Strength: 10/10</p>
      </HeroStatCars>

      <HeroStatCars
        title="Inteligente"
        icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">Batman</div>
        <p className="text-xs text-muted-foreground">Intelligence: 10/10</p>
      </HeroStatCars>

      {/* 

       */}
    </div>
  );
};
