import React from "react";
import footer from './Footer.module.css'

class Footer extends React.Component{
    render(){
        return(
            <div className={footer.main}>
                <button id="cancel" className={footer.footer_buttons}>Отмена</button>
                <button id="save" className={footer.footer_buttons}>Сохранить</button>
            </div>
        )
    }
}


export default Footer;