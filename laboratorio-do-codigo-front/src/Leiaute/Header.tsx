
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
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1"  />
            <meta httpEquiv="content-language" content="pt-br" />
            <meta name="description" content="Site para concentrar desenvolvedores que queiram aprender e compartilhar saberes"/>
            <meta name="keywords" content="desenvolvimento, código, tecnologia social, economia solidária"/>
        </Head>

    )

}

export default Header