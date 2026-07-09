/* =========================================================
   MOODCHIVE MOBILE HAMBURGER MENU
   HTML 수정 없이 기존 .header_nav 메뉴를 모바일 드롭다운으로 사용
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");

    if (!header) {
        return;
    }

    const nav = header.querySelector(".header_nav");
    const util = header.querySelector(".header_util");

    if (!nav || !util || util.querySelector(".mobile_menu_button")) {
        return;
    }

    /* 햄버거 버튼을 header_util 마지막에 자동 생성 */
    const menuItem = document.createElement("li");
    menuItem.className = "mobile_menu_item";

    const menuButton = document.createElement("button");
    menuButton.className = "mobile_menu_button";
    menuButton.type = "button";
    menuButton.setAttribute("aria-label", "메뉴 열기");
    menuButton.setAttribute("aria-expanded", "false");

    if (!nav.id) {
        nav.id = "mobileGlobalNav";
    }

    menuButton.setAttribute("aria-controls", nav.id);

    menuButton.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    menuItem.appendChild(menuButton);
    util.appendChild(menuItem);

    function openMenu() {
        nav.classList.add("is-open");
        menuButton.classList.add("is-open");
        menuButton.setAttribute("aria-expanded", "true");
        menuButton.setAttribute("aria-label", "메뉴 닫기");
    }

    function closeMenu() {
        nav.classList.remove("is-open");
        menuButton.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "메뉴 열기");
    }

    menuButton.addEventListener("click", (event) => {
        event.stopPropagation();

        if (nav.classList.contains("is-open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    /* 메뉴를 누르면 해당 페이지로 이동하면서 메뉴 닫기 */
    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    /* 메뉴 바깥을 누르면 닫기 */
    document.addEventListener("click", (event) => {
        if (
            nav.classList.contains("is-open") &&
            !nav.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            closeMenu();
        }
    });

    /* ESC로 닫기 */
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    /* 모바일을 벗어나면 열린 상태 초기화 */
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});
