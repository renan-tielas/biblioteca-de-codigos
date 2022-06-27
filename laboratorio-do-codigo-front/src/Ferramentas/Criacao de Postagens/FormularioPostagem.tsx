import api from '../../services/api'
import styles from '../styles/formularios.module.css'
import { useState, useEffect } from 'react'
import Torradinha from '../Componentes/Torradinha'
import { Codigo } from '../Tipos/tipos'
import ItemCodigo from '../Componentes/ItemCodigo'
import { Item } from 'framer-motion/types/components/Reorder/Item'
// import { Heading, Flex } from '@chakra-ui/react'
// import CartaoPessoal from'../Componentes/CartaoPessoal';
// import Livro from'./Livro';

// import { useForm, SubmitHandler } from "react-hook-form";

//Fazer saídas opcionais, para ter codigos sem subtitulo por exemplo



const FormularioCodigo = ({codigos,poeCodigos}) => {

  const [titulo, poeTitulo] = useState("")
  const [link, poeLink] = useState("")
  const [descricao, poeDescricao] = useState("")
  const [conteudo, poeConteudo] = useState("")
  
  const [id, poeId] = useState(null)
  const [estaFormularioAberto, poeFormularioAberto] = useState(false)
  const [estaCarregando, poeCarregando] = useState(false)


  // type Torradinha = {
  //   titulo: string,
  //   descricao: string,
  //   codigo:number
  // };  

  // const Torradinha:Torradinha =<div className={styles.torradinha}/>

  const seraDadoValidoFormulario = () => {

    if (!titulo) {
      // const mensagem ={titulo:'Preencha o campo titulo!',descricao: 'erro',codigo: 400}
      const mensagem = { titulo: 'Preencha o campo titulo!', descricao: 'erro', codigo: 400, duracao: 9000, seraFechavel: true }


      return Torradinha(mensagem)
    }
    if (!descricao) {
      const mensagem = { titulo: 'Preencha o campo descrição!', descricao: 'erro', codigo: 400, duracao: 9000, seraFechavel: true }
      return Torradinha(mensagem)
    }
    if (!conteudo) {
      const mensagem = { titulo: 'Preencha o campo conteudo!', descricao: 'erro', codigo: 400, duracao: 9000, seraFechavel: true }
      return Torradinha(mensagem)
    }
    // if (codigos.some((codigo)=>codigo.titulo == titulo && codigo._id != id)) {
    //   const mensagem ={titulo:'Preencha o campo código!',descricao: 'erro',codigo: 400, duracao:9000, seraFechavel:true}
    //   return Torradinha(mensagem)
    // } !!!!! DESATIVADO - ATIVAR

    // if(!titulo){ POSSIBILIDADE
    //   return  Torradinha({titulo:'Preencha o campo titulo!',descricao:'erro',codigo:'400', timeDuration:2000, isClosable:true })
    // }

  }


const handleSubmitCriarCodigo = async (e) => {
  e.preventdefault();

  if (seraDadoValidoFormulario()) return;

  try {
    poeCarregando(true);
    const {data} = await api.post("/postaCodigo",{titulo,descricao,codigos})
    poeCodigos(codigos.concat(data.data));
    poeTitulo("");
    poeDescricao("");
    poeCarregando(false);
    const mensagem = { titulo: 'Código postado com sucesso, brabo', descricao: 'sinistrin', codigo: 201, duracao: 9000, seraFechavel: true }
    Torradinha(mensagem)
  } catch (error) {
    
  }

}
// useEffect(() => {
//   async function fetchMyAPI() {

//     api.get('/pegaCodigos').then(({data})=>{
//       poeCodigos(data.data);
//     });

//   }

//   fetchMyAPI()
// }, [codigos])

// FAZER ASSINCRONICIDADE FUNCIONAR!!!!!!!!!
// try {
//    useEffect(()=>{
//     async function fetchMyAPI() {
//      await api.get('/pegaCodigos').then(({data})=>{
//       poeCodigos(data.data);
//     }); }

//     fetchMyAPI()
//   }, [codigos])
// } catch (error) {
//   console.log(error)
  
// }


  // const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs>etete = data => console.log(data);
  //  console.log(watch("example"))
  // console.log(errors);
  console.log(codigos[1].titulo)

  return (



    // style={{width:'100%',marginBottom:'20rem'}}
     <div >
        
    <h1>
    {/* {JSON.stringify(codigos)} */}
     {/* {codigos[1].titulo} */}

    
</h1>
    <form className={styles.formulario_codigo} action="" method="post" id="formulario-codigo" onSubmit={handleSubmitCriarCodigo} >
      <fieldset className={styles.formulario_borda}>

        <legend style={{ padding: '10px 20px', fontSize: '22px' }}>Compartilhe com a gente seu conhecimento!</legend>
       
        <div className="topo">

          <input className={styles.titulo} tabIndex={1} type="text" name="text" id="POST-titulo" 
          value={titulo}
          onChange={(e)=>{poeTitulo(e.target.value)}} />
          <label htmlFor="POST-titulo">Titulo do código, ou tópico</label>
          <div></div>

          <textarea className={styles.descricao} name="conteudo" id="POST-descricao" cols={40} rows={5}
           value={descricao}
           onChange={(e)=>{poeDescricao(e.target.value)}} ></textarea>
          <label htmlFor="POST-descricao">Descrição</label>


        {/* <div onAuxClick={}> */}
        <textarea className={styles.conteudo} name="text" id="POST-texto" 
         value={conteudo}
         onChange={(e)=>{poeConteudo(e.target.value)}} ></textarea>
        <label htmlFor="POST-texto">Conteúdo</label>
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
   
{/* {console.log(codigos[1].titulo)} */}
{/* <ItemCodigo titulo={codigos.titulo} /> */}
    </div> 


  )

}

export async function getStaticProps() {

  const [codigos, poeCodigos] = useState([]) //clients setClients
  try {
    await useEffect(()=>{
       api.get('/pegaCodigos').then(({data})=>{
       poeCodigos(data.data);
     }); 
 
   }, [codigos])
 } catch (error) {
   console.log(error)
   
 }
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      codigos,poeCodigos
    },
  }
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