import { createContext, useState } from "react";

export const configContext = createContext({})

export const ConfigContextProvider = ({children}) => {

    const [config,setConfig] = useState({
        "WINDSHIELD": "No Windshield",
        "SEAT": "No Passenger Seat",
        "HANDLE BAR": "Normal Height",
        "EXHAUST":"Single Exhaust",
        "MUD GAURD": "Small Mud Guard",
        "COLORS": "Red",
        "SIZE": "Medium"
      })
      return(
      <configContext.Provider value={{config,setConfig}}>
        {children}
    </configContext.Provider>
    )
}