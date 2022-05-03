
import styles from '../styles/componentes.module.css'
// import { Heading, Flex } from '@chakra-ui/react'




const ItemCodigo = ({ titulo, descricao, texto, subtitulos,subitems }) => {



    return (
        // <div className={styles.conteudo} >

        <div className={styles.item_codigo} >
            <h1 className={styles.titulo_codigo}> {titulo}</h1>
            <p className={styles.descricao_codigo}> {descricao} </p>
            <span className={styles.texto_codigo}> {texto} </span>
            {subitems
                ? subitems.map((i) => (
                    <div>
                        <div key={i} className={styles.texto_codigo}>

                            {subtitulos[i]}
                        </div>

                        <div key={i+1} className={styles.texto_codigo}>

                        {subitems[i]}
                        </div>
                    </div>
                ))
                : ''}

        </div>
        // </div>


    )

}

export default ItemCodigo