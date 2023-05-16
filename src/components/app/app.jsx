import styles from "./app.module.css";

import { data } from "../../utils/data";

import React, { useState, useEffect } from 'react';

import api, { configBurger } from '../../Api/Api'

import AppHeader, { Logo, BurgerLink } from '../AppHeader/AppHeader';

import Main from '../Main/Main';

import Modal from "../Modal/Modal";



function App() {

  const [ingredients, setIngredients] = useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [headerModal, setheaderModal] = React.useState('');
  const [childModal, setChildModal] = React.useState('')

  function openModal (modalHeaderName = '', mainModal) {
    setheaderModal(modalHeaderName);
    setChildModal(mainModal);
    setIsModalOpen(true);
  }


  function closeModal() {
    setIsModalOpen(false)
  }


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
        <AppHeader />
        <Main data={data} openModal={openModal} />
        {isModalOpen && (
          <Modal headerModal={headerModal} closeModal={closeModal} >
            {childModal}
            </Modal>
        )}
      </div>
  );
}

export default App;
