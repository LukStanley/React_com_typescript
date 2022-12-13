//É desta maneira que escrevemos uma component Function em React

import React from 'react'
import style from './Lista.module.scss';


function Lista(){

    const tarefas = [{

        tarefa: "React",
        tempo:  "02:00:00"
    },
    {
        tarefa: "Javascript",
        tempo: "01:00:00"
    },
    { tarefa: "TypeScript",
      tempo: "02:00:00"  

    }

]   /*.map percorre o array e seleciona o que queremos, lembre se de que quando usamos ()
a função ja irá retornar, se colocarmos {} ao invés de retornar teremos um scopo */

    return(
        <aside className={style.listaTarefas}>
            <ul>
                {tarefas.map((item, index) =>(
                    <li key={index} className={style.item}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )}


export default Lista;