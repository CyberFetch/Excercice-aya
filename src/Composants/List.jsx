import { useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Supprimer} from "../TutoSlice";
import { Modifier } from "../TutoSlice";

function List(){
    const [search,setSearch] = useState("");
    const listeTuto = useSelector((state) => state.tuto.listeTuto);
    const filtertuto = listeTuto.filter((tuto) => 
        tuto.titre.toLowerCase().includes(search.toLowerCase()) ||
        tuto.description.toLowerCase().includes(search.toLowerCase())
    );
    // const [updateTuto , setUpdateTuto] = useState({
    //     code : "",
    //     titre : "",
    //     description : ""
    // });
    const dispatch = useDispatch();

    const handleDelete = (code) => {
        dispatch(Supprimer(code));
      };
      
    const handleEdit = (code) => {
        dispatch(Modifier(code))
    }
    return (
        <>
        <div className="m-4 text-center">
            <input type="form-control mr-3" id="search" value={search} placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
            <button type="button" className="btn btn-primary">Search</button>
        </div>
            <table className="table table-bordered m-4">
                <thead>
                <tr>
                    <th>Code</th>
                    <th>Titre</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        filtertuto.map((tutoriel,index) => {
                            return (
                                <tr key={index}>
                                    <td>{tutoriel.code}</td>
                                    <td>{tutoriel.titre}</td>
                                    <td>{tutoriel.description}</td>
                                    <td><i className="bi bi-pencil" style={{ marginRight: "28px" }} onClick={()=> handleEdit(tutoriel.code)} /><i class="bi bi-trash3" style={{color: "red"}} onClick={() => handleDelete(tutoriel.code)}></i></td>
                                </tr>
                            )
                        } )
                    }
                </tbody>
            </table>
        </>
    )
}

export default List;