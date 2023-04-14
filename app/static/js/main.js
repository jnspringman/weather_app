headerMenuToggle = document.querySelector('.header__menu-toggle');
headerMenu = document.querySelector('.header__menu');

headerSearchIcon = document.querySelector('.header__search-icon');
headerSearchDropdown = document.querySelector('.header__search-dropdown');

headerMenuToggle.addEventListener('click', () => {
    if (headerMenu.dataset.menuExpanded === "false") {
        headerMenu.dataset.menuExpanded = true;
        headerMenuToggle.ariaExpanded = true;
    } else {
        headerMenu.dataset.menuExpanded = false;
        headerMenuToggle.ariaExpanded = false;
    }
});

headerSearchIcon.addEventListener('click', () => {
    if (headerSearchDropdown.dataset.expanded === "false") {
        headerSearchDropdown.dataset.expanded = true;
        headerSearchIcon.ariaExpanded = true;
    } else {
        headerSearchDropdown.dataset.expanded = false;
        headerSearchIcon.ariaExpanded = false;
    }
});