
import styles from '../styles/layout.module.css'
import BotoesFundo from '../Leiaute/BotoesFundo'
// import { Heading, Flex } from '@chakra-ui/react'



const Conteudo = ({conteudo}) => {



    return (

        <div className={styles.conteudo} >
            {conteudo}

            {/* <BotoesFundo/> */}
        </div>


    )

}

export default Conteudo