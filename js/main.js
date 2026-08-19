const menuHamburguer = document.querySelector(".menu-hamburguer");
const nav = document.querySelector("nav");

menuHamburguer.addEventListener("click", () => {
    nav.classList.toggle("menu-aberto");
});

function alertDownload() {
    alert("Em breve | O aplicativo Velvet Visage ainda não está disponível para download. Estamos preparando tudo para você - volte em breve para descobrir o melhor de você. 💗");
}
const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", () => {
    if (window.scrollY >= window.innerHeight) {
        btnTopo.classList.add("visivel");
    } else {
        btnTopo.classList.remove("visivel");
    }
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});