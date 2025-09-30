import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      // If system theme, set to light
      setTheme("light");
    }
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative">
        <div className="h-5 w-5" />
      </Button>
    );
  }

  const getIcon = () => {
    if (theme === "light") {
      return <Sun className="h-5 w-5" />;
    } else if (theme === "dark") {
      return <Moon className="h-5 w-5" />;
    } else {
      return <Monitor className="h-5 w-5" />;
    }
  };

  const getTooltip = () => {
    if (theme === "light") return "Cambiar a tema oscuro";
    if (theme === "dark") return "Cambiar a tema del sistema";
    return "Cambiar a tema claro";
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative"
      title={getTooltip()}
    >
      {getIcon()}
      <span className="sr-only">{getTooltip()}</span>
    </Button>
  );
}