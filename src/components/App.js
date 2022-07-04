// import logo from './logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../index.css';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <section className="popup popup_type_edit">
        <div className="popup__container">
          <form action="post" className="popup__form popup__form_type_edit form" novalidate>
            <h2 className="form__title">Редактировать профиль</h2>
            <input className="form__input" id="name" type="text" name="name" minlength="2" maxlength="40" required />
            <span id="name-error" className="form__input-error name-error"></span>
            <input className="form__input" id="about" type="text" name="about" minlength="2" maxlength="200" required />
            <span id="about-error" className="form__input-error about-error"></span>
            <button className="form__save-button form__save-button_type_edit button button_type_save" type="submit">Сохранить</button>
          </form>
          <button className="popup__close-button button button_type_close" type="button">Закрыть</button>
        </div>
      </section>
      <section className="popup popup_type_add">
        <div className="popup__container">
          <form action="post" className="popup__form popup__form_type_add form" novalidate>
            <h2 className="form__title">Новое место</h2>
            <input className="form__input" id="place-name" type="text" name="place-name" placeholder="Название" minlength="2" maxlength="30" required />
            <span id="place-name-error" className="form__input-error place-name-error"></span>
            <input className="form__input" id="photo" type="url" name="photo" placeholder="Ссылка на картинку" required />
            <span id="photo-error" className="form__input-error photo-error"></span>
            <button className="form__save-button form__save-button_type_add form__save-button_inactive button button_type_save" disabled type="submit">Сохранить</button>
          </form>
          <button className="popup__close-button button button_type_close" type="button">Закрыть</button>
        </div>
      </section>
      <section className="popup popup_type_photo">
        <div className="popup__photo-container">
          <img className="popup__image" />
          <h3 className="popup__title"></h3>
          <button className="popup__close-button button button_type_close" type="button">Закрыть</button>
        </div>
      </section>
      <section className="popup popup_type_confirm">
        <div className="popup__container">
          <form action="post" className="popup__form popup__form_type_confirm form" novalidate>
            <h2 className="form__title form__title_type_confirm">Вы уверены?</h2>
            <button className="form__save-button form__save-button_type_confirm button button_type_save" type="submit">Да</button>
          </form>
          <button className="popup__close-button button button_type_close" type="button">Закрыть</button>
        </div>
      </section>
      <section className="popup popup_type_update-avatar">
        <div className="popup__container">
          <form action="post" className="popup__form popup__form_type_update-avatar form" novalidate>
            <h2 className="form__title">Обновить аватар</h2>
            <input className="form__input" id="avatar" type="url" name="avatar" placeholder="Ссылка на картинку" required />
            <span id="avatar-error" className="form__input-error avatar-error"></span>
            <button className="form__save-button form__save-button_type_update-avatar form__save-button_inactive button button_type_save" disabled type="submit">Сохранить</button>
          </form>
          <button className="popup__close-button button button_type_close" type="button">Закрыть</button>
        </div>
      </section>
    </div>
  );
}

export default App;
