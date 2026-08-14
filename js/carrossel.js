const carrosselDados = [
    {
        titulo: "Inteligência Artificial<br>Personalizada",
        descricao:
            'Cada recomendação é adaptada às características únicas do seu rosto. Nossa IA analisa suas características para oferecer recomendações realmente personalizadas.'
    },

    {
        titulo: "Especialistas ao seu<br>alcance",
        descricao:
            'Encontre profissionais qualificados em estética, maquiagem, skincare e outros serviços de beleza próximos à sua localização. Visualize avaliações, conheça os serviços oferecidos e escolha o especialista ideal para acompanhar sua jornada.'
    },

    {
        titulo: "Tudo em um só lugar",
        descricao:
            'Do autoconhecimento à conexão com profissionais, o Velvet Visage reúne análise facial, recomendações inteligentes, conteúdos exclusivos e inspirações em uma única plataforma, tornando sua rotina de beleza mais prática e personalizada.'
    },

    {
        titulo: "Desenvolvido para<br>valorizar sua essência",
        descricao:
            'Acreditamos que a beleza está na individualidade de cada pessoa. Por isso, nossa tecnologia foi criada para destacar suas características naturais e oferecer recomendações que respeitam seu estilo, suas preferências e sua identidade.'
    }
];


let indiceAtual = 0;


const titulo = document.getElementById("carrossel-titulo");
const descricao = document.getElementById("carrossel-descricao");

const btnAnterior = document.querySelector(".btn-prev");
const btnProximo = document.querySelector(".btn-next");

const indicadores = document.querySelectorAll(".indicador");


function atualizarCarrossel(direcao = "next") {

    const slideAtual = carrosselDados[indiceAtual];
    const carrosselText = document.querySelector(".carrossel-text");

    // Sai para o lado
    carrosselText.style.transform =
        direcao === "next"
            ? "translateX(-30px)"
            : "translateX(30px)";

    carrosselText.style.opacity = "0";

    setTimeout(() => {

        titulo.innerHTML = slideAtual.titulo;
        descricao.textContent = slideAtual.descricao;

        indicadores.forEach((indicador, indice) => {

            indicador.classList.toggle(
                "ativo",
                indice === indiceAtual
            );

        });

        // Coloca o novo conteúdo do lado oposto
        carrosselText.style.transition = "none";

        carrosselText.style.transform =
            direcao === "next"
                ? "translateX(30px)"
                : "translateX(-30px)";

        // Força o navegador a aplicar a posição
        carrosselText.offsetHeight;

        carrosselText.style.transition =
            "transform 0.4s ease, opacity 0.4s ease";

        carrosselText.style.transform = "translateX(0)";
        carrosselText.style.opacity = "1";

    }, 400);
}


function proximoSlide() {

    indiceAtual++;

    if (indiceAtual >= carrosselDados.length) {
        indiceAtual = 0;
    }

    atualizarCarrossel("next");
}


function slideAnterior() {

    indiceAtual--;

    if (indiceAtual < 0) {
        indiceAtual = carrosselDados.length - 1;
    }

    atualizarCarrossel("prev");
}


btnProximo.addEventListener("click", proximoSlide);

btnAnterior.addEventListener("click", slideAnterior);


indicadores.forEach((indicador, indice) => {

    indicador.addEventListener("click", () => {

        indiceAtual = indice;

        atualizarCarrossel();

    });

});


// Troca automaticamente a cada 5 segundos
setInterval(() => {
    proximoSlide();
}, 5000);