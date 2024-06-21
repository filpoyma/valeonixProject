new Swiper(".reviews__swiper", {
  loop: true,
  allowTouchMove: false,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".reviews__scrollbar",
    dragClass: "swiper-scrollbar-drag reviews__scrollbar--active",
  },

  navigation: {
    nextEl: ".reviews__next",
  },
});

class Popup {
  constructor(popup) {
    this.activeClass = "popup--active";
    this.buttonClose = popup.querySelector(".popup__close");
    this.form = popup.querySelector(".popup__form");
    this.errorTag = popup.querySelector(".popup__form-error");
    this.accept = popup.querySelector(".popup__accept");
    this.menu = document.querySelector(".header__menu");

    this.errorClass = "popup__form-error--active";
    this.errorInputClass = "popup__form-input--error";
    this.acceptClass = "popup__accept--active";

    popup.addEventListener("click", ({ target }) => {
      if (
        target.classList.contains("popup") ||
        target.classList.contains("popup__close")
      )
        popup.classList.remove(this.activeClass);

      if (!this.menu.classList.contains("header__menu--active"))
        document.body.classList.remove("body--overflow");
    });

    setTimeout(() => {
      popup.classList.add(this.activeClass);
      document.body.classList.add("body--overflow");
    }, 3000);

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = this.checkLength(e.target[0]);
      const surname = this.checkLength(e.target[1]);
      const email = this.checkEmail(e.target[2]);
      if (name && surname && email) {
        this.errorTag.classList.remove(this.errorClass);
        this.errorTag.textContent = "";
        this.accept.classList.add(this.acceptClass);
      } else if (!this.errorTag.classList.contains(this.errorClass)) {
        this.errorTag.textContent = "Данные введены неверно";
        this.errorTag.classList.add(this.errorClass);
      }
    });
  }

  checkLength(input) {
    const value = input.value;
    if (value.length > 0) {
      input.classList.remove(this.errorInputClass);

      return true;
    }

    input.classList.add(this.errorInputClass);
  }

  checkEmail(input) {
    const value = input.value;
    console.log(value);
    if (value.length > 0 && value.includes("@")) {
      input.classList.remove(this.errorInputClass);

      return true;
    }

    input.classList.add(this.errorInputClass);
  }
}

new Popup(document.querySelector(".popup"));
