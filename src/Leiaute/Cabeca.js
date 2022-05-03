
import Navegacao from '../Arranjos/Navegacao'
import styles from '../styles/layout.module.css'
import Link from 'next/link'

// import { Heading, Flex } from '@chakra-ui/react'



const Cabeca = () => {



    return (
        <header>
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