const CloseHandleClick = (e) => {
    let openHambBtn = document.getElementById("head__adaptive__btn");
    let headMenu = document.getElementById("head__menu");
    let lockContent = document.getElementById('container');
    lockContent.classList.remove("lock");
    openHambBtn.classList.remove("active");
    headMenu.classList.remove("active");
};


export default CloseHandleClick