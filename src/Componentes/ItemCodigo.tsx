
import styles from '../styles/componentes.module.css'
// import { Heading, Flex } from '@chakra-ui/react'

// { meta }
interface ItemCodigo {
    titulo:string,
    descricao:string,
    texto:string,
    subtitulos:string,
    subitems:string,


}
const ItemCodigo = ({ titulo, descricao, texto, subtitulos, subitems }:ItemCodigo) => {



    return (
      

        <article className={styles.item_codigo} >

            <header>
                <h1 className={styles.titulo_codigo}> {titulo}</h1>
                <p className={styles.descricao_codigo}> {descricao} </p>
            </header>

            <section>
                <span className={styles.texto_codigo}> {texto} </span>
                {subitems
                    // ? subitems.map((i) => (
                    //     <div>
                    //         <div key={0} className={styles.texto_codigo}>

                    //             {subtitulos[i]}
                    //         </div>

                    //         <div key={1} className={styles.texto_codigo}>

                    //             {subitems[i]}
                    //         </div>
                    //     </div>
                    // ))
                    // : ''
                    }
            </section>

        </article>
           )
}

export default ItemCodigo