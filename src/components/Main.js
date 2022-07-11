import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription , setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([data, items]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setCards(items);
      }).catch((err) => {
        console.log('Ой, ошибка', err);
      });
  }, []);

  return (
    <main className="content container">
      <section className="profile">
        <button className="profile__avatar-button" onClick={props.onEditAvatar}>
          <img alt="Аватар" className="profile__avatar avatar" src={userAvatar} />
        </button>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__title">{userName}</h1>
            <button onClick={props.onEditProfile} aria-label="Редактировать профиль" type="button" className="profile__edit-button button button_type_edit"></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button onClick={props.onAddPlace} aria-label="Добавить фото" type="button" className="profile__add-button button button_type_add"></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          { cards.map((item) => {
            return (
              <Card
                key={item._id}
                name={item.name}
                link={item.link}
                likes={item.likes.length}
                onCardClick={props.onCardClick}
              />
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default Main;
