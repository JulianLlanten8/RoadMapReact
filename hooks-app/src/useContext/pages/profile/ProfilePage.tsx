import { Button } from "@/components/ui/button";
import { UserContext } from "@/useContext/context/UserContext";
import { use } from "react";

export const ProfilePage = () => {
  const { logout,user } = use(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl">perfil del usuario</h1>
      <hr />

      <pre className="my-4 w-[50%] overflow-x-auto">{JSON.stringify(user, null, 2)}</pre>

      <Button variant="destructive" onClick={logout}>Salir</Button>
    </div>
  );
};
