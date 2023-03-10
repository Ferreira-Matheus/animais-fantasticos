import outsideClick from "./outsideclick.js"

export default class DropdownMenu {
  constructor(DropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(DropdownMenus);

    // define touchstart e click como argumento
    // padrao de event caso o usuario não defina
    if(events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeClass = 'active'
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }
  
  // ativa o dropdownMenu e adiciona a
  // funcçao que observa o click fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass)
    outsideClick(element, this.events, () => {
      element.classList.remove('active')
    })
  }

  // adiciona os eventos ao dropdownMenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach(menu => {
      this.events.forEach(userEvents => {
        menu.addEventListener(userEvents, this.activeDropdownMenu);
      })
    })
  }

  init() {
    if(this.dropdownMenus.length) {
      this.addDropdownMenusEvent()
    }
    return this;
  }
}
