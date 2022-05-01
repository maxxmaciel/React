import img_clinica from "../imagens/clinica.png";



export function Section_2() {
    return (

        <div className="section_2">
            <a className="fontes_desktop_title title_padding" >Quem Somos</a>
            <div id="textos" className="col_desktop">
                <p className="fontes_textos_desktop">
                    O Petshop Grajaú deu início às suas atividades dia 21 de setembro de 2019. Naquela época, a maior parte dos produtos oferecidos eram voltados apenas para saúde de animais de pequeno porte, mas, ainda que o mercado destinado aos pets no Brasil fosse bastante restrito, nós nos antecipamos às necessidades futuras dos nossos clientes e passamos a oferecer, também, produtos alimentícios, de embelezamento e medicamentos.
                </p>
                <p className="fontes_textos_desktop">
                    Percebendo um enorme potencial de crescimento, com espírito empreendedor e apostando na inovação, o Petshop Grajaú redirecionou sua linha de produtos e serviços e passou a oferecer os produtos de forma online. O Petshop Grajaú sabe e entende o quanto os pets são importantes nas nossas vidas. Além de nossos companheiros leais, eles nos oferecem amizade, conforto e alegria, até nos momentos mais difíceis. E não pedem nada além do nosso amor e cuidado em retorno por tanta dedicação! Por esse motivo, nós nos esforçamos, todos os dias, para criar, fortalecer e enriquecer os vínculos entre os tutores e os seus pets. Nosso compromisso é com você e com o seu pet, independentemente da espécie, tamanho ou idade.

                </p>
                <p className="fontes_textos_desktop">
                    Desejamos que nossa loja seja um ponto de encontro para os apaixonados por pets e, portanto, eles também são bem-vindos na loja! Nossa equipe está preparada para recebê-lo com toda atenção e carinho, como você e seu pet merecem.
                </p>
                <img src={img_clinica} id="img_clinica" />
                <div id="textos_mvv">
                    <a className="fontes_desktop_title"> Missão   </a>
                    <p className="fontes_textos_desktop"> Oferecer atendimento médico veterinário e produtos de excelência, através de uma estrutura hospitalar moderna e profissionais qualificados, proporcionando ao seu Pet um diagnóstico rápido, tratamento transparente, humanizado e eficaz.  </p>
                    <a className="fontes_desktop_title"> Visão  </a>
                    <p className="fontes_textos_desktop"> Tratamento humanizado, crescimento e qualidade, a Clínica Veterinária Grajáu será uma referencia em serviços médicos veterinários, trazendo agilidade nos diagnósticos, e o bem estar ao seu Pet. </p>
                    <a className="fontes_desktop_title"> Valores   </a>
                </div>
            </div>
            <ul id="col1">
                <li>
                    <img src='gostar 2.png' />
                    <a>
                        Amor pela <br></br>vida
                    </a>
                </li>
                <li>
                    <img src='martelo 2.png' />
                    <a>
                        Moral
                    </a>
                </li>
                <li>
                    <img src='etica 2.png' />
                    <a>
                        Ética
                    </a>
                </li>
            </ul>

            <ul id="col2">
                <li>
                    <img src='like 2.png' />
                    <a>
                        Lealdade
                    </a>
                </li>
                <li>
                    <img src='honesto 2.png' />
                    <a>
                        Honestidade
                    </a>
                </li>

            </ul>


        </div>


    );
}