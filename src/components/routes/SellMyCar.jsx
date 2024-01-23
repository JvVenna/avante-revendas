import '../assets/css/SellMyCar.css'
import fundoFormulario from '../assets/img/sell-my-car/homem-prancheta.png'
import fundoContato from '../assets/img/sell-my-car/homem-carro.jpg'
import fb from '../assets/img/icones-midia-social/fb.png'
import ig from '../assets/img/icones-midia-social/ig.png'
import wpp from '../assets/img/icones-midia-social/wpp.png'
import email from '../assets/img/icones-midia-social/email.png'

const SellMyCar = () => {
  return (
    <>
      <main className='contentSellMyCar'>
        <div className="boxSellMyCar" >
          <h1>Preencha o formulário para uma avaliação</h1>
          <div>
            <input className='inputSellMyCar' type="name" name='name' />
            <label className='labelInputSellMyCar' htmlFor="name">Seu Nome Completo</label>
          </div>
          <div className='tel_emailSellMyCar'>
            <div>
              <input className='inputSellMyCar' type="tel" name='telefone' />
              <label className='labelInputSellMyCar' htmlFor="telefone">Telefone</label>
            </div>
            <div>
              <input className='inputSellMyCar' type="email" name='email' />
              <label className='labelInputSellMyCar' htmlFor="email">e-mail</label>
            </div>
          </div>
          <section className='inputFileSellMyCar'>
            <input className='file' type="file" name='file' accept='image/png, image/jpg, image/jpeg' />
            <label className='file' htmlFor="file">Adicione fotos do veículo</label>
          </section>
          <div>
            <input className='inputSellMyCar' type="text" name='text' />
            <label className='labelInputSellMyCar' htmlFor="text">Marca / Modelo / especificações carro</label>
          </div>
          <div className='tel_emailSellMyCar'>
            <div>
              <input className='inputSellMyCar' type="number" name='file' />
              <label className='labelInputSellMyCar' htmlFor="file">ano modelo</label>
            </div>
            <div>
              <input className='inputSellMyCar' type="number" name='file' />
              <label className='labelInputSellMyCar' htmlFor="file">ano fabricação</label>
            </div>
            <button className='inputSubmitSellMyCar' type="submit">Enviar</button>
          </div>
        </div >
        <img className='fundoFormulario' src={fundoFormulario} alt="imagem decoracao fundo" />
        <section className='boxSellMyCar2'>
          <h2>Ou ainda visite-nos, ou entre em contato conosco</h2>
          <br />
          <h3>Avenida Bacaninha de São João do Mistério, 999 - Jardim Jorginho Costela, Campinas/SP</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14701.125032568709!2d-47.06814409309355!3d-22.902994608726495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf45e8426371%3A0x9f82c5328a3a2897!2sPrado%20Ve%C3%ADculos!5e0!3m2!1spt-BR!2sbr!4v1693398520908!5m2!1spt-BR!2sbr" width="800" height="250" loading="lazy"></iframe>
          <br />
          <div>
            <a href="mailto:minhaempresa@avanterevendas.com"><p>minhaempresa@avanterevendas.com</p></a>
          </div>
          <div>
            <a href="tel:+(19) 9999-4321"><p>(19) 9999-4321</p></a>
          </div>
          <div>
            <a href="#"><img src={wpp} alt="imagem whatsapp" /></a>
            <a href="#"><img src={email} alt="imagem e-mail" /></a>
            <a href="#"><img src={ig} alt="imagem instagram" /></a>
            <a href="#"><img src={fb} alt="imagem facebook" /></a>
          </div>
        </section>
          <img className='fundoContato' src={fundoContato} alt="imagem fundo" />
      </main>
    </>
  )
}

export default SellMyCar