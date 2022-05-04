// import Head from 'next/head'
// import clientPromise from '../../lib/mongodb'
import Cabeca from '../Leiaute/Cabeca'
import Conteudo from '../Leiaute/Conteudo'
import Rodape from '../Leiaute/Rodape'
import styles from '../styles/leiaute.module.css'
import Header from '../Leiaute/Header'




export default function Home({ isConnected }:boolean) {

  return (
    // <ChakraProvider>
    <main className={styles.corpo} >
      
      <Header/>
        

      <Cabeca />
      <Conteudo />

      <Rodape />
      
    </main>




  )
}


// BACK END DESATIVADO


export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    await clientPromise
    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}



