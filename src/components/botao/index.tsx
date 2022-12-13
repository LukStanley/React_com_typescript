
/* É deste jeito que importamos usando react, criamos a aplicação 
e importamos para nosso html principal*/
import React from "react";
import style from './Botao.module.scss'


class Botao extends React.Component{

    render(){
        return(
            <button className={ style.botao}>
                Botão
            
            </button>

        )
    }
}

export default Botao;