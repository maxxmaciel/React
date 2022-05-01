

export function Section_3() {
    return (

        <div className="section_3">
            <div className="col_desktop">
                <a className="fontes_desktop_title title_padding">
                    Contato
                </a>



                <div id="search_contatos">

                    <p className="fontes_textos_desktop">
                        Seu nome:
                    </p>
                    <input />
                    <p className="fontes_textos_desktop">
                        Seu e-mail:

                    </p>
                    <input />
                    <p className="fontes_textos_desktop">
                        Telefone:
                    </p>
                    <input />
                    <p className="fontes_textos_desktop">
                        Sua menssagem:
                    </p>
                    <input className="sua_mensagem" />

                </div>

                <div id="enviar_email">

                    <p>   Enviar </p>
                </div>
                <img id="img_maps" src="icons8-google-maps-250 1.png" />


                <div id="lado_direito">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58433.02655955252!2d-46.70253886834062!3d-23.745091355434127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x94ce45654cb831b7%3A0xdbade02adb20fa93!2sCasa%20de%20ra%C3%A7%C3%B5es%20e%20Cl%C3%ADnica%20Veterin%C3%A1ria%20Graja%C3%BA%20-%20Dra.%20Thais%20Nepomuceno%2C%20Rua%20Demas%20Zitto%2C%20664%20-%20Parque%20Res.%20Cocaia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004849-050!3m2!1d-23.7450953!2d-46.667519399999996!5e0!3m2!1spt-BR!2sbr!4v1649723435387!5m2!1spt-BR!2sbr">

                    </iframe>
                </div>
                <p id="endereco" className="fontes_textos_desktop">
                    Rua Demas Zitto, 664 - Parque residencial Cocaia
                </p>
                <img id="contato_img" src="contatos.png" />

                <div className="caixa_h">
                    <div id="caixa_h_1">
                        <a className="fontes_textos_desktop">
                            Horario de <br></br>atendimento:
                        </a>
                    </div>
                    <div id="caixa_h_2">
                        <a className="fontes_textos_desktop">
                            09:00 ás 18:00 de<br></br> Segunda á Sabado
                        </a>
                    </div>
                </div>
            </div>
        </div>



    );
}