import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Contacto from "./components/Contacto";
import Diccionario from "./components/Diccionario";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";
import Video from "./components/Video";

function App() {
  return (
    <BrowserRouter>
         <div className="bg-[#50B7B8] h-screen" >
            <Route path="/" component={NavBar} />
            <Route path="/" component={Footer}/>
            <Switch>
               <Route exact path="/" component={Inicio} />
               <Route path="/contacto" component={Contacto} />
               <Route path="/diccionario" component={Diccionario} />
               <Route path="/diccionario/id" component={Video} />
               <Route path="*" component={Error404} />
              
            </Switch>
         </div>
      </BrowserRouter>
  );
}

export default App;
