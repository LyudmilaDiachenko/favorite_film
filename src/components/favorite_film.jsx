import React from 'react'
import "../style/App.css"
import s from "../style/style.module.css"

export default function Favorite_film(props) {
  return (
    <div className="container">
      <div>
        <img src={props.src} alt="photo" className={s.img}/>
      </div>
      <div className="text_img_container">
        <div className={s.text_container}>
          <h1 className={s.title}>{props.name}</h1>
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
        <div className={s.img_container}>
          <img className={s.afisha_img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAy4DcswIjKMKNIBOi43_Bhx2q9-70BurE1QZFCChhKbOGwd_aPc2myXDziQQPyGFmu7g&usqp=CAU" alt="Afisha" />
          <img className={s.afisha_img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREf-D-gXF8y4H_AFayXuXNXC3sIGFF6d_SWMZP8So-U0efsdiKIwLZtAx4ou02LccVRS4&usqp=CAU" alt="Afisha" />
          <img className={s.afisha_img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfm6WDLJze8N8E_3deBBv9d0V9UxSsYc8ERHmg_rV0DCig0zFlCMEmWrRCmv2O-U7xH0&usqp=CAU" alt="Afisha" />
          <img className={s.afisha_img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLUObRyKDkhnbwjtmsyj0duNYl0F_V9wNwPm6O7JXTfCUgbucrJ9vnS8TcCJ8sk1jwe-M&usqp=CAU" alt="Afisha" />
          <img className={s.afisha_img} src="https://image.tmdb.org/t/p/original/uV6c1JolfNRSwFIz32JQJl6bWeZ.jpg" alt="Afisha" />
        </div>
      </div>
    </div>
  )
}
