import { HeroesList } from "../components";

export const Marvel = () => {
  return (
    <>
      <h1 className="h1 text-white">Marvel Comics</h1>
      <hr />

      <HeroesList publicer="Marvel Comics" />
    </>
  );
};
