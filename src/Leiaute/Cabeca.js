
import Navegacao from '../Arranjos/Navegacao'
import styles from '../styles/arranjos.module.css'
import Link from 'next/link'

// import { Heading, Flex } from '@chakra-ui/react'



const Cabeca = () => {



    return (
        <div>
  <Link href={`/`}>
            <div className={styles.titulo} >
                    Célula Solidária
            </div>
            </Link>
            <Navegacao/>
            
        </div>

    )

}

export default Cabeca