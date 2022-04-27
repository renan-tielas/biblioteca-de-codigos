
import styles from '../styles/componentes.module.css'
// import { Heading, Flex } from '@chakra-ui/react'
import Link from 'next/link'


const Botao = ({conteudo,endereco}) => {


    return (
<Link href={`/${endereco}`}>
        <div className={styles.botaofundo} >

            {conteudo}
        </div>
 </Link>
    )

}

export default Botao