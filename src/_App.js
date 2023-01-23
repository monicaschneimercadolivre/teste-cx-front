import Navbar from './components/Navbar'
import Searchs from './components/Searchs'
import { createGlobalStyle } from "styled-components";
import Home from './components/home';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  :root{
    font-size: 16px;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F2F2F2;
    font-family: 'Montserrat', sans-serif;
   
  }`

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );

}

export default App;
