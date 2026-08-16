const membros = [
    {
        image: "assets/members/ana-machado.png",
        name: "Ana Luíza Machado",
        role: "UI/UX app designer"
    },
    {
        image: "assets/members/ana-marchiori.png",
        name: "Ana Luíza Marchiori",
        role: "Web designer"
    },
    {
        image: "assets/members/barbara.png",
        name: "Bárbara Gonçalves",
        role: "UI/UX app designer"
    },
    {
        image: "assets/members/beatriz.png",
        name: "Beatriz Gagliano",
        role: "Desenvolvedora"
    },
    {
        image: "assets/members/carol.png",
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