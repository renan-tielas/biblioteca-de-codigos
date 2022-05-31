
import styles from '../styles/leiaute.module.css'
// import BotoesFundo from '../Objetos/BotoesFundo'
// import { Component } from 'react'
// import { Heading, Flex } from '@chakra-ui/react'



const Conteudo = ({conteudo}:Element) => {



    return (

        <main className={styles.conteudo} >
            {conteudo}

            {/* <BotoesFundo/> */}
        </main>


    )

}

export default Conteudo