import React from 'react'
import style from './Body.module.css'

class Body extends React.Component {
    render() {
        return (
            <div className={style.Body}>
                <div className={style.body_inputs}>
                    <ul className={style.input_item}>
                        <li className="input_item">
                            <label htmlFor="item_name">
                                <h3>Имя</h3>
                            </label>
                            <input className={style.input_style} id='item_name' type="tex" placeholder="Имя" />
                        </li>
                        <li className="input_item">
                            <label htmlFor="item_sruname">
                                <h3>Фамилия</h3>
                            </label>
                            <input className={style.input_style} id="item_sruname" type="text" placeholder="Фамилия" />
                        </li>
                        <li className="input_item">
                            <label htmlFor="item_date">
                                <h3>Дата Рождения</h3>
                            </label>
                            <input className={style.input_style} type="text" id="item_date" placeholder="Дата Рождения" />
                        </li>
                        <li className="input_item">
                            <label htmlFor="item_phone">
                                <h3>Телефон</h3>
                            </label>
                            <input className={style.input_style} type="text" id="item_phone" placeholder="Телефон" />
                        </li>
                        <li className="input_item">
                            <label htmlFor="item_site">
                                <h3>Сайт</h3>
                            </label>
                            <input className={style.input_style} type="text" id="item_site" placeholder="Сайт" />
                        </li>
                        <li className="input_item">
                            <label htmlFor="item_about">
                                <h3>О себе</h3>
                            </label>
                            <textarea className={style.input_style} name="text" id="item_about" max-cols="30" rows="7" maxLength={470} placeholder="О себе"></textarea>
                        </li>
                        <li className="input_item">
                            <label htmlFor="item_tech">
                                <h3>Стэк Технологий</h3>
                            </label>
                            <textarea className={style.input_style} name="text" id="item_tech" cols="30" rows="7" maxLength={470} placeholder="Технологии"></textarea>

                        </li>
                        <li className="input_item">
                            <label htmlFor="item_last">
                                <h3>Описание последнего проекта</h3>
                            </label>
                            <textarea className={style.input_style} name="text" id="item_last" cols="30" rows="7" maxLength={470}  placeholder="Описание проекта"></textarea>

                        </li>
                    </ul>

                </div>
            </div>
        )
    }

}





export default Body;