import { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import HttpService from "../../../../services/htttp.service";
// Billing page components
import Animal from "layouts/adocao/components/Animal";

function Animais() {
  
  const [animais, setAnimais] = useState({ animais: [] });

  const getAnimalsData = async () => {
    const response = await HttpService.get("animal");
    setAnimais(() => ({response}));
  };
  
  useEffect(() => {
    getAnimalsData();
  }, []);

  const renderList = () => {
    const listaAnimais = [];
    
    for (const key in animais.response) {

      listaAnimais.push(
      <Animal
       raca={animais.response[key].raca} 
       cor={animais.response[key].cor}
       sexo={animais.response[key].sexo}
       tipo={animais.response[key].tipo}
       nome={animais.response[key].nome}
       porte={animais.response[key].porte}/>);
    }

    return listaAnimais;
  };

  return (
    <Grid container spacing={3}>
      {renderList()}
    </Grid>
  );
}

export default Animais;
