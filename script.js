const navToggle = document.getElementById('nav-toggle')
const navCenter = document.getElementById('nav-center')

navToggle.addEventListener('click', () => {
    navCenter.classList.toggle('active')
})