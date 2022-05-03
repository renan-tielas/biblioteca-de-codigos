      import styles from '../styles/conteudos.module.css'
      import BotoesFundo from '../Leiaute/BotoesFundo'
import ItemCodigo from '../Componentes/ItemCodigo'
    //   import 
      // import { Heading, Flex } from '@chakra-ui/react'
      

      // dados = {}
      
      
      const ConteudoJavascript = () => {
      
      
      
          return (
            // 
              <div className={styles.ConteudoJavascript} >
                 {/* <ItemCodigo titulo={'For'} descricao={'Faça um for lindo'} texto={'Agore mesmo voce vai aprender'} /> */}
                 {/* <ItemCodigo titulo={'bla'} descricao={'bliu'} /> */}

                 <ItemCodigo titulo={'bla'} descricao={'bliu'} 
                 subtitulos={['subtitulo1','subtitulo2'] } 
                 subitems={['subitem1','subitem2'] }
                 link={['www.link.com']} />
                
              </div>
      
      
          )
      
      }
      
      export default ConteudoJavascript