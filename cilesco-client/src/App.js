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
         <div className="bg-[#50B7B8] h-screen overflow-x-hidden relative scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F98D00]  " >
            <Route path="/" component={NavBar} />
            <Switch>
               <Route exact path="/" component={Inicio} />
               <Route path="/contacto" component={Contacto} />
               <Route exact path="/diccionario" component={Diccionario} />
               <Route path="/diccionario/:id" component={Video} />
               <Route path="*" component={Error404} />
              
            </Switch>
         </div>
      </BrowserRouter>
  );
}

export default App;
