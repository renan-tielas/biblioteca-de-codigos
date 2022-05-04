
import styles from '../styles/objetos.module.css'
// import { Heading, Flex } from '@chakra-ui/react'
// import CartaoPessoal from'../Componentes/CartaoPessoal';
// import Livro from'./Livro';
import { useForm, SubmitHandler } from "react-hook-form";
//Fazer saídas opcionais, para ter codigos sem subtitulo por exemplo


type Inputs = {
  example: string,
  exampleRequired: string,
};


const FormularioCodigo = () => {


  // const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  //  console.log(watch("example"))
  // console.log(errors);
  return (


    
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="Titulo"  />
//       <input type="text" placeholder="Descrição" />
//       <input type="url" placeholder="Links" />
//       <input type="text" placeholder="Conteúdo"  />
//       <input type="text" placeholder="Subtitulo"  />
//       <input type="text" placeholder="Conteudo 2"  />

//       <input type="submit" />
//     </form>
 <div>formularios</div> 
    // <form action="" method="post" >
    //   <fieldset className={styles.formulario_codigo}>

    //     <legend>Compartilhe com a gente seu conhecimento!</legend>
    //     <div className="topo">
    //     <input type="text" name="text" id="POST-titulo"/> <label htmlFor="POST-titulo">Titulo do código, ou tópico</label>
    //     <div></div>
    //     <input type="text" name="text" id="POST-descricao"/> <label htmlFor="POST-descricao">Descrição</label>

    //     </div>

    //     <div className={styles.conteudo}>
    //     <input type="text" name="text" id="POST-texto"/> <label htmlFor="POST-texto">Conteúdo</label>
    //     </div>

    //     <div className={styles.conteudo_2}>
    //     <input type="text" name="text" id="POST-subtexto"className={styles.subtitulo}/> <label htmlFor="POST-subtexto">Conteúdo 2</label>

    //     </div>

    //     <div className={styles.subtitulo}>
    //     <input type="text" name="text" id="POST-subtitulo"/> <label htmlFor="POST-subtitulo">Subtitulo</label>
    //     </div>
    //   </fieldset>
    // </form>




  )

}

export default FormularioCodigo