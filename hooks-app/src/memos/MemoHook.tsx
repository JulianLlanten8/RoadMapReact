import { useCallback, useState } from "react";
import { MyTitle } from "./ui/MyTitle";
import { MySubTitle } from "./ui/MySubTitle";

export const MemoHook = () => {
  const [title, setTitle] = useState("hola");
  const [subtitle, setSubtitle] = useState("mundo");

  const handleMyAPICall = useCallback(() => {
    console.log("Llamar a mi API -", subtitle);
  }, [subtitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Memo App</h1>

      <MyTitle title={title} />
      <MySubTitle subtitle={subtitle} callMyAPI={handleMyAPICall} />

      <button
        className="bg-blue-500 text-white px-4 rounded-md cursor-pointer"
        onClick={() => {
          setTitle("Hello");
        }}
      >
        Cambiar titulo
      </button>

      <button
        className="bg-blue-500 text-white px-4 rounded-md cursor-pointer"
        onClick={() => {
          setSubtitle("Word");
        }}
      >
        Cambiar Subtitulo
      </button>
    </div>
  );
};
