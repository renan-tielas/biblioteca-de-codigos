import Head from 'next/head'
// import clientPromise from '../../lib/mongodb'
import Cabeca from '../Leiaute/Cabeca'
import ConteudoOutros from '../Leiaute/ConteudoOutros'
import Rodape from '../Leiaute/Rodape'
import styles from '../styles/layout.module.css'
import Header from '../Componentes/Header'
import { HtmlProps } from 'next/dist/shared/lib/html-context'

// type Tipo = string
type Tipo = 'bold' | 'italic'
let texto:Tipo ;

// pesquisar o que é interface
interface TipoItemCodigo {
nome:string;
[key:string]:any
}

function pow(x:number,y:number) : string {
return Math.pow(x,y).toString();
}
function inutil(x:number,y:number) : void {
    'sem retorno'
  }


  // Array

  const arr: number[] =[]

  arr.push(1)
  // arr.push('1')
  // arr.push('abc')

// TUPLE
  type minhaLista =[number?,string?,boolean?]
let arr2:minhaLista =[]
  arr2.push(1)
  arr2.push(1)
  arr2.push(1)


  // Generics

  class Observable<T>{
    constructor(public value: T) {}
  }
  let x: Observable<number>
  // let y: Observable<Person>
  
export default function Home({ isConnected }) {
  return (
    // <ChakraProvider>
    <main className={styles.corpo} >
      {/* <Header/> FALTA TIPAR*/}


      <Cabeca />
      <ConteudoOutros />

      <Rodape />
    </main>




  )
}
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



// CONTEUDO

// PERMITIR EMMET COM REACT 