import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("mounted");

    const mouseMove = ({ x, y }) => {
      const coords = { x, y };
      setCoords(coords);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      <p>
        x: {coords.x} y: {coords.y}
      </p>
    </>
  );
};
