import Head from 'next/head'
// import clientPromise from '../../lib/mongodb'
import Cabeca from '../Leiaute/Cabeca'
import Quadros from '../Arranjos/Quadros'
import Rodape from '../Leiaute/Rodape'
import styles from '../styles/layout.module.css'



export default function Home({ isConnected }) {
  return (
    // <ChakraProvider>
    <main className={styles.corpo} >
      <Head>
        <title>Célula Solidária</title>
        <link rel="icon" href="/favicon.ico" />   {/* //icone */}
        {/* <meta>  ???? </meta> */}
      </Head>



      <Cabeca />
      
      {/* <Quadros /> */}

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
//How do I prevent the padding property from changing width or height in CSS?
// By default, every element box-sizing parameter is set to content-box. Which means, that if you set an element width to 200px and then add a padding of 20px on both horizontal end, this would result to a total width of 240px for that element.

// to fix this, you simply need to update the box-sizing parameter and set this to border-box in your css. Or you can do this for all elements by simply adding the following.

// * {
//      box-sizing: border-box 
//   }
