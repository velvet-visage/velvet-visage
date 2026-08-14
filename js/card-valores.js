const valores = [
    {
        icon: "assets/icons/valores/light.png",
        title: "Inovação",
        description: "Usamos tecnologia de ponta para entregar resultados precisos."
    },

    {
        icon: "assets/icons/valores/paintbrush.png",
        title: "Personalização",
        description: "Cada pessoa é única e nossas recomendações também."
    },
    {
        icon: "assets/icons/valores/protect.png",
        title: "Confiança",
        description: "Prioridade e segurança são prioridade em tudo que fazemos."
    },
    {
        icon: "assets/icons/valores/smartphone-love.png",
        title: "Acolhimento",
        description: "Estamos aqui para te apoiar em cada etapa da sua jornada."
    },
]

const containerCards = document.getElementById("container-card-valores");

valores.forEach((valor) => {

    const card = document.createElement("div");
    card.classList.add("card-valores");

    card.innerHTML = `
        <div class="icon-background">
            <img 
                src="${valor.icon}" 
                alt="${valor.title}" 
            >
        </div>
        <h4>${valor.title}</h4>
        <p>${valor.description}</p>
    `;

    containerCards.appendChild(card);
});