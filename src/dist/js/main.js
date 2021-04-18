console.log("start");

const panels = document.querySelectorAll(".panel");

const panelsArr = Array.from(panels);
console.log(panelsArr);


panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeClassAll();
        return (panel.classList.toggle("active"))
    })

})


const removeClassAll = () => {
    panels.forEach((panel) => panel.classList.remove("active"));
}