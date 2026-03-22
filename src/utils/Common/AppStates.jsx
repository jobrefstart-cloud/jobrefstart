import {useState,createContext,useContext} from 'react';
export const StatesContext = createContext();
export const useStatesContext = () => useContext(StatesContext);

export const AppStates = ({children}) => {
const [showForm, setShowForm] = useState(false);


    let allStates = {
        showForm:showForm,
        setShowForm:setShowForm,
       

    }
    return (
    <StatesContext.Provider value={{ allStates }}>
      {children}
    </StatesContext.Provider>
    );
  }

export default AppStates;