import { useRouter } from 'next/router'
import { Component, useEffect } from 'react'
import Head from 'next/head'

// import clientPromise from '../../lib/mongodb'
import Cabeca from '../../Leiaute/Cabeca'
import ConteudoJavascript from '../../Conteudos/ConteudoJavascript'
import * as Conteudos from '../../Conteudos/Conteudos' 

import Conteudo from '../../Leiaute/Conteudo'
import Rodape from '../../Leiaute/Rodape'
import styles from '../../styles/leiaute.module.css'
import Header from '../../Leiaute/Header'



// let indice = {
//   titulo: 'javascript',
//   secoes: { 
//     titulo: 'A linguagem',
//     subcategorias:{
    
//     categoria_x:{
//       titulos_artigos:[],
//     }
      
     
//     }
//   }   }



// let defaultsettings = {
//   ajaxsettings: {},
//   uisettings: {}
// };

// defaultsettings["ajaxsettings"]["somekey"] = "some value";
// defaultsettings["uisettings"]["somekey"] = "some value";




export function getServerSideProps(context) {
  return {
    props: {params: context.params}
  };
}


// interface Tipo{
//   params:Object
// }

const Pagina = ({params}) => {
  const router = useRouter()

  useEffect(()=>{
    if(!router.isReady) return;

    // codes using router.query

}, [router.isReady]);
const { pid } = router.query
const {pagina} = params
    // const idpagina=pid.toString()

const paginaid=pagina.toString()
const Componente =Conteudos[`Conteudo${pagina}`];


console.log(pagina)
  return(


    <main className={styles.corpo} >
    <Header/>


    <Cabeca />
    {/* <Conteudo conteudo={<ConteudoJavascript />} /> */}

       {/* <Conteudo conteudo={<'Conteudo'+paginaid/>} /> */}
       <Componente/>

          
 
    <Rodape />
    </main>


  )
  




}

export default Pagina

// DESATIVADO
// export async function getServerSideProps(context) {
//   try {
//     // client.db() will be the default database passed in the MONGODB_URI
//     // You can change the database by calling the client.db() function and specifying a database like:
//     // const db = client.db("myDatabase");
//     // Then you can execute queries against your database like so:
//     // db.find({}) or any of the MongoDB Node Driver commands
//     await clientPromise
//     return {
//       props: { isConnected: true },
//     }
//   } catch (e) {
//     console.error(e)
//     return {
//       props: { isConnected: false },
//     }
//   }
// }
