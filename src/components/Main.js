import React from 'react';

function Main() {
  return (
    <main className="content container">
      <section className="profile">
        <button className="profile__avatar-button">
          <img alt="Аватар" className="profile__avatar avatar" />
        </button>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button aria-label="Редактировать профиль" type="button" className="profile__edit-button button button_type_edit"></button>
          </div>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button aria-label="Добавить фото" type="button" className="profile__add-button button button_type_add"></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
        </ul>
      </section>
    </main>
  )
}

export default Main;
