
import Navegacao from './Navegacao'
import styles from '../styles/leiaute.module.css'
import Link from 'next/link'
import Header from './Header'
// import { Heading, Flex } from '@chakra-ui/react'



const Cabeca = () => {



    return (
        <header>
            <Header/>
            <Link href={`/`}>
                <div className={styles.titulo} >
                    Laboratório do Código
                </div>
            </Link>
            <Navegacao />

        </header>

    )

}

export default Cabeca