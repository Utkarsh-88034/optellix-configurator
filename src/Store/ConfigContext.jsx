import { createContext, useState } from "react";

export const configContext = createContext({});

export const ConfigContextProvider = ({ children }) => {
  const [config, setConfig] = useState({
    Windshield: "No Windshield",
    Seat: "No Passenger Seat",
    "Handle Bar": "Normal Height",
    Exhaust: "Single Side Dual Exhaust System",
    "Mud Guard": "Small Mud Guard",
    Paint: "Metallic Red",
    Size: "Medium",
  });
  return (
    <configContext.Provider value={{ config, setConfig }}>
      {children}
    </configContext.Provider>
  );
};
