import Cart from "../../components/Cart"

class CartsWidget {
  $component = null

  constructor({ data }) {
    this._crete(data)
  }

  _crete (data) {
    const $fragment = document.createDocumentFragment()

      data.forEach((item) => {
        $fragment.appendChild(
          new Cart({
            title: item,
            onClick: () => {
              console.log("click btn", item)
            },
          }).render()
        )
      })

    this.$component = $fragment
  }

  render = () => {
    return this.$component
  }
}

export default CartsWidget