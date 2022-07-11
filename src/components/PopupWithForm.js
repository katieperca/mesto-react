import React from 'react';

function PopupWithForm(props) {
  const classNameToggleOpen = `popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`;

  return(
    <section className={classNameToggleOpen}>
      <div className="popup__container">
        <form action="post" name={`${props.name}`} className={`popup__form popup__form_type_${props.name} form`} noValidate>
          <h2 className="form__title">
            {props.title}
          </h2>
          {props.children}
        </form>
        <button onClick={props.onClose} className="popup__close-button button button_type_close" type="button">Закрыть</button>
      </div>
    </section>
  )
}

export default PopupWithForm;
