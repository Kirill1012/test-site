import BaseElement from "../BaseElement"

class TypographyElement extends BaseElement {
  constructor({
    text,
    className = "",
    onClick,
  }) {
    super({
      elementType: "p",
      className,
      onClick,
    })
    
    this._create(text)
  }

  _create = (title) => {
    if (this.$element) {
      this.$element.innerText = title
    }

    return this
  }

}

export default TypographyElement