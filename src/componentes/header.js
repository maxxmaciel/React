import clinica from "../imagens/logo_desktop.png"
import face from "../imagens/facebook 1.png"
import insta from "../imagens/instagram 1.png"
import wpp from "../imagens/wpp 1.png"

export function Header() {
  return (

<div className="header ">
        <div id="nav-1">
          <input type="text" name="name" placeholder="Pesquisar..." />
          <div >
      <img src={clinica} />
          </div>

          <div id="logos">
          <img src={face} />
          <img src={insta} />
          <img src={wpp} />
          </div>
        </div>
        <div id="nav-2" >
          <ul>
            <a>Home</a>
            <a>Serviços </a>
            <a>Quem Somos</a>
            <a>Contato</a>  
            </ul>  
        </div>
</div>

 );
}