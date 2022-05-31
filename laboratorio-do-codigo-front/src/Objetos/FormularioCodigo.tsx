
import styles from '../styles/formularios.module.css'
// import { Heading, Flex } from '@chakra-ui/react'
// import CartaoPessoal from'../Componentes/CartaoPessoal';
// import Livro from'./Livro';

// import { useForm, SubmitHandler } from "react-hook-form";

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


    // style={{width:'100%',marginBottom:'20rem'}}
//  <div >
    <form  className={styles.formulario_codigo} action="" method="post" id="formulario-codigo" >
      <fieldset  className={styles.formulario_borda}>

        <legend style={{padding:'10px 20px',fontSize:'22px'}}>Compartilhe com a gente seu conhecimento!</legend>
        <div className="topo">
        <input className={styles.titulo} tabIndex={1} type="text" name="text" id="POST-titulo"/> <label htmlFor="POST-titulo">Titulo do código, ou tópico</label>
        <div></div>
     
        <textarea className={styles.descricao} name="conteudo" id="POST-descricao" cols={40} rows={5}></textarea><label htmlFor="POST-descricao">Descrição</label>
        </div>

        {/* <div onAuxClick={}> */}
        <textarea  className={styles.conteudo}  name="text" id="POST-texto"/> <label htmlFor="POST-texto">Conteúdo</label>
        {/* </div> */}

        {/* function Form() { EXEMPLO REACT DE FORMULARIO
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Você clicou em enviar.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Enviar</button>
    </form>
  );
} */}

        {/* <div className={styles.conteudo_2}>
        <input type="text" name="text" id="POST-subtexto"className={styles.subtitulo}/> <label htmlFor="POST-subtexto">Conteúdo 2</label>

        </div>

        <div className={styles.subtitulo}>
        <input type="text" name="text" id="POST-subtitulo"/> <label htmlFor="POST-subtitulo">Subtitulo</label>
        </div> */}
        <button className={styles.botao} type="submit" form="formulario-codigo" value="Submit">Enviar</button>
      </fieldset>
    
    </form>

    // </div> 


  )

}

export default FormularioCodigo




//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="Titulo"  />
//       <input type="text" placeholder="Descrição" />
//       <input type="url" placeholder="Links" />
//       <input type="text" placeholder="Conteúdo"  />
//       <input type="text" placeholder="Subtitulo"  />
//       <input type="text" placeholder="Conteudo 2"  />

//       <input type="submit" />
//     </form>style={{ color: 'red' }}