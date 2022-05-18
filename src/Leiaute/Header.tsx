
// import styles from '../styles/componentes.module.css'
// import { Heading, Flex } from '@chakra-ui/react'
// import Link from 'next/link'

import Head from 'next/head'
//  (conteudo:string, endereco:string )
const Header = () => {


    return (

        <Head>
            <title>Biblioteca de Códigos</title>
            <link rel="icon" href="/binary-code.png" />   {/* //icone */}
            <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" lang='ptbr' />
        </Head>

    )

}

export default Header