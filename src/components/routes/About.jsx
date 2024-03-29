import '../assets/css/About.css'

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

import background_end from '../assets/img/about/contatoSobre.png'

function About() {
  return (
    <main className='principalSobre'>
      <div className='firstBox'>
        <h1>AvanteRevendas - Revendedora autorizada</h1>
        <div className="alignImg">
          <img className='imgBackgroundInit_about' src={background_init} alt="imagem fundo inicio" />
        </div>
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
            <img src={telefone} alt="imagem e-mail" />
            <p><b>E-mail:</b>minhaempresa@avanterevendas.com</p>
          </div>
          <div>
            <img src={email} alt="imagem e-mail" />
            <p><b>Telefone:</b>(19) 9999-4321</p>
          </div>
          <div>
            <p>Ou ainda pelas nossas redes sociais:</p>
            <a href="#"><img className='redesSociais_img' src={wpp} alt="imagem whatsapp" /></a>
            <a href="#">
              <img className='redesSociais_img' src={ig} alt="imagem instagram" />
            </a>
            <a href="#">
              <img className='redesSociais_img' src={fb} alt="imagem facebook" />
            </a>
          </div>
        </div>
      </div>
      <img className='imgBackgroundEnd_about' src={background_end} alt="fundo sobre box 3" />
    </main>
  )
}

export default About