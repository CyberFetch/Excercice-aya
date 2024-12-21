import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Ajouter } from "../TutoSlice";
function Ajout() {
  const [donnees, setDonnees] = useState({
    code : "",
    titre : "",
    description : ""
  });
    const dispatch = useDispatch();
    
    const handleEvent = (e) =>{
      e.preventDefault();
      dispatch(Ajouter(donnees));
      console.log(donnees)
      setDonnees({code : "" , titre : "" , description : ""});
      
    }
  return (
    <div>
      <h1 className="title">Nouveau Tutoriel</h1>
      <form className="form" onSubmit={handleEvent}>
        <div className="m-5">
          <label htmlFor="form-label">Code :</label>
          <input type="text" className="form-control mb-3" value={donnees.code}  onChange={(e)=> setDonnees({...donnees, code : e.target.value})} />
          <label htmlFor="form-label">Titre :</label>
          <input type="text" className="form-control mb-3" value={donnees.titre}  onChange={(e)=> setDonnees({...donnees, titre : e.target.value})} />
          <label htmlFor="form-label">Description :</label>
          <textarea type="text"  className="form-control mb-3" value={donnees.description}  onChange={(e)=> setDonnees({...donnees, description : e.target.value})}/>
          <button type="submit" className="btn btn-primary">Ajouter</button>
        </div>
      </form>
    </div>
  );
}

export default Ajout;
