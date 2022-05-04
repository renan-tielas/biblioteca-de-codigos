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
                    <Botao conteudo='JavaScript' endereco='javascript' ativo={estado_botao} />
                    <Botao conteudo='CSS ' endereco='css' ativo={estado_botao}/>
                    <Botao conteudo='HTML' endereco='javascript' ativo={estado_botao}/>
                    <Botao conteudo='React' endereco='javascript' ativo={estado_botao} />
                    <Botao conteudo='Redux' endereco='javascript' ativo={estado_botao}/>
                    <Botao conteudo='Back End' endereco='backend' ativo={estado_botao} />
                    <Botao conteudo='Outros'   endereco='outros' ativo={estado_botao} />
                    <Botao conteudo='Ecossistemas'   endereco='ecossistemas' ativo={estado_botao} />
                    <Botao conteudo='Editor'   endereco='editor' ativo={estado_botao} />
                    

                </nav>
    )

}

export default Navegacao