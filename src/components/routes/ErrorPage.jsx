import { Link } from "react-router-dom"
import "../assets/css/ErrorPage.css"

import background from '../assets/img/pagina-erro/imagem-fundo.png'

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <img src={background} alt="imagem fundo error 404" />
      <h1>Oops! Página não encontrada</h1>
      <h2>Talvez o link foi digitado incorretamente ou ocorreu um erro</h2>
      <Link className="a"><button>Ok, quero voltar para Home</button></Link>
    </div>
  )
}

export default ErrorPage