
import styles from '../styles/leiaute.module.css'
import BotoesFundo from '../BotoesFundo'
// import { Heading, Flex } from '@chakra-ui/react'



const Introducao = ({titulo,conteudo}) => {



    return (

        <section className={styles.conteudo} >
            {titulo}
            {conteudo}

            {/* <BotoesFundo/> */}
        </section>


    )

}

export default Introducao