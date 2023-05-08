// Récupération des éléments du DOM
let toggle = document.querySelector('.toggle');
let sideBar = document.querySelector('.sidebar-container');

// Ajout d'un évènnement au clique afin d'afficher ou masquer la SideBar
toggle.addEventListener('click', () => {
    sideBar.classList.toggle('toggle-function')
})
