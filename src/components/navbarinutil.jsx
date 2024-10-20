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
                    {/* <li className='optionsNav_li'><Link to='/'></Link></li>
                    <li className='optionsNav_li'><Link to='/sellMyCar'>Quero vender meu carro</Link></li>
                    <li className='optionsNav_li'><Link to='/supply'>Nosso estoque</Link></li>
                    <li className='optionsNav_li'><Link to='/about'></Link></li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar