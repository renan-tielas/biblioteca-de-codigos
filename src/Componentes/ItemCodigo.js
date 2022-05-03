
import styles from '../styles/componentes.module.css'
// import { Heading, Flex } from '@chakra-ui/react'

// { meta }


const ItemCodigo = ({ titulo, descricao, texto, subtitulos, subitems }) => {



    return (
      

        <article className={styles.item_codigo} >

            <header>
                <h1 className={styles.titulo_codigo}> {titulo}</h1>
                <p className={styles.descricao_codigo}> {descricao} </p>
            </header>

            <section>
                <span className={styles.texto_codigo}> {texto} </span>
                {subitems
                    ? subitems.map((i) => (
                        <div>
                            <div key={i} className={styles.texto_codigo}>

                                {subtitulos[i]}
                            </div>

                            <div key={i + 1} className={styles.texto_codigo}>

                                {subitems[i]}
                            </div>
                        </div>
                    ))
                    : ''}
            </section>

        </article>
           )
}

export default ItemCodigo