import styles from "./app.module.css";
import { data } from "../../utils/data";

import React, { useState, useEffect  } from 'react';

import Header from '../AppHeader/AppHeader';

import api, {configBurger} from '../../Api/Api'



function App() {

const [ingredients, setIngredients] = useState([]);


useEffect(() => {
  api
    .getIngredients()
    .then((data) => {
      setIngredients(data);
    })
    .catch((err) => console.log(err));
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
