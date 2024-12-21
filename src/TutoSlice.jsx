import { createSlice } from "@reduxjs/toolkit";

import { listeTuto } from "./data";


const TutoSlice = createSlice ({
    name : "Tuto",
    initialState : {listeTuto},
    reducers : {
      "Ajouter" : (state,action) => {
        state.listeTuto.push(action.payload);
      },
      Supprimer: (state, action) => {
        state.listeTuto = state.listeTuto.filter(
          (tuto) => tuto.code !== action.payload
        );
      },
      "Modifier" : (state, action) => {
        state.listeTuto = state.listeTuto.map((tuto) => {
          if(tuto.code === action.payload.code) {
              return {...tuto, ...action.payload};
          }
          return tuto;
      }); 
      }
      

    }
})

export const {Ajouter,Supprimer,Modifier} = TutoSlice.actions;

export default TutoSlice.reducer;