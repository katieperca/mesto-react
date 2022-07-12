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
        buttonTitle='Сохранить'
      >
        <input className="form__input" id="name" type="text" name="name" minLength="2" maxLength="40" placeholder="Имя" required />
        <span id="name-error" className="form__input-error name-error"></span>
        <input className="form__input" id="about" type="text" name="about" minLength="2" maxLength="200" placeholder="Занятие" required />
        <span id="about-error" className="form__input-error about-error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name='add'
        title='Новое место'
        buttonTitle='Сохранить'
      >
        <input className="form__input" id="place-name" type="text" name="place-name" placeholder="Название" minLength="2" maxLength="30" required />
        <span id="place-name-error" className="form__input-error place-name-error"></span>
        <input className="form__input" id="photo" type="url" name="photo" placeholder="Ссылка на картинку" required />
        <span id="photo-error" className="form__input-error photo-error"></span>
      </PopupWithForm>
      <PopupWithForm
        onClose={closeAllPopups}
        name='confirm'
        title='Вы уверены?'
        buttonTitle='Да'
      >
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name='update-avatar'
        title='Обновить аватар'
        buttonTitle='Сохранить'
      >
        <input className="form__input" id="avatar" type="url" name="avatar" placeholder="Ссылка на картинку" required />
        <span id="avatar-error" className="form__input-error avatar-error"></span>
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
