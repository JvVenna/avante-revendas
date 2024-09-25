import argo from '../assets/img/home/box/argo.png'
import decoracaoCentro from '../assets/img/home/box/forma-centro.png'
import decoracaoLateral from '../assets/img/home/box/forma-lateral.png'
import garantia from '../assets/img/home/box/garantiaHome-box.png'
import emoji from '../assets/img/home/box/felizHome-box.png'
import cliente from '../assets/img/home/box/clienteHome-box.png'

import wpp from '../assets/img/icones-midia-social/wpp.png'
import fb from '../assets/img/icones-midia-social/fb.png'
import ig from '../assets/img/icones-midia-social/ig.png'

import afirmativo from '../assets/img/home/box3/confiancaHome-box3.png'
import selo from '../assets/img/home/box3/seloHome-box3.png'
import carro from '../assets/img/home/box3/carroHome-box3.png'
import homemAfirmativo from '../assets/img/home/box3/homem-afirmativo.png'

import servico from '../assets/img/home/box4/servicoHome-box4.png'
import servico2 from '../assets/img/home/box4/servico2Home-box4.png'
import servico3 from '../assets/img/home/box4/servico3Home-box4.png'

import '../assets/css/Home.css'

const Home = () => {

  function changeImageWpp() {
    document.querySelector('.wppHome').src = "./src/components/assets/img/icones-midia-social/whatsapp.png"
  }
  function changeImageReturnWpp() {
    document.querySelector('.wppHome').src = "./src/components/assets/img/icones-midia-social/wpp.png"
  }

  function changeImageFb() {
    document.querySelector('.fbHome').src = "./src/components/assets/img/icones-midia-social/facebook.png"
  }
  function changeImageReturnFb() {
    document.querySelector('.fbHome').src = "./src/components/assets/img/icones-midia-social/fb.png"
  }

  function changeImageIg() {
    document.querySelector('.igHome').src = "./src/components/assets/img/icones-midia-social/instagram.png"
  }
  function changeImageReturnIg() {
    document.querySelector('.igHome').src = "./src/components/assets/img/icones-midia-social/ig.png"
  }

  function changeImageHomem() {
    document.querySelector('.homemAfirmativo').src = "./src/components/assets/img/home/box3/homem-afirmativo-colorido.png"
    document.querySelector('.infoBox_').classList.add("infoBox_back")
    document.querySelector('.infoBox_p').classList.add("infoBox_back")
    document.querySelector('.infoBox_car').classList.add("infoBox_carBack")
  }
  function changeImageHomemReturn() {
    document.querySelector('.homemAfirmativo').src = "./src/components/assets/img/home/box3/homem-afirmativo.png"
    document.querySelector('.infoBox_').classList.remove("infoBox_back")
    document.querySelector('.infoBox_p').classList.remove("infoBox_back")
    document.querySelector('.infoBox_car').classList.remove("infoBox_carBack")
  }

  function changeImageConf() {
    document.querySelector('.confiancaHome').src = "./src/components/assets/img/home/box3/confianca-colorido.png"
  }
  function changeImageConfReturn() {
    document.querySelector('.confiancaHome').src = "./src/components/assets/img/home/box3/confiancaHome-box3.png"
  }

  function changeImageSelo() {
    document.querySelector('.seloHome').src = "./src/components/assets/img/home/box3/selo-colorido.png"
  }
  function changeImageSeloReturn() {
    document.querySelector('.seloHome').src = "./src/components/assets/img/home/box3/seloHome-box3.png"
  }

  function changeImageCarro() {
    document.querySelector('.carroHome').src = "./src/components/assets/img/home/box3/carroHome-box3-colorido.png"
  }
  function changeImageCarroReturn() {
    document.querySelector('.carroHome').src = "./src/components/assets/img/home/box3/carroHome-box3.png"
  }

  return (

    <body>
        <img className='decoracaoLateral' src={decoracaoLateral} alt="decoracao fundo" />
        <img className='argo' src={argo} alt="fiat argo" />
        <img className='decoracaoCentro' src={decoracaoCentro} alt="decoracao fundo" />
        <img className='decoracaoLateralEsq' src={decoracaoLateral} alt="decoracao fundo" />
      <div className='content'>
        <div className='content_text'>
          <div className='content_text_div'>
            <h1>Revenda seu carro <br /> com <label>a gente</label></h1>
            <h2>agenda uma avaliação <br /> agora mesmo</h2>
          </div>
          <div className="contentInfoInicio">
            <div>
              <img src={garantia} alt="aperto maos" />
              <h3>Garantimos a revenda em até 4 semanas</h3>
            </div>
            <div>
              <img src={emoji} alt="emoji sorrindo" />
              <h3>Clientes satisfeitos com uma boa margem de lucro</h3>
            </div>
            <div>
              <img src={cliente} alt="clientes afirmativo" />
              <h3>+35.000 clientes satisfeitos com os nossos serviços</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="box2">
        <div className="alignFormTel">
          <div className="contentForm">
            <h1>Preencha o formulário para uma avaliação</h1>
            <div>
              <input className='inputUser' type="name" name='name' />
              <label htmlFor="name" className='labelInput'>Seu Nome Completo</label>
            </div>
            <div className='div_block'>
              <div>
                <input className='inputUser' type="tel" name='telefone' />
                <label htmlFor="telefone" className='labelInput'>Telefone</label>
              </div>
              <div>
                <input className='inputUser' type="email" name='email' />
                <label htmlFor="email" className='labelInput'>e-mail</label>
              </div>
            </div>
            <div>
              <label className='file' htmlFor="file">Adicione fotos do veículo</label>
              <input className='file' type="file" name='file' accept='image/png, image/jpg, image/jpeg' />
            </div>
            <div>
              <input className='inputUser' type="text" name='text' />
              <label className='labelInput' htmlFor="text">Marca / Modelo / especificações carro</label>
            </div>
            <section className='div_block_number'>
              <div>
                <input className='inputUserNumber' type="number" name='file' />
                <label className='labelInput' htmlFor="file">ano mod</label>
              </div>
              <div>
                <input className='inputUserNumber' type="number" name='file' />
                <label className='labelInput' htmlFor="file">ano fab</label>
              </div>
              <button className='inputSubmit' type="submit">Enviar</button>
            </section>
          </div>
          <div className="contentContact">
            <h1>Contatos</h1>
            <a className='maps' target='_blank' href="https://goo.gl/maps/co2dSygtnvEkSSG69">
              <p>Avenida Bacaninha de São João do Mistério, 999 - Jardim Jorginho Costela, Campinas/SP</p>
            </a>
            <a href="tel:+(01) 0000-0000">
              <p className='telefone'>(01) 0000-0000</p>
            </a>
            <a href="mailto:robcleisonvendedor@avanterevendas.com">
              <p className='email'>robcleisonvendedor@avanterevendas.comm</p>
            </a>
            <div className="redesSociais_home">
              <a href="#">
                <img
                  onMouseOver={changeImageWpp}
                  onMouseLeave={changeImageReturnWpp}
                  className='redesSociais_img wppHome' src={wpp} alt="icone whatsapp" />
              </a>
              <a href="#">
                <img
                  onMouseOver={changeImageFb}
                  onMouseLeave={changeImageReturnFb}
                  className='redesSociais_img fbHome' src={fb} alt="icone facebook" />
              </a>
              <a href="#">
                <img
                  onMouseOver={changeImageIg}
                  onMouseLeave={changeImageReturnIg}
                  className='redesSociais_img igHome' src={ig} alt="icone instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="box3">
        <h1>Por que revender com a <br /> <label><i>Avante</i>Revendas</label></h1>
        <img
          onMouseOver={changeImageHomem}
          onMouseLeave={changeImageHomemReturn}
          className='homemAfirmativo' src={homemAfirmativo} alt="imagem fundo homem arfirmativo" />
       
        <section className='contentInfoBox'>
          <div className="infoBox3 infoBoxConfianca_hover" onMouseOver={changeImageConf} onMouseLeave={changeImageConfReturn}> 
            <img src={afirmativo} className='confiancaHome' alt="imagem confianca" />
            <div className='contentTextInfo'>
               <h2>Confiança</h2><p>Nós te pagamos á vista ou em parcelas de até 6 meses corridos após o confirmação da compra</p>
            </div>
          </div>
         
          <div className="infoBox3 infoBoxSelo_hover"
            onMouseOver={changeImageSelo}
            onMouseLeave={changeImageSeloReturn}>
            <img
              src={selo} className='seloHome' alt="imagem selo" />
            <div className='contentTextInfo'>
              <h2>Selo seminovos</h2>
              <p>Seu carro sendo avaliado em estado ótimo ou perfeito, recebe selo Seminovo</p>
            </div>
          </div>
         
          <div className="infoBox3 infoBoxCarro_hover"
            onMouseOver={changeImageCarro}
            onMouseLeave={changeImageCarroReturn}>
            <img
              className='infoBox_car carroHome' src={carro} alt="imagem carro adicional" />
            <div className='contentTextInfo'>
              <h2 className='infoBox_'>Carro reserva</h2>
              <p className='infoBox_p'>Você terá direito a um carro para uso pessoal sem taxas adicionais</p>
            </div>
         
          </div>
        </section>
      </div>

      <div className="box4">
        <h1>Outros serviços que oferecemos</h1>
        <div className="align">
          <div className=' contentServico'>
            <a className='gap' href="#">
              <img src={servico} alt="imagem venda de carros" />
            </a>
            <a className='gap' href="#">
              <img src={servico2} alt="imagem financiamento facilitado" />
            </a>
          </div>
          <a className='gap' href="#">
            <img src={servico3} alt="imagem locacao de carros" />
          </a>
        </div>
      </div>
    </body>
  )
}

export default Home