import Intro from "./components/Intro";
import About from './components/About';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import Toggle from './components/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './context';
import Footer from "./components/Footer";

function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div style={{backgroundColor: darkMode && "#222", color:darkMode && "white" 
      }}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;


