import logo from './assets/img/cabecalho-rodape/footer/logo-preto.png'
import walmart from './assets/img/cabecalho-rodape/footer/patrocinio/patrocinio-walmart.png'
import microsoft from './assets/img/cabecalho-rodape/footer/patrocinio/patrocinio-microsoft.png'
import netflix from './assets/img/cabecalho-rodape/footer/patrocinio/patrocinio-netflix.png'
import airbnb from './assets/img/cabecalho-rodape/footer/patrocinio/patrocinio-airbnb.png'
import deezer from './assets/img/cabecalho-rodape/footer/patrocinio/patrocinio-deezer.png'
import oracle from './assets/img/cabecalho-rodape/footer/patrocinio/patrocinio-oracle.png'

import wpp from './assets/img/icones-midia-social/wpp.png'
import fb from './assets/img/icones-midia-social/fb.png'
import ig from './assets/img/icones-midia-social/ig.png'
import ttk from './assets/img/icones-midia-social/ttk.png'
import yt from './assets/img/icones-midia-social/yt.png'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom"

const Footer = () => {


    function changeImageWpp() {
        document.querySelector('.wpp').src = "  ./src/components/assets/img/icones-midia-social/whatsapp.png"
    }
    function changeImageReturnWpp() {
        document.querySelector('.wpp').src = "./src/components/assets/img/icones-midia-social/wpp.png"
    }

    function changeImageFb() {
        document.querySelector('.fb').src = "./src/components/assets/img/icones-midia-social/facebook.png"
    }
    function changeImageReturnFb() {
        document.querySelector('.fb').src = "./src/components/assets/img/icones-midia-social/fb.png"
    }

    function changeImageIg() {
        document.querySelector('.ig').src = "./src/components/assets/img/icones-midia-social/instagram.png"
    }
    function changeImageReturnIg() {
        document.querySelector('.ig').src = "./src/components/assets/img/icones-midia-social/ig.png"
    }

    function changeImageTtk() {
        document.querySelector('.ttk').src = "./src/components/assets/img/icones-midia-social/tiktok.png"
    }
    function changeImageReturnTtk() {
        document.querySelector('.ttk').src = "./src/components/assets/img/icones-midia-social/ttk.png"
    }

    function changeImageYt() {
        document.querySelector('.yt').src = "./src/components/assets/img/icones-midia-social/youtube.png"
    }
    function changeImageReturnYt() {
        document.querySelector('.yt').src = "./src/components/assets/img/icones-midia-social/yt.png"
    }

    return (
        <div>
            <footer>
                <div className="box1Footer">
                    <div>
                        <img className='logoFooter' src={logo} alt="logo" />
                        <p>REVENDA DE CARROS AVANTE SOCIAL LTDA {([])}</p>
                        <p>CNPJ: 10.190.290/0001-55</p>
                    </div>
                    <div className="optionsFoot_div">
                        <ul>
                            <li><Link to='/sobre'>Sobre nós</Link></li>
                            <li><Link to='/estoque'>Nosso estoque</Link></li>
                            <li><Link to='/vender-meu-carro'>Quero vender meu carro</Link></li>
                        </ul>
                        <ul>
                            <li>CENTRAL ADMINISTRATIVO</li>
                            <li className='optionsFoot_li'>
                                <a href="tel:+0800-655-656">0800-655-656</a>
                            </li>
                            <li className='optionsFoot_li'>
                                <a href="tel:+0800-655-656">0800-655-656</a>
                            </li>
                        </ul>
                        <ul>
                            <li>AGÊNCIA GERENCIAL</li>
                            <li className='optionsFoot_li'>
                                <a href="tel:+0800-999-123">0800-999-123</a>
                            </li>
                            <li className='optionsFoot_li'>
                                <a href="tel:+0800-111-222-333">0800-111-222-333</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border"></div>
                <div className="parceirosFooter">
                    <p>Parceiros:</p>
                    <div>
                        <img src={walmart} alt="patrocinio walmart" />
                        <img src={microsoft} alt="patrocinio microsoft" />
                        <img src={netflix} alt="patrocinio netflix" />
                        <img src={airbnb} alt="patrocinio airbnb" />
                        <img src={deezer} alt="patrocinio deezer" />
                        <img src={oracle} alt="patrocinio oracle" />
                    </div>
                </div>
                <div className="border"></div>
                <div className="copyright">
                    <p>© Localiza - Todos os direitos reservados.</p>
                    <div className="linkCopyright">
                        <a href="#">Termos de uso</a>
                        <a href="#">Política de privacidade</a>
                        <a href="#">Configurações de Cookies</a>
                    </div>
                    <div className="redesSociais">
                        <a href="#">
                            <img
                                onMouseOver={changeImageWpp}
                                onMouseLeave={changeImageReturnWpp}
                                className='redesSociais_img wpp' src={wpp} alt="icone whatsapp" />
                        </a>
                        <a href="#">
                            <img
                                onMouseOver={changeImageFb}
                                onMouseLeave={changeImageReturnFb}
                                className='redesSociais_img fb' src={fb} alt="icone facebook" />
                        </a>
                        <a href="#">
                            <img
                                onMouseOver={changeImageIg}
                                onMouseLeave={changeImageReturnIg}
                                className='redesSociais_img ig' src={ig} alt="icone instagram" />
                        </a>
                        <a href="#">
                            <img
                                onMouseOver={changeImageTtk}
                                onMouseLeave={changeImageReturnTtk}
                                className='redesSociais_img ttk' src={ttk} alt="icone tiktok" />
                        </a>
                        <a href="#">
                            <img
                                onMouseOver={changeImageYt}
                                onMouseLeave={changeImageReturnYt}
                                className='redesSociais_img yt' src={yt} alt="icone youtube" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer