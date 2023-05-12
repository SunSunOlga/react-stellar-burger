import styles from "./app.module.css";

import { data } from "../../utils/data";

import React, { useState, useEffect  } from 'react';

import api, {configBurger} from '../../Api/Api'

import AppHeader, {Logo, BurgerLink} from '../AppHeader/AppHeader';

import Main from '../Main/Main';

import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";



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
    <>
    <div className={styles.app}>
     <AppHeader />
     <Main data={data}/>
    </div>
    </>
  );
}

export default App;
