import React from "react";
import styles from '../styles/layout.module.css'

// import { Heading, Flex } from '@chakra-ui/react'



const Rodape = () => {



    return (
        <div>
            {/* <div className={styles.containerFlex2} align="center" mr={5}> */}
 
            <div className={styles.bordado1} >
                  
                </div>

                <div className={styles.rodape} >
                    <div className={styles.secao_1}>
                    Site para aprender desenvolvimento web em português, com edição de código ao vivo, marcação de progresso, e compartilhamento de conhecimento.
                     <br/>Aprenda, e compartilhe com os amigos!
                    </div>
                    <div className={styles.secao_1}>
                    Código Aleatório
                    </div>
                    <div className={styles.secao_1}>
                    Contribua com seu código, ensine para a comunidade :)
                    </div>
                    <div className={styles.secao_1}>
                    Veja seu progesso<br/><br/>
                    Obrigado por colaborar
                    </div>
         
                  
                </div>

            {/* </div> */}
        </div>

    )

}

export default Rodape