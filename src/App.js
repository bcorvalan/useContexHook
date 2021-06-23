import React, {useState, createContext} from 'react'
import FunctionComponent from './components/FunctionTheme'

export const ThemeContext  = createContext();


function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  function toggleTheme(){
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }
  
  return (
  <ThemeContext.Provider value ={darkTheme}>
    <button onClick={toggleTheme}>Cambiar Tema</button>
    <FunctionComponent/>
  </ThemeContext.Provider>
  );
}

export default App;
