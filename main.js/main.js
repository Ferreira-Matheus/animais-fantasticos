/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_animacoes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/animacoes.js */ \"./js/modules/animacoes.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_fucionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/fucionamento.js */ \"./js/modules/fucionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/scroll-anima.js */ \"./js/modules/scroll-anima.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\r\nscrollSuave.init();\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime=\"accordion\"] dt');\r\naccordion.init();\r\n\r\nconst tabNav = new _modules_animacoes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\r\ntabNav.init();\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\r\nmodal.init();\r\n\r\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-tooltip]');\r\ntooltip.init();\r\n\r\nconst scrollAnima = new _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('[data-anime=\"scroll\"]');\r\nscrollAnima.init();\r\n\r\nconst dropdownMenu = new _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-dropdown]');\r\ndropdownMenu.init();\r\n\r\nconst menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]');\r\nmenuMobile.init();\r\n\r\nconst funcionamento = new _modules_fucionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('[data-semana]', 'aberto');\r\nfuncionamento.init();\r\n\r\n\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])('../../animaisapi.json', '.numeros-grid');\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('https://blockchain.info/ticker', '.btc-preco');\n\n//# sourceURL=webpack://animais-fantasticos/./js/main.js?");

/***/ }),

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\r\n  constructor(list) {\r\n    this.accordionList = document.querySelectorAll(list);\r\n    this.activeClass = 'ativo';\r\n  }\r\n\r\n  toggleAccordion(item) {\r\n    item.classList.toggle(this.activeClass);\r\n    item.nextElementSibling.classList.toggle(this.activeClass);\r\n  }\r\n\r\n  // adicionar os eventos ao accordion\r\n  addAccordionEvent() {\r\n    this.accordionList.forEach((item) => {\r\n      item.addEventListener('click', () => this.toggleAccordion(item));\r\n    });\r\n  }\r\n\r\n  // iniciar funçao\r\n  init() {\r\n    if(this.accordionList.length) {\r\n      // ativar primeiro item\r\n      this.toggleAccordion(this.accordionList[0]);\r\n      this.addAccordionEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\r\n  constructor(numeros, observerTarget, observerClass) {\r\n    this.numeros = document.querySelectorAll(numeros);\r\n    this.observerTarget = document.querySelector(observerTarget)\r\n    this.observerClass = observerClass;\r\n\r\n    // bind ao this do objeto ao callback da mutação\r\n    this.handleMutation = this.handleMutation.bind(this)\r\n  }\r\n\r\n  // Recebe um elemento do dom, com numero em seu texto\r\n  // incrementa a partir de 0 até o numero final\r\n  static incrementarNumero(numero) {\r\n    const total = +numero.innerText;\r\n    const incremento = Math.floor(total / 100);\r\n    let start = 0;\r\n    const timer = setInterval(() => {\r\n      start += incremento;\r\n      numero.innerText = start\r\n      if(start > total) {\r\n        numero.innerText = total\r\n        clearInterval(timer)\r\n      }\r\n    }, 25 * Math.random())\r\n  }\r\n\r\n  // ativa incrementar numero para cada\r\n  // numero selecionado no dom\r\n  animaNumeros () {  \r\n    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero))\r\n  }\r\n\r\n  // funão que ocorre quado a mutaçao ocorrer\r\n  handleMutation (mutation) {\r\n    if (mutation[0].target.classList.contains(this.observerClass)) {\r\n      this.observer.disconnect();\r\n      this.animaNumeros();\r\n    }\r\n  }\r\n\r\n  // Adiciona o mutationObserver para verificar\r\n  // quado a classe ativo é adicionada ao \r\n  // elemento target \r\n  addMutationObserver() {\r\n    this.observer = new MutationObserver(this.handleMutation)\r\n    this.observer.observe(this.observerTarget, { attributes: true });\r\n  }\r\n\r\n  init() {\r\n    if(this.numeros.length && this.observerTarget) {\r\n      this.addMutationObserver();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/animacoes.js":
/*!*********************************!*\
  !*** ./js/modules/animacoes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\r\n  constructor(menu, content) {\r\n    this.tabMenu = document.querySelectorAll(menu);\r\n    this.tabContent = document.querySelectorAll(content);\r\n    this.activeClass = 'ativo'\r\n  }\r\n\r\n  // ativa a tab de acordo com o index da mesma\r\n  activeTab(index) {\r\n    this.tabContent.forEach((section) => {\r\n      section.classList.remove(this.activeClass);\r\n    });\r\n    const direcao = this.tabContent[index].dataset.anime;\r\n      this.tabContent[index].classList.add(this.activeClass, direcao);\r\n  };\r\n\r\n  // adiciona os eventos nas tabs\r\n  addTabNavEvent() {\r\n    this.tabMenu.forEach((itemMenu, index) => {\r\n      itemMenu.addEventListener('click', () => this.activeTab(index));\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if(this.tabMenu.length && this.tabContent.length) {\r\n      // ativar primeiro item\r\n      this.activeTab(0);\r\n      this.addTabNavEvent();\r\n    }\r\n    return this;\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/animacoes.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\r\n  let timer;\r\n\r\n  return (...args) => {\r\n    if(timer) clearTimeout(timer);\r\n    timer = setTimeout(() => {\r\n      callback(...args);\r\n      timer = null;\r\n    }, delay);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nclass DropdownMenu {\r\n  constructor(DropdownMenus, events) {\r\n    this.dropdownMenus = document.querySelectorAll(DropdownMenus);\r\n\r\n    // define touchstart e click como argumento\r\n    // padrao de event caso o usuario não defina\r\n    if(events === undefined) this.events = ['touchstart', 'click'];\r\n    else this.events = events;\r\n\r\n    this.activeClass = 'active'\r\n    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);\r\n  }\r\n  \r\n  // ativa o dropdownMenu e adiciona a\r\n  // funcçao que observa o click fora dele\r\n  activeDropdownMenu(event) {\r\n    event.preventDefault();\r\n    const element = event.currentTarget;\r\n    element.classList.add(this.activeClass)\r\n    ;(0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, this.events, () => {\r\n      element.classList.remove('active')\r\n    })\r\n  }\r\n\r\n  // adiciona os eventos ao dropdownMenu\r\n  addDropdownMenusEvent() {\r\n    this.dropdownMenus.forEach(menu => {\r\n      this.events.forEach(userEvents => {\r\n        menu.addEventListener(userEvents, this.activeDropdownMenu);\r\n      })\r\n    })\r\n  }\r\n\r\n  init() {\r\n    if(this.dropdownMenus.length) {\r\n      this.addDropdownMenusEvent()\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction fetchAnimais(url, target) {\r\n\r\n  // cria a div contendo informações com o total de animais\r\n function createAnimal(animal) {\r\n  const div = document.createElement('div');\r\n  div.classList.add('numero-animal');\r\n \r\n  div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;\r\n  \r\n  return div;\r\n }\r\n\r\n // preenche cada animal no DOM\r\n const numeroGrid = document.querySelector(target);\r\n\r\n function preencherAnimais(animal) {\r\n  const divAnimal = createAnimal(animal);\r\n  numeroGrid.appendChild(divAnimal);\r\n }\r\n\r\n // anima os numeros de cada animal\r\n function animaAnimaisNumeros() {\r\n  const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-numero]', '.numeros', 'ativo');\r\n  animaNumeros.init();\r\n }\r\n\r\n // puxa os animais atravez de um arquivo json\r\n // e cria cada animal utilizando createAnimal\r\n async function criarAnimais() {\r\n  try {\r\n    // Fetch e espera resposta e transforma a resposta em json\r\n   const animaisResponse = await fetch(url);\r\n   const animaisJSON = await animaisResponse.json();\r\n\r\n   // Após a transformação de json, ativa as funções\r\n   // para preencher e animar os numeros\r\n   animaisJSON.forEach(animal => preencherAnimais(animal))\r\n   animaAnimaisNumeros();\r\n  } catch(erro) {\r\n   console.log(erro)\r\n  }\r\n }\r\n\r\n return criarAnimais()\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBitcoin)\n/* harmony export */ });\nfunction fetchBitcoin(url, target) {\r\n fetch(url)\r\n  .then(response => response.json())\r\n  .then(bitcoin => {\r\n   const btcPreco = document.querySelector(target);\r\n   btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);\r\n  }).catch(erro => {\r\n   console.log(erro)\r\n  })\r\n\r\n}\r\n\r\n// https://blockchain.info/ticker\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/fucionamento.js":
