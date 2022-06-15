
import styles from '../styles/componentes.module.css'
import { Torradinha } from '../Tipos/tipos'

const Torradinha = ({titulo,descricao, codigo}:Torradinha) => {


    return (

        <div className={styles.torradinha} >

            <h1>{titulo}</h1><br/><br/>
            {descricao}<br/><br/>
            {codigo}<br/><br/>
        </div>

    )

}

export default Torradinha