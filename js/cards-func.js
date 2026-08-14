const funcionalidades = [
    {
        icon: "assets/icons/funcionalidades/face-scan.png",
        title: "Beauty Scan",
        description: "Escaneie seu rosto com nossa tecnologia de IA avançada."
    },

    {
        icon: "assets/icons/funcionalidades/paint-palette.png",
        title: "Color Analysis",
        description: "Descubra sua cartela de cores ideal e saiba quais tons realçam sua beleza."
    },

    {
        icon: "assets/icons/funcionalidades/skin.png",
        title: "Skin Analysis",
        description: "Identifique as  características da sua pele e receba recomendações personalizadas."
    },
    {
        icon: "assets/icons/funcionalidades/hair.png",
        title: "Sugestões de Cabelo",
        description: "Cores e estilos de cabelo que harmonizam com seu tom de pele e estilo."
    },

    {
        icon: "assets/icons/funcionalidades/chat.png",
        title: "Assistente IA",
        description: "Tire dúvidas e receba orientações personalizadas com nossa assistente IA."
    },

    {
        icon: "assets/icons/funcionalidades/map.png",
        title: "Profissionais Próximos (a)",
        description: "Identifique as  características da sua pele e receba recomendações personalizadas."
    }, 
    
    {
        icon: "assets/icons/funcionalidades/makeup.png",
        title: "Recomendações de Maquiagem ",
        description: "Sugestões de maquiagens que combinam com você e sua paleta de cores."
    },

    {
        icon: "assets/icons/funcionalidades/magazine.png",
        title: "Conteúdo Exclusivo",
        description: "Sugestões de maquiagens que combinam com você e sua paleta de cores."
    },

    {
        icon: "assets/icons/funcionalidades/smartphone-hand.png",
        title: "Histórico de Análises",
        description: "Acompanhe sua evolução e veja suas análises sempre que quiser."
    },
];

const containerCards = document.querySelector(".container-cards");

funcionalidades.forEach((funcionalidade) => {

    const card = document.createElement("div");
    card.classList.add("card-func");

    card.innerHTML = `
    <div class="icon-background">            
        <img 
            src="${funcionalidade.icon}" 
            alt="${funcionalidade.title}" 
            class="card-icon"
        >
    </div>
        <h4 class="card-title">
            ${funcionalidade.title}
        </h4>

        <p class="card-description">
            ${funcionalidade.description}
        </p>
    `;

    containerCards.appendChild(card);
});