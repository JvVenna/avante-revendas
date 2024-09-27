import "../assets/css/About.css";
import styles from "../assets/css/icons.module.css";

import background_init from "../assets/img/about/imagemSobre.jpg";

import mulher_afirmativo from "../assets/img/about/mulherAfirmativoSobre-box.png";
import homem_afirmativo from "../assets/img/about/homemAfirmativoSobre-box.png";

import info from "../assets/img/about/experienciaSobre.png";
import info2 from "../assets/img/about/profissionalSobre.png";
import info3 from "../assets/img/about/avaliacaoSobre.png";

import { FaCaretDown } from "react-icons/fa";

import { IoLogoFacebook } from "react-icons/io5";
import { PiInstagramLogoThin } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import background_end from "../assets/img/about/contatoSobre.png";
import background_end_2 from "../assets/img/about/contatoSobre-2.png";

function About() {

const phone = "(19) 0101-0110"
const email = "robcleisonvendedor@avanterevendas.com"

  return (
    <main className="principalSobre">
      <div className="firstBox">
        <h1>AvanteRevendas - Revendedora autorizada</h1>
        <picture className="alignImg">
          <source
            media="(max-width:650px)"
            srcset="https://www.cauterfix.com.br/wp-content/uploads/2019/02/carros_confianca-1080x565.jpg"
          />
          <img className="imgBackgroundInit_about" src={background_init} />
        </picture>
        <h1 className="title">
          Nós somos a{" "}
          <label>
            <i>Avante</i>Revendas
          </label>
          , a empresa perfeita para você que quer ganhar uma grana com seu carro
        </h1>
      </div>
      <div className="boxAbout">
        <img
          className="mulherAfirmativo_about"
          src={mulher_afirmativo}
          alt="imagem mulher afirmativo"
        />
        <div className="contentInfo_about">
          <div className="infoAbout">
            <img src={info} alt="imagem info" />
            <p>
              Temos mais de 15 anos revendendo, alugando, financiando carros
            </p>
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
        <img
          className="homemAfirmativo_about"
          src={homem_afirmativo}
          alt="imagem homem afirmativo"
        />
      </div>
      <section className="box2_about">
        <h1>Dúvidas frequentes</h1>
        <section className="contentInfo">
          <div>
            <section>
              <p>duvidas frequentes</p>
              <FaCaretDown className={`${styles.down}`} />
            </section>
            <article className="article">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              rhoncus vulputate metus, et vehicula neque semper tristique. Cras
              dictum quis lorem a rhoncus. Nulla turpis lectus, tristique vel
              ipsum quis, interdum auctor orci. Ut laoreet dapibus rutrum.
            </article>
          </div>
          <div>
            <section>
              <p>duvidas frequentes</p>
              <FaCaretDown className={`${styles.down}`} />
            </section>
            <article className="article">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              rhoncus vulputate metus, et vehicula neque semper tristique. Cras
              dictum quis lorem a rhoncus. Nulla turpis lectus, tristique vel
              ipsum quis, interdum auctor orci. Ut laoreet dapibus rutrum.
            </article>
          </div>
          <div>
            <section>
              <p>duvidas frequentes</p>
              <FaCaretDown className={`${styles.down}`} />
            </section>
            <article className="article">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              rhoncus vulputate metus, et vehicula neque semper tristique. Cras
              dictum quis lorem a rhoncus. Nulla turpis lectus, tristique vel
              ipsum quis, interdum auctor orci. Ut laoreet dapibus rutrum.
            </article>
          </div>
          <div>
            <section>
              <p>duvidas frequentes</p>
              <FaCaretDown className={`${styles.down}`} />
            </section>
            <article className="article">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              rhoncus vulputate metus, et vehicula neque semper tristique. Cras
              dictum quis lorem a rhoncus. Nulla turpis lectus, tristique vel
              ipsum quis, interdum auctor orci. Ut laoreet dapibus rutrum.
            </article>
          </div>
        </section>
      </section>
      <div className="box3_about">
        <h1>
          Escolha a melhor forma de <br />{" "}
          <label className="labelAbout3">falar com a gente</label>
        </h1>
        <div className="infoAboutContact">
          <div>
            <a className="emailAbout" href="mailto:robcleisonvendedor@avanterevendas.com">
              <p>
                <b>E-mail: </b>{email}
              </p>
              <MdEmail className={`${styles.email}`} />
            </a>
          </div>

          <div>
            <a href='callto:(19) 0101-0110'>
              <p>
                <b>Telefone:</b>{phone}
              </p>
              <FaPhoneAlt className={`${styles.phone}`} />
            </a>
          </div>
          <div className="box_social_media">
            <a href="#">
              <IoLogoWhatsapp className={`${styles.wpp}`} />
            </a>
            <a href="#">
              <PiInstagramLogoThin className={`${styles.it}`} />
            </a>
            <a href="#">
              <IoLogoFacebook className={`${styles.fb}`} />
            </a>
            <p className="title_social_media">
              Ou ainda pelas nossas redes sociais:
            </p>
          </div>
        </div>
      </div>
      <picture className="alignImg">
        <source media="(max-width:900px)" srcset={background_end_2} />
        <img
          className="imgBackgroundEnd_about"
          src={background_end}
          alt="fundo sobre box 3"
        />
      </picture>
    </main>
  );
}

export default About;
