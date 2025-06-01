import Cart from "../../components/Cart"

class CartsWidget {
  $component = null

  constructor({ data }) {
    this._crete(data)
  }

  _crete (data) {
    const $container = document.createElement("div")
    $container.className = "carts-container"

      data.forEach((item) => {
        $container.appendChild(
          new Cart({
            id: item.id,
            title: item.title,
            image: item.image,
            price: item.price,
            
            onClick: () => {
              console.log("click btn", item.title)
            },
          }).render()
        )
      })

    this.$component = $container
  }

  render = () => {
    return this.$component
  }
}

export default CartsWidget