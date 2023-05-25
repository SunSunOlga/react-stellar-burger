import React from 'react';

import headerStyles from '../AppHeader/AppHeader.module.css';

import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
  return (
    <header className={`${headerStyles.header} pt-4 pb-4`}>
      <nav className={headerStyles.menu}>
        <div className={`${headerStyles.headerLink} pl-5 pr-5 pb-4 pt-4`}>
          <BurgerIcon type="primary" />
          <span className="text text_type_main-default pl-1">Констуктор</span>
        </div>
        <div className={`${headerStyles.headerLink} pl-5 pr-5 pb-4 pt-4`}>
          <ListIcon type="secondary" />
          <span className="text text_type_main-default text_color_inactive pl-1">Лента заказов</span>
        </div>
        <div className={headerStyles.logo}>
          <Logo />
        </div>
        <div className={`${headerStyles.headerLink} pl-5 pr-5 pb-4 pt-4`}>
          <ProfileIcon type="secondary" />
          <span className="text text_type_main-default text_color_inactive pl-1">Личный кабинет</span>
        </div>
      </nav>
    </header>

  );
}

export default AppHeader;