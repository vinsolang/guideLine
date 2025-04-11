const bar = document.querySelector(".bar");
const icons = document.querySelector("#dropdownList");
bar.onclick = ()=>{
    icons.classList.toggle("show");
}
