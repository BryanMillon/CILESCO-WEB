import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Contacto from "./components/Contacto";
import Diccionario from "./components/Diccionario";
import Error404 from "./components/Error404";
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";
import {Preguntas}  from "./components/Preguntas";

function App() {
  return (
    <BrowserRouter>
         <div className="bg-[#50B7B8] h-screen overflow-x-hidden relative scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F98D00]  " >
            <Route path="/" component={NavBar} />
            <Switch>
               <Route exact path="/" component={Inicio} />
               <Route exact path="/contacto" component={Contacto} />
               <Route exact path="/preguntasfrecuentes" component={Preguntas}/>
               <Route exact path="/diccionario" component={Diccionario} />
               <Route path="*" component={Error404} />
              
            </Switch>
         </div>
      </BrowserRouter>
  );
}

export default App;
