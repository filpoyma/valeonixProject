

class Questions {
  constructor(list) {
    this.active = null;
    this.buttonClass = "questions__item-button";
    this.classActive = "questions__item-button--active";

    list.addEventListener("click", ({ target }) => {
      if (target.classList.contains(this.buttonClass)) {
        console.log("1");
        if (this.active && target !== this.active)
          this.active.classList.remove(this.classActive);
        
        target.classList.toggle(this.classActive);
        this.active = target;
      }
    });
  }
}

new Questions(document.querySelector(".questions__list"));

class Smart {
  constructor(buttons) {
     this.active = null;
     this.activeClass = 'smart__image-button--active';
     this.class = 'smart__image-button';


     [...buttons.children].forEach(node => {
       if(node.classList.contains(this.activeClass)) this.active = node
     });

     buttons.addEventListener('click', ({target}) => {
  
      if(target.classList.contains(this.class)) {
            this.active.classList.remove(this.activeClass);
            target.classList.add(this.activeClass);
            this.active = target
      }
     })
  }


}

new Smart(document.querySelector('.smart__image-buttons'))