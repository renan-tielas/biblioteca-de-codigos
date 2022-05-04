      import styles from '../styles/conteudos.module.css'
      import BotoesFundo from '../Objetos/BotoesFundo'
import ItemCodigo from '../Componentes/ItemCodigo'
import FormularioCodigo from '../Objetos/FormularioCodigo'


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
                 <FormularioCodigo/>
              </div>
      
      
          )
      
      }
      
      export default ConteudoJavascript