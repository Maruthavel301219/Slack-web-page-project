import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Routing from "./Routing";
import Footer from "./Footer";
import './bakery.css'


function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Header/>
          <Routing/>
          <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App;
