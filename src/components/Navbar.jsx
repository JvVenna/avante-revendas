import { Link } from "react-router-dom"
import logo from "./assets/img/cabecalho-rodape/navbar/logo.png"

const Navbar = () => {

    function changeImage() {
        document.querySelector(".logo").src = "./src/components/assets/img/cabecalho-rodape/navbar/logo-contorno.png"
    }
    function changeImageReturn() {
        document.querySelector(".logo").src = "./src/components/assets/img/cabecalho-rodape/navbar/logo.png"
    }

    return (
        <div>
            <nav>
                <Link to='/'> <img
                    onMouseOver={changeImage}
                    onMouseLeave={changeImageReturn}
                    className="logo" src={logo} alt="logo" /></Link>
                <ul className='optionsNav_ul'>
                    <li className='optionsNav_li'><Link to='/'>Home</Link></li>
                    <li className='optionsNav_li'><Link to='/vender-meu-carro'>Quero vender meu carro</Link></li>
                    <li className='optionsNav_li'><Link to='/estoque'>Nosso estoque</Link></li>
                    <li className='optionsNav_li'><Link to='/sobre'>Sobre nós</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar