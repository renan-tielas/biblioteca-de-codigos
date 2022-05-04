
import styles from '../styles/leiaute.module.css'
// import BotoesFundo from '../BotoesFundo'
// import { Heading, Flex } from '@chakra-ui/react'

interface Introducao{
    titulo:string,
    conteudo:string,
}

const Introducao = ({titulo,conteudo}:Introducao) => {



    return (

        <section className={styles.conteudo} >
            {titulo}
            {conteudo}

            {/* <BotoesFundo/> */}
        </section>


    )

}

export default Introducao