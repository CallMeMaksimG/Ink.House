const tabsBtn = document.querySelectorAll('.catalog__tabs-btn');
const tabContent = document.querySelectorAll('.catalog__list');
tabsBtn.forEach((item) => {
    item.addEventListener('click', open)
});

function open(event) {
    const tabTarget = event.currentTarget;
    const button = tabTarget.dataset.country;

    tabsBtn.forEach((item) => {
        item.classList.remove('catalog__tabs-btn--active');
    })

    tabTarget.classList.add('catalog__tabs-btn--active');

    tabContent.forEach((item) => {
        item.classList.remove('catalog__list--active');
    })

    document.querySelector(`#${button}`).classList.add('catalog__list--active');
}