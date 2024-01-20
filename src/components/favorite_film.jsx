import React from 'react'
import "../style/App.css"
import s from "../style/style.module.css"

export default function Favorite_film(props) {
  return (
    <div className="container">
      <div>
        <img src={props.src} alt="photo" className={s.img}/>
      </div>
      <div className={s.text_container}>
        <p className={s.text}>Жанр: <span className={s.min_text}>{props.ganre}</span></p>
        <p className={s.text}>Режисер: <span className={s.min_text}>{props.director}</span></p>
        <p className={s.text}>Продюсер: <span className={s.min_text}>{props.producer}</span></p>
        <p className={s.text}>Сценарист: <span className={s.min_text}>{props.screenwriter}</span></p>
        <p className={s.text}>У головних ролях: <span className={s.min_text}>{props.mainrole}</span></p>
        <p className={s.text}>Оператор: <span className={s.min_text}>{props.operator}</span></p>
        <p className={s.text}>Композитор: <span className={s.min_text}>{props.composer}</span></p>
        <p className={s.text}>Художник: <span className={s.min_text}>{props.artist}</span></p>
        <p className={s.text}>Кінокомпанія: <span className={s.min_text}>{props.filmstudio}</span></p>
        <p className={s.text}>Тривалість: <span className={s.min_text}>{props.duration}</span></p>
        <p className={s.text}>Мова: <span className={s.min_text}>{props.language}</span></p>
        <p className={s.text}>Країна: <span className={s.min_text}>{props.country}</span></p>
        <p className={s.text}>Рік виходу: <span className={s.min_text}>{props.release}</span></p>
        <p className={s.text}>Кошторис: <span className={s.min_text}>{props.estimates}</span></p>
        <p className={s.text}>Касові збори: <span className={s.min_text}>{props.gathering}</span></p>
      </div>
    </div>
  )
}
