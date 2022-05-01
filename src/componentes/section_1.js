import slide from "../imagens/Slide.png";


export function Section_1() {
    return (

        <div className="section_1">
            <div id="caixa_clinica" className="col_desktop">
                <img src={slide} />
            </div>
            <a className="fontes_desktop_title">Nossos Serviços  </a>
            <div id="caixas" className="col_desktop">
                <div id="caixa1" className="caixa">
                    <img src="a(1).png" />
                    <a className="fontes_textos_desktop">Banho
                    </a>
                </div>
                <div id="caixa2" className="caixa">
                    <img src="a(2).png" />
                    <a className="fontes_textos_desktop">
                        Tosa
                    </a>

                </div>
                <div id="caixa3" className="caixa">
                    <img src="a(3).png" />
                    <a className="fontes_textos_desktop">Ração
                    </a>
                </div>
                <div id="caixa4" className="caixa">
                    <img src="a(4).png" />
                    <a className="fontes_textos_desktop">
                        Serviços Estéticos
                    </a>
                </div>
                <div id="caixa5" className="caixa">
                    <img src="a(5).png" />
                    <a className="fontes_textos_desktop">
                        Atendimento
                    </a>
                </div>
                <div id="caixa6" className="caixa">

                    <img src="a(6).png" />
                    <a className="fontes_textos_desktop">
                        Consultas
                    </a>
                </div>
            </div>


        </div>
    );
}