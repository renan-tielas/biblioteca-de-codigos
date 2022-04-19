import { useState } from 'react/cjs/react.development';
import Botao from'../Componentes/Botao';
import styles from '../styles/arranjos.module.css'
// import { Heading, Flex } from '@chakra-ui/react'


// usar styled components para arranjar botoes, caso mudem de quantidade: de 6 pra 4 botoes..
// estado_botao= setState[0]/////
// assim fazer um "tema" pra inverter as cores do navegador, com a do botão acionado

let estado_botao= 0;
const Navegacao = () => {



    return (
      
                <div className={styles.navegacao} >
                    <Botao conteudo='Nóis' endereco='nois' ativo={estado_botao} />
                    <Botao conteudo='Produtos ' endereco='produtos' ativo={estado_botao}/>
                    <Botao conteudo='Locais' endereco='nois' ativo={estado_botao}/>
                    <Botao conteudo='Ações' endereco='nois' ativo={estado_botao} />
                    <Botao conteudo='Contatos' endereco='nois' ativo={estado_botao}/>
                    <Botao conteudo='Entre'   endereco='nois' ativo={estado_botao} />

                </div>
    )

}

export default Navegacao