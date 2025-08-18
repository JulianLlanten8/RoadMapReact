import { useState, useEffect } from "react";

export const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

export type TrafficLightColor = keyof typeof colors;

export function useTrafficLight(initialColor: TrafficLightColor = "red") {
  const [light, setLight] = useState<TrafficLightColor>(initialColor);
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    if (countDown === 0) return;
    const intervalId = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countDown]);

  useEffect(() => {
    if (countDown > 0) return;
    setCountDown(5);
    setLight((prev) => {
      switch (prev) {
        case "red":
          return "green";
        case "yellow":
          return "red";
        case "green":
          return "yellow";
        default:
          return "red";
      }
    });
  }, [countDown]);

  return {
    //Props
    light,
    countDown,
    // computed
    percentage: (countDown / 5) * 100,
    redLight: light === "red" ? colors.red : "bg-gray-500",
    yellowLight: light === "yellow" ? colors.yellow : "bg-gray-500",
    greenLight: light === "green" ? colors.green : "bg-gray-500",
  };
}
