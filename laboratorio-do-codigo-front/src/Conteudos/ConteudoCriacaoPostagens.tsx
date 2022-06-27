      import styles from '../styles/conteudos.module.css'
      // import BotoesFundo from '../Objetos/BotoesFundo'
import ItemCodigo from '../Componentes/ItemCodigo'
import FormularioCodigo from '../Objetos/FormularioCodigo'


      // dados = {}
      
      
      const ConteudoJavascript = () => {
      
      
      
          return (
            // 
              <div className={styles.conteudo_javascript} >
                 {/* <ItemCodigo titulo={'For'} descricao={'Faça um for lindo'} texto={'Agore mesmo voce vai aprender'} /> */}
                 {/* <ItemCodigo titulo={'bla'} descricao={'bliu'} /> */}

                 <ItemCodigo titulo={'Como fazer um backend com WordPress'} 
                 descricao={'Aprenda finalmente a fazer um backend com manutenção simples'} 
                 conteudo={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut tortor id turpis faucibus pulvinar quis a lectus. Aliquam in laoreet erat. Praesent elit risus, ullamcorper sed diam et, volutpat volutpat velit. Aenean ultricies id nisl vitae aliquet. Sed ac turpis venenatis, varius lacus non, vestibulum lacus. Etiam sodales accumsan nisi. Donec lobortis imperdiet nisl.  Sed quam mauris, tristique in pharetra eget, vehicula id leo. Ut vitae malesuada odio. Nunc sollicitudin orci eu tempor volutpat. Curabitur interdum mi a ultrices blandit. Suspendisse volutpat ex et fringilla pulvinar. Maecenas laoreet eget magna ut vulputate. Morbi varius a purus sit amet luctus. Nulla pulvinar in felis in cursus. Sed lacus lectus, ullamcorper ut velit at, dignissim porta elit. Phasellus interdum ex eget quam porttitor vestibulum. Aenean gravida fringilla vehicula. Sed sed ligula laoreet, feugiat lacus nec, faucibus nibh. Quisque eget varius metus. Vivamus pretium placerat tincidunt.'}
                 codigo={' <textarea name="Text1" cols="40" rows="5">  </textarea>'}
                 
                //  subtitulos={['subtitulo1','subtitulo2'] } 
                //  subitems={['subitem1','subitem2'] }
                //  link={'www.link.com'}
                  />


                   <ItemCodigo titulo={'Estruturas de Dados Com JavaScript'} 
                 descricao={'veja os principais esquemas para estruturar seus bancos de dados'} 
                 conteudo={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut tortor id turpis faucibus pulvinar quis a lectus. Aliquam in laoreet erat. Praesent elit risus, ullamcorper sed diam et, volutpat volutpat velit. Aenean ultricies id nisl vitae aliquet. Sed ac turpis venenatis, varius lacus non, vestibulum lacus. Etiam sodales accumsan nisi. Donec lobortis imperdiet nisl.  Sed quam mauris, tristique in pharetra eget, vehicula id leo. Ut vitae malesuada odio. Nunc sollicitudin orci eu tempor volutpat. Curabitur interdum mi a ultrices blandit. Suspendisse volutpat ex et fringilla pulvinar. Maecenas laoreet eget magna ut vulputate. Morbi varius a purus sit amet luctus. Nulla pulvinar in felis in cursus. Sed lacus lectus, ullamcorper ut velit at, dignissim porta elit. Phasellus interdum ex eget quam porttitor vestibulum. Aenean gravida fringilla vehicula. Sed sed ligula laoreet, feugiat lacus nec, faucibus nibh. Quisque eget varius metus. Vivamus pretium placerat tincidunt.'}
                 />
                 
                 <FormularioCodigo/>
              </div>
      
      
          )
      
      }
      
      export default ConteudoJavascript