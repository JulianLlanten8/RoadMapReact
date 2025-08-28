import { Button } from "@/components/ui/button";
import { UserContext } from "@/useContext/context/UserContext";
import { use } from "react";
import { Link } from "react-router";

export const AboutPage = () => {
  const { isAuthenticated, logout } = use(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">pagina sobre mi</h1>
      <div className="flex flex-col gap-2">
        {/* Perfil de usuario si tiene sesión */}
        <Link to="/profile" className="hover:text-blue-500 underline">
          Perfil
        </Link>
        {/* Login logout */}
        {isAuthenticated ? (
          <Button variant="destructive" className="mt-4" onClick={logout}>
            Salir
          </Button>
        ) : (
          <Link to="/login" className="hover:text-blue-500 underline">
            Iniciar Sesión
          </Link>
        )}
      </div>
    </div>
  );
};
