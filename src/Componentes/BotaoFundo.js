
import styles from '../styles/layout.module.css'
// import { Heading, Flex } from '@chakra-ui/react'
import Link from 'next/link'


const BotaoFundo = ({conteudo,endereco}) => {


    return (
<Link href={`/${endereco}`}>
        <div className={styles.botaofundo} >

           
        </div>
 </Link>
    )

}

export default BotaoFundo