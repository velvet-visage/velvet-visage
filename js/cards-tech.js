const tecnologias = [
    {
        icon: "assets/icons/tecnologias/sparkles.png",
        title: "Personalização Inteligente",
        description: "Cada recomendação é adaptada às suas características, proporcionando uma experiência exclusiva e alinhada às suas necessidades."
    },
    {
        icon: "assets/icons/tecnologias/smartphone-security.png",
        title: "Segurança e Privacidade",
        description: "Seus dados e análises são protegidos para garantir uma experiência confiável e preservar a sua privacidade."
    },
    {
        icon: "assets/icons/tecnologias/goal.png",
        title: "Precisão em cada detalhe",
        description: "Nossa tecnologia realiza análises detalhadas que oferecem recomendações mais assertivas, auxiliando você em escolhas com mais confiança."
    },
    {
        icon: "assets/icons/tecnologias/smartphone-hand.png",
        title: "Praticidade para o dia-a-dia",
        description: "Acompanhe sua jornada de beleza com praticidade em um aplicativo completo e intuitivo."
    },
];

const containerCardsTech = document.querySelector(".cards-tecnologia");

tecnologias.forEach((tecnologia) => {

    const card = document.createElement("div");
    card.classList.add("card-tecnologia");

    card.innerHTML = `
        <div class="container-icon-card">    
            <img 
                src="${tecnologia.icon}" 
                alt="${tecnologia.title}" 
            >
        </div>

        <div>
            <h4>
                ${tecnologia.title}
            </h4>

            <p>
                ${tecnologia.description}
            </p>
        </div>
    `;

    containerCardsTech.appendChild(card);
});