/*!************************************!*\
  !*** ./js/modules/fucionamento.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Funcionamento)\n/* harmony export */ });\nclass Funcionamento {\r\n  constructor(funcionamento, activeClass) {\r\n    this.funcionamento = document.querySelector(funcionamento);\r\n    this.activeClass = activeClass\r\n  }\r\n\r\n  dadosFuncionamento() {\r\n    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);\r\n    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);\r\n\r\n  }\r\n\r\n  dadosAgora() {\r\n    this.dataAgora = new Date();\r\n    this.diaAgora = this.dataAgora.getDay();\r\n    this.horarioAgora = this.dataAgora.getUTCHours() - 3;\r\n  }\r\n\r\n  estaAberto() {\r\n    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;\r\n   \r\n    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora <= this.horarioSemana[1]);\r\n\r\n    return semanaAberto && horarioAberto;\r\n  }\r\n\r\n  ativaAberto() {\r\n    if(this.estaAberto()) {\r\n      this.funcionamento.classList.add(this.activeClass);\r\n      this.funcionamento.classList.remove('fechado');\r\n    }\r\n  }\r\n\r\n  init() {\r\n  if(this.funcionamento){\r\n    this.dadosFuncionamento();\r\n    this.dadosAgora();\r\n    this.ativaAberto();\r\n  }\r\n  return this;\r\n  }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fucionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nclass MenuMobile {\r\n  constructor(menuButton, menuList, events) {\r\n    this.menuButton = document.querySelector(menuButton);\r\n    this.menuList = document.querySelector(menuList);\r\n    this.activeClass = 'active';\r\n\r\n    if(events === undefined) this.events = ['touchstart','click'];\r\n    else this.events = events;\r\n\r\n    this.openMenu = this.openMenu.bind(this);\r\n  }\r\n\r\n  openMenu (event) {\r\n    event.preventDefault();\r\n    this.menuList.classList.add(this.activeClass)\r\n    this.menuButton.classList.add(this.activeClass)\r\n    ;(0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuList, this.events, () => {\r\n     this. menuList.classList.remove(this.activeClass)\r\n      this.menuButton.classList.remove(this.activeClass)\r\n    })\r\n  }\r\n\r\n  addMenuMobileEvents() {\r\n    this.events.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu))\r\n  }\r\n\r\n  init() {\r\n    if(this.menuButton && this.menuList) {\r\n      this.addMenuMobileEvents();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(botaoAbrir, botaoFechar, containerModal) {\r\n    this.botaoAbrir = document.querySelector(botaoAbrir);\r\n    this.botaoFechar = document.querySelector(botaoFechar);\r\n    this.containerModal = document.querySelector(containerModal);\r\n\r\n    // bind this ao callback para\r\n    // fazer referencia ao objeto\r\n    // da classe\r\n    this.eventToggleModal = this.eventToggleModal.bind(this);\r\n    this.clickForaModal = this.clickForaModal.bind(this);\r\n  }\r\n\r\n// abre ou fecha o modal\r\n  toggleModal() {\r\n    this.containerModal.classList.toggle('ativo');\r\n  };\r\n\r\n  // adiciona o evento ao modal\r\n  eventToggleModal(event) {\r\n    event.preventDefault();\r\n    this.toggleModal();\r\n  }\r\n  \r\n  // Fecha o modal ao clicar do lado de fora\r\n  clickForaModal(event) {\r\n    if(event.target === this.containerModal) {\r\n        this.toggleModal();\r\n    };\r\n  };\r\n\r\n  // adiciona os eventos aos elementos do modal\r\n  addModalEvents() {\r\n    this.botaoAbrir.addEventListener('click', this.eventToggleModal);\r\n    this.botaoFechar.addEventListener('click', this.eventToggleModal);\r\n    this.containerModal.addEventListener('click', this.clickForaModal);\r\n  }\r\n\r\n  init() {\r\n    if(this.botaoAbrir && this.botaoFechar && this.containerModal) {\r\n      this.addModalEvents();\r\n    }\r\n    return this;\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n    const html = document.documentElement;\r\n    const outside = 'data-outside';\r\n\r\n    function handleOutsideClick(event) {\r\n        if(!element.contains(event.target)) {\r\n            element.removeAttribute(outside);\r\n            events.forEach(userEvent => {\r\n                html.removeEventListener(userEvent, handleOutsideClick)\r\n            })\r\n            callback();\r\n        }\r\n    }\r\n\r\n    if(!element.hasAttribute(outside)) {\r\n        events.forEach(userEvent => {\r\n            setTimeout(() => {html.addEventListener(userEvent, handleOutsideClick);})\r\n        })\r\n        element.setAttribute(outside, '')\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-anima.js":
/*!************************************!*\
  !*** ./js/modules/scroll-anima.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnima)\n/* harmony export */ });\n/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce */ \"./js/modules/debounce.js\");\n\r\n\r\nclass ScrollAnima {\r\n  constructor(sections) {\r\n   this.sections = document.querySelectorAll(sections)\r\n   this.windowMetade = window.innerHeight * 0.6;\r\n\r\n   this.checkDistance = (0,_debounce__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistance.bind(this), 50)\r\n  }\r\n\r\n  // pega a distancia de cada item\r\n  // em relação ao topo do site\r\n  getDistance() {\r\n    this.distance = [...this.sections].map((section) => {\r\n      const offset = section.offsetTop;\r\n      return {\r\n        element: section,\r\n        offset: Math.floor(offset - this.windowMetade),\r\n      };\r\n    });\r\n  }\r\n\r\n  // verifica a distancia em cada objeto \r\n  // em relação ao scroll do site\r\n  checkDistance() {\r\n    this.distance.forEach(item => {\r\n      if(window.pageYOffset > item.offset) {\r\n        item.element.classList.add('ativo');\r\n      } else if (item.element.classList.contains('ativo')){\r\n          item.element.classList.remove('ativo');\r\n        }\r\n    });\r\n  }\r\n\r\n\r\n  init() {\r\n    if(this.sections.length) {\r\n      this.getDistance();\r\n      this.checkDistance();\r\n      window.addEventListener('scroll', this.checkDistance);\r\n    }\r\n    return this;\r\n  }\r\n\r\n  // remove o event de scroll\r\n  stop() {\r\n    window.removeEventListener('scroll', this.checkDistance);\r\n  }\r\n\r\n};\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-anima.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if(options === undefined) {\r\n      this.options = {behavior: 'smooth', block: 'start',};\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n  \r\n  scrollToSection(event){\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute('href');\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView(this.options);\r\n    // FORMA ALTERNATIVA\r\n    // const topo = section.offsetTop;\r\n    // window.scrollTo({\r\n    //     top: topo,\r\n    //     behavior: 'smooth'\r\n      // });  \r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linksInternos.forEach((link) => link.addEventListener('click', this.scrollToSection));\r\n  }\r\n\r\n  init(){\r\n    if(this.linksInternos.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip { \r\n  constructor(tooltips) {\r\n    this.tooltips = document.querySelectorAll(tooltips);\r\n\r\n    // bind do objeto da classe aos callbacks\r\n\r\n    this.onMouseLeave = this.onMouseLeave.bind(this);\r\n    this.onMouseMove = this.onMouseMove.bind(this);\r\n    this.onMouseOver = this.onMouseOver.bind(this);\r\n  } \r\n\r\n  // Move a tooltip com base em sues estilos\r\n  // de acordo com a posição do mouse\r\n  onMouseMove(event) {\r\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n\r\n      if(event.pageX + 240 > window.innerWidth) {\r\n        this.tooltipBox.style.left = `${event.pageX - 190}px`;\r\n      } else {\r\n        this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n      }\r\n  };\r\n\r\n  // Remove a tooltip e os eventos de mousemove e mouseleave\r\n  onMouseLeave({ currentTarget }) {\r\n      this.tooltipBox.remove();\r\n      currentTarget.removeEventListener('mouseleave', this.onMouseLeave);\r\n      currentTarget.removeEventListener('mousemove', this.onMouseMove);\r\n  };\r\n  \r\n  // cria a tooltip box e coloca no body\r\n  criarToolTipBox (element) {\r\n    const tooltipBox = document.createElement('div');\r\n    const text = element.getAttribute('aria-label');\r\n    tooltipBox.classList.add('tooltip');\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    this.tooltipBox = tooltipBox;\r\n  };\r\n\r\n  // cria a tooltip e adiciona os eventos \r\n  // de mousemove e mouseleave ao target\r\n  onMouseOver({ currentTarget }) {\r\n    // cria a tooltipbox e coloca em uma propriedade\r\n    this.criarToolTipBox(currentTarget);\r\n\r\n    currentTarget.addEventListener('mousemove', this.onMouseMove);\r\n    currentTarget.addEventListener('mouseleave', this.onMouseLeave);\r\n  };\r\n\r\n  // adiciona os eventos de mouseover a cada tooltip\r\n  addTooltipsEvent() {\r\n    this.tooltips.forEach((item) => {\r\n      item.addEventListener('mouseover', this.onMouseOver);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if(this.tooltips.length) {\r\n      this.addTooltipsEvent();\r\n    }\r\n    return this;\r\n  }\r\n\r\n};\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;