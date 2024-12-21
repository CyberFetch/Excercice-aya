import React from "react";
import {Link, Routes , Route} from "react-router-dom";
import Ajout from "./Ajout";
import List from "./List";

function App(){
    
    return(
        <div>
            <nav style={{backgroundColor : "black"}}>
                <span style={{color : "white" , fontSize : "30px"}}>E-Learning</span>
                <Link to="/" style={{color : "white" , textDecoration : "none" , marginLeft: "12px"}}>Acceuil</Link> 
                <Link to="/NouveauTutoriel" style={{color : "white" , textDecoration : "none" , marginLeft: "12px"}}>Nouveau Tutoriel</Link>
            </nav>
            <Routes>
                <Route path="/" element = {<List/>}/>
                <Route path="/NouveauTutoriel" element = {<Ajout/>}/>
            </Routes>
        </div>
    )

}

export default App;