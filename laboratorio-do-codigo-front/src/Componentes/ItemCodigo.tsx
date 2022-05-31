
import styles from '../styles/itens.module.css'
// import { Heading, Flex } from '@chakra-ui/react'

// { meta }
interface ItemCodigo {
    titulo:string,
    descricao:string,
    conteudo:string,
    codigo:string,
    subtitulos:string[],
    subitems:string[],
    link:string,
    // mudar para url


}
const ItemCodigo = ({ titulo, descricao, conteudo, codigo, subtitulos, subitems }:ItemCodigo) => {



    return (
      

        <article className={styles.item_codigo} >

            <header>
                <h1 className={styles.titulo_codigo}> {titulo}</h1>
                <p className={styles.descricao_codigo}> {descricao} </p>
            </header>

            <section  className={styles.conteudo}>
                <span> {conteudo} </span>
                <br/> <br/>
                <code> {codigo} </code>
                <br/> <br/>
                {subitems }{ subtitulos}
                <button  className={styles.botao_codigo}>comentar</button>
                <button  className={styles.botao_codigo}>deletar</button>
                    {/* // ? subitems.map((i) => (
                    //     <div>
                    //         <div key={0} className={styles.texto_codigo}>

                    //             {subtitulos[i]}
                    //         </div>

                    //         <div key={1} className={styles.texto_codigo}>

                    //             {subitems[i]}
                    //         </div>
                    //     </div>
                    // ))
                    // : '' */}
                   
                    
            </section>

        </article>
           )
}

export default ItemCodigo