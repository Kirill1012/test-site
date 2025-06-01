import products from "../Description/description"
import Carts from "../widgets/Carts"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

class Bootstrap {
  _getRoot = () => {
    const $root = document.querySelector("#root")

    if (!$root) {
      throw new Error("rood node hasn't been finding")
    }

    return $root
  }

  init = () => {
    try {
      const $root = this._getRoot()

      const header = new Header().render()
      const sidebar = new Sidebar({
        title: "КАТЕГОРИИ ТОВАРОВ",
        items: [
          {text: "Телефоны"},
          {text: "Планшеты"},
          {text: "Мониторы"},
          {text: "Смарт часы"},
          {text: "Игровые наушники"},
          {text: "Игровые мыши"}
        ]
      }).render()
      const carts = new Carts({ data: products }).render()

      const $layout = document.createElement("div")
      $layout.className = "layout"

      $layout.appendChild(sidebar)
      $layout.appendChild(carts)

       $root.appendChild(header)
       $root.appendChild($layout)

    } catch(error) {
      console.error(error)
    }
   }
}

export default Bootstrap