const membros = [
    {
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        name: "Ana Luíza Machado",
        role: "UI/UX app designer"
    },
    {
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        name: "Ana Luíza Marchiori",
        role: "Web designer"
    },
    {
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        name: "Bárbara Gonçalves",
        role: "UI/UX app designer"
    },
    {
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        name: "Beatriz Gagliano",
        role: "Desenvolvedora"
    },
    {
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        name: "Caroline Fantinate",
        role: "Desenvolvedora"
    },
]

const containerCardsMembros = document.querySelector(".container-equipe");

membros.forEach((membro) => {

    const card = document.createElement("div");
    card.classList.add("card-membro");

    card.innerHTML = `
        <img 
            src="${membro.image}" 
            alt="${membro.name}" 
        >
        <h4>${membro.name}</h4>
        <p>${membro.role}</p>
    `;

    containerCardsMembros.appendChild(card);
});