import { createContext, useState } from "react";

export const configContext = createContext({});

export const ConfigContextProvider = ({ children }) => {
  const [config, setConfig] = useState({
    "Wind Shield": "No Windshield",
    Seat: "No Passenger Seat",
    "Handle Bar": "Normal Height",
    Exhaust: "Single Side Dual Exhaust System",
    "Mud Guard": "Small Mud Guard",
    Paint: "Metallic Red",
    Size: "Medium",
  });
  const [cost, setCost] = useState({
    Base: 34000,
    Windshield: 0,
    Seat: 0,
    "Handle Bar": 0,
    Exhaust: 0,
    "Mud Guard": 0,
    Paint: 0,
  });
  return (
    <configContext.Provider value={{ config, setConfig, cost, setCost }}>
      {children}
    </configContext.Provider>
  );
};
