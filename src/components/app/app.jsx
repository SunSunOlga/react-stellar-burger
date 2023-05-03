import styles from "./app.module.css";
import { data } from "../../utils/data";

import React, { useState, useEffect  } from 'react';

import Header from '../AppHeader/AppHeader';

import Api from '../../Api/Api'

function App() {

  const [state, setState] = useState({
    data: []
  });

   useEffect(() => { 
     const  getDataIngredient= async () => {

     let ingredients;
       //вызываю асинхронный вызов и его обработку
     try {
        ingredients = await Api.getIngredients();
  
        ingredients && setState({ingredients});

     } catch(err) {
       console.dir(err);
     }
  }  
    getDataIngredient();

  }, []);


  return (
    <div className={styles.app}>
      <pre style={{
      	margin: "auto",
      	fontSize: "1.5rem"
      }}>
      	Измените src/components/app/app.jsx и сохраните для обновления.
      </pre>
    </div>
  );
}

export default App;
