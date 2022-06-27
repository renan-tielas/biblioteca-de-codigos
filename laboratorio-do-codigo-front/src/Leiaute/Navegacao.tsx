import { useState } from 'react/cjs/react.development';

import Botao from'../Componentes/Botao';
import styles from '../styles/objetos.module.css'
// import { Heading, Flex } from '@chakra-ui/react'


// usar styled components para arranjar botoes, caso mudem de quantidade: de 6 pra 4 botoes..
// estado_botao= setState[0]/////
// assim fazer um "tema" pra inverter as cores do navegador, com a do botão acionado

let estado_botao = false;
// fazer mudança de cores usando estado useState 

const Navegacao = () => {



    return (
      
                <nav className={styles.navegacao} >
                    <Botao conteudo='HTML' endereco='javascript' ativo={estado_botao}/>
                    <Botao conteudo='CSS ' endereco='css' ativo={estado_botao}/>
                    <Botao conteudo='JavaScript' endereco='paginas/Javascript' ativo={estado_botao} />
                    <Botao conteudo='TypeScript' endereco='javascript' ativo={estado_botao} />
                    <Botao conteudo='Front End' endereco='javascript' ativo={estado_botao} />
                    <Botao conteudo='Back End' endereco='backend' ativo={estado_botao} />
                    <Botao conteudo='Ferramentas'   endereco='outros' ativo={estado_botao} />
                    <Botao conteudo='Padrões'   endereco='outros' ativo={estado_botao} />
                    <Botao conteudo='Design'   endereco='ecossistemas' ativo={estado_botao} />
                    <Botao conteudo='Editor'   endereco='paginas/Editor' ativo={estado_botao} />
                </nav>
    )

}

export default Navegacao