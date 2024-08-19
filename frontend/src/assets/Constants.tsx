import { createContext, useContext, useState } from "react";


export const Constants = createContext([]);

export const ConstantsProvider = ({children}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [menuWidth, setMenuWidth] = useState<string>("w-0")

    const Global = {
        isOpened, setIsOpened,
        menuWidth, setMenuWidth,
    }

    return(
        <Constants.Provider value={Global}>
            {children}
        </Constants.Provider>
    )
}

//context consumer hook
export const useConstants = () => {
    const context = useContext(Constants);

    if (context == undefined) {
        throw new Error("useConstants was used outside of its Provider");
    }

    return context;
};
