import Botton from "../../elements/Botton"
import Typography from "../../elements/Typography"

class CartWidget {
  $widget = null


  constructor({
    id, title, image, price, onClick
  }) {
    this._create( {id, title, image, price, onClick} )
  }

  _create ({ title, image, price, onClick}) {
    const $cart = document.createElement("div")

    $cart.setAttribute("class", "cart")

    const $fragment = document.createDocumentFragment()

    const $image = document.createElement("img")
    $image.src = image
    $image.alt = title
    $image.className = "cart-image"
    $fragment.appendChild($image)


    $fragment.appendChild(new Typography({
      text: title,
      className: "cart-title",
    }).render())

    $fragment.appendChild(new Botton({
      title: "Купить",
      className: "btn-cart",
      onClick: () => {
        console.log("click btn")
      }
    }).render())

    $cart.appendChild($fragment)

    this.$widget = $cart
  }

  render = () => {
    return this.$widget
  }
}

export default CartWidget