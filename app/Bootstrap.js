import Carts from "../widgets/Carts"

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
      const data = ["car-1", "cart-2", "cart-3", "cart-4"]

      this._getRoot().appendChild(new Carts({ data }).render())
    } catch(error) {
      console.error(error)
    }
   }
}

export default Bootstrap