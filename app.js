const showAll = document.querySelector('.share-btn')
const hideAll = document.querySelector('.share-btn2')

showAll.addEventListener('click', function() {
    const main = showAll.parentElement.parentElement

    main.classList.toggle('show')
})

hideAll.addEventListener('click', function() {
    const main = showAll.parentElement.parentElement

    main.classList.remove('show')
})