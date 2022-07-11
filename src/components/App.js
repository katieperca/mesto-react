// import logo from './logo.svg';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name='edit'
        title='Редактировать профиль'
      >
        <input className="form__input" id="name" type="text" name="name" minLength="2" maxLength="40" placeholder="Имя" required />
        <span id="name-error" className="form__input-error name-error"></span>
        <input className="form__input" id="about" type="text" name="about" minLength="2" maxLength="200" placeholder="Занятие" required />
        <span id="about-error" className="form__input-error about-error"></span>
        <button className="form__save-button form__save-button_type_edit button button_type_save" type="submit">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name='add'
        title='Новое место'
      >
        <input className="form__input" id="place-name" type="text" name="place-name" placeholder="Название" minLength="2" maxLength="30" required />
        <span id="place-name-error" className="form__input-error place-name-error"></span>
        <input className="form__input" id="photo" type="url" name="photo" placeholder="Ссылка на картинку" required />
        <span id="photo-error" className="form__input-error photo-error"></span>
        <button className="form__save-button form__save-button_type_add form__save-button_inactive button button_type_save" disabled type="submit">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm
        onClose={closeAllPopups}
        name='confirm'
        title='Вы уверены?'
      >
        <button className="form__save-button form__save-button_type_confirm button button_type_save" type="submit">Да</button>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name='update-avatar'
        title='Обновить аватар'
      >
        <input className="form__input" id="avatar" type="url" name="avatar" placeholder="Ссылка на картинку" required />
        <span id="avatar-error" className="form__input-error avatar-error"></span>
        <button className="form__save-button form__save-button_type_update-avatar form__save-button_inactive button button_type_save" disabled type="submit">Сохранить</button>
      </PopupWithForm>
      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
      >
      </ImagePopup>
    </div>
  );
}

export default App;
