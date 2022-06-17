const HandleClick = (e) => {
    let openHambBtn = document.getElementById("head__adaptive__btn");
    let headMenu = document.getElementById("head__menu");
    let lockContent = document.getElementById('container');
    lockContent.classList.toggle("lock");
    openHambBtn.classList.toggle("active");
    headMenu.classList.toggle("active");
};


export default HandleClick
