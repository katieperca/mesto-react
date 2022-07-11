import React from 'react';

function Card(props) {
  function handleCardClick() {
    props.onCardClick({name: props.name, link: props.link});
  }

  return (
    <li className="elements__item card">
      <div className="card__image-container">
        <img onClick={handleCardClick} className="card__image" alt={props.name} src={props.link} />
      </div>
      <button aria-label="Удалить" type="button" className="card__delete-button card__delete-button_visible button button_type_delete"></button>
      <div className="card__info">
        <h3 className="card__title">{props.name}</h3>
        <div className="card__like-container">
          <button aria-label="Поставить лайк" type="button" className="card__like-button button button_type_like"></button>
          <span className="card__like-counter">{props.likes}</span>
        </div>
      </div>
    </li>
  )
}

export default Card;
