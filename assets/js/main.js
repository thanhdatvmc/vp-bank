window.addEventListener('DOMContentLoaded', () => {
    // lozad
    const el = document.querySelectorAll('.lozad');
    const observer = lozad(el);
    observer.observe();

    // wowjs
    new WOW({
        boxClass: 'wow',
        animateClass: 'fadeInUp'
    }).init();

    // submenu
    const menu = "https://static.vnncdn.net/icon-v1/menu.svg";
    const clone = "https://static.vnncdn.net/v1/icon/cancel(1).svg";
    let status = false;
    document.getElementById('subMenu').addEventListener('click', (e) => {
        const listSubMenu = document.getElementById('listSubMenu');
        status = !status;
        const target = e.target;
        if (status == true) {
            target.src = clone;
            listSubMenu.classList.remove('-translate-x-full')
        } else {
            target.src = menu;
            listSubMenu.classList.add('-translate-x-full')
        }
    });

    setTimeout(() => {
        window.scrollTo(0, 0)
    }, 1000)
})