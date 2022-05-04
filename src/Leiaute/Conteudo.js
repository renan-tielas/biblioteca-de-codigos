
import styles from '../styles/layout.module.css'
import BotoesFundo from '../Arranjos/BotoesFundo'
// import { Heading, Flex } from '@chakra-ui/react'



const Conteudo = ({conteudo}) => {



    return (

        <main className={styles.conteudo} >
            {conteudo}

            {/* <BotoesFundo/> */}
        </main>


    )

}

export default Conteudo