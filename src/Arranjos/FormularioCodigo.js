
import styles from '../styles/arranjos.module.css'
// import { Heading, Flex } from '@chakra-ui/react'
import CartaoPessoal from'../Componentes/CartaoPessoal';
import Livro from'../Arranjos/Livro';


const FormularioCodigo = () => {


    return (
        // <div className={styles.conteudo} >
        <div className={styles.formulario_codigo} >

{/* <!-- Simple form which will send a POST request --> */}
<form action="" method="post">
  <label for="POST-name">Name:</label>
  <input id="POST-name" type="text" name="name"/>
  <input type="submit" value="Save"/>
</form>

{/* <!-- Form with fieldset, legend, and label --> */}
<form action="" method="post">
  <fieldset>
    <legend>Title</legend>
    <input type="radio" name="radio" id="radio"/> <label for="radio">Click me</label>
  </fieldset>
</form>
        </div>
        // </div>


    )

}

export default FormularioCodigo