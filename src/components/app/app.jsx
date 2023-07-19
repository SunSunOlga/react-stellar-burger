import styles from "./app.module.css";

import Preloader from "../Preloader/Preloader";

import React, { useState, useEffect } from 'react';

import api, { configBurger } from '../../Api/Api'

import AppHeader, { Logo, BurgerLink } from '../AppHeader/AppHeader';

import Main from '../Main/Main';

import Modal from "../Modal/Modal";



function App() {

  const [data, setIngredients] = useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [headerModal, setheaderModal] = React.useState('');
  const [childModal, setChildModal] = React.useState('')

  const [isLoading, setIsLoading] = useState(true);

 
  function openModal(modalHeaderName = '', mainModal) {
    setheaderModal(modalHeaderName);
    setChildModal(mainModal);
    setIsModalOpen(true);
  }


  function closeModal() {
    setIsModalOpen(false)
  }

  useEffect(() => {
    setIsLoading(true)
    api
      .getIngredients()
      .then((data) => {
        setIngredients(data.data);
        setIsLoading(false)
        console.log(data.data)
      })
      .catch((err) => console.log(err));

  }, []);

  if (data.length < 1) return null

 

  if (isLoading) {
    return (
      <Preloader />
    )
  }

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
