import slide from "../imagens/Slide.png";


export function Section() {
    return (

        <div className="section_1">
            <div id="caixa_clinica">
                <img src={slide} />

            </div>
            <a className="fontes_desktop">Nossos Serviços  </a>
            <div id="caixas">
                <div id="caixa1" className="caixa"> </div>
                <div id="caixa2" className="caixa"> </div>
                <div id="caixa3" className="caixa"> </div>
                <div id="caixa4" className="caixa"> </div>
                <div id="caixa5" className="caixa"> </div>
                <div id="caixa6" className="caixa"> </div>
            </div>

        </div>

    );
}