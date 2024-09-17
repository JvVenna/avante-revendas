import '../assets/css/About.css'
import styles from '../assets/css/icons.module.css'

import background_init from '../assets/img/about/imagemSobre.jpg'

import mulher_afirmativo from '../assets/img/about/mulherAfirmativoSobre-box.png'
import homem_afirmativo from '../assets/img/about/homemAfirmativoSobre-box.png'

import info from '../assets/img/about/experienciaSobre.png'
import info2 from '../assets/img/about/profissionalSobre.png'
import info3 from '../assets/img/about/avaliacaoSobre.png'

import down from '../assets/img/about/down.png'

import email from '../assets/img/icones-midia-social/email.png'
import telefone from '../assets/img/icones-midia-social/telefone.png'

import wpp from '../assets/img/icones-midia-social/wpp.png'
import ig from '../assets/img/icones-midia-social/ig.png'
import fb from '../assets/img/icones-midia-social/fb.png'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";

import background_end from '../assets/img/about/contatoSobre.png'
import background_end_2 from '../assets/img/about/contatoSobre-2.png'


function About() {
  return (
    <main className='principalSobre'>
      <div className='firstBox'>
        <h1>AvanteRevendas - Revendedora autorizada</h1>
        <picture className="alignImg">
          <source media="(max-width:650px)" srcset="https://www.cauterfix.com.br/wp-content/uploads/2019/02/carros_confianca-1080x565.jpg"/>
          <img className='imgBackgroundInit_about' src={background_init}/>
        </picture>
        <h1 className='title'>Nós somos a <label><i>Avante</i>Revendas</label>, a empresa perfeita para você que quer ganhar uma grana com seu carro</h1>
      </div>
      <div className="boxAbout">
        <img className='mulherAfirmativo_about' src={mulher_afirmativo} alt="imagem mulher afirmativo" />
        <div className="contentInfo_about">
          <div className="infoAbout">
            <img src={info} alt="imagem info" />
            <p>Temos mais de 15 anos revendendo, alugando, financiando carros</p>
          </div>
          <div className="infoAbout2">
            <img src={info2} alt="imagem info 2" />
            <p>Nossos profissionais possuem anos de experiência na área</p>
          </div>
          <div className="infoAbout">
            <img src={info3} alt="imagem info 3" />
            <p>Ranking entre as melhores revendedoras do país, com iso 9001</p>
          </div>
        </div>
        <img className='homemAfirmativo_about' src={homem_afirmativo} alt="imagem homem afirmativo" />
      </div>

      <section className="box2_about">
        <h1>Dúvidas frequentes</h1>
        <section className="contentInfo">
          <div>
            <p>duvidas frequentes</p>
            <img className='down_about' src={down} alt="abaixar" />
          </div>
          <div>
            <p>duvidas frequentes</p>
            <img className='down_about' src={down} alt="abaixar" />
          </div>
          <div>
            <p>duvidas frequentes</p>
            <img className='down_about' src={down} alt="abaixar" />
          </div>
          <div>
            <p>duvidas frequentes</p>
            <img className='down_about' src={down} alt="abaixar" />
          </div>
          <div>
            <p>duvidas frequentes</p>
            <img className='down_about' src={down} alt="abaixar" />
          </div>
        </section>
      </section>
      <div className="box3_about">
        <h1>Escolha a melhor forma de <br /> <label className='labelAbout3'>falar com a gente</label></h1>
        <div className='infoAboutContact'>
          <div>
            <LuPhone/>
            <p><b>E-mail: </b>minhaempresa@avanterevendas.com</p>
          </div>
          <div>
            <TfiEmail />
            <p><b>Telefone:</b>(19) 9999-4321</p>
          </div>
          <div className='box_social_media'>
            <p className='title_social_media'>Ou ainda pelas nossas redes sociais:</p>
            <a href="#"><BsWhatsapp className={`${styles.wpp}`}/></a>
            <a href="#"><BsInstagram className={`${styles.it}`}/></a>
            <a href="#"><BsFacebook className={`${styles.fb}`}/></a>
          </div>
        </div>
      </div>

      <picture className="alignImg">
          <source media="(max-width:900px)" srcset={background_end_2}/>
      <img className='imgBackgroundEnd_about' src={background_end} alt="fundo sobre box 3" />
        </picture>

<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    </main>
  )
}

export default About