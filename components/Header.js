  import Typography from "../elements/Typography";

  class Header {
    $element = null

    constructor (){
        this._create()
    }

    _create = () => {
        const $header = document.createElement("header")
        $header.className = "site-header"
        
        const $container = document.createElement("div")
        $container.className = "header-container"

        const $logo = new Typography ({
            text : "Tech Store",
            className: "logo"
        }).render()

        const $nav = document.createElement("nav")
        $nav.className = "nav"
        $nav.innerHTML = `
        <a href = "#">Главнвя</a>
        <a href = "#">Каталог</a>
        <a href = "#">Контакти</a>
        `
        $container.appendChild($logo)
        $container.appendChild($nav)
        $header.appendChild($container)

        this.element = $header
    }

    render = () => {
        return this.element
    }
  }

export default Header