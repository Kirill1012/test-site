import Typography from "../Typography"
import BaseElement from "../BaseElement"

class ButtonElement extends BaseElement {
  title = null

  get element() {
    return this.$element
  }

  constructor({
    title,
    className = "",
    onClick
  }) { 
    super({
      elementType: "button",
      className,
      onClick,
    })

    this._create(title)
  }

  _create = (title) => {
     this.title = new Typography({
      text: title,
      className: "typography"
    })

    this.$element?.appendChild(this.title.render())

    return this
  }
}

export default ButtonElement