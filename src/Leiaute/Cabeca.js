
import Navegacao from '../Arranjos/Navegacao'
import styles from '../styles/layout.module.css'
import Link from 'next/link'

// import { Heading, Flex } from '@chakra-ui/react'



const Cabeca = () => {



    return (
        <div>
  <Link href={`/`}>
            <div className={styles.titulo} >
                    Biblioteca de Códigos
            </div>
            </Link>
            <Navegacao/>
            
        </div>

    )

}

export default Cabeca