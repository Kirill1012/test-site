import Typography from "../Typography"

class BaseElement {
  $element = null
  listenerClick = null

  constructor({
    elementType,
    className = "",
    onClick
  }) { 
    this._createElement(elementType)
      ._addClass(className)
      ._addClickListtener(onClick)
  }

  _createElement = (elementType) => {
    this.$element = document.createElement(elementType)

    return this
  }

  _addClickListtener = (clickCallback) => {
    if (clickCallback) {
      this.listenerClick = clickCallback

      this.$element?.addEventListener("click", this.listenerClick)
    }
  }

  _removeClickListtener = () => {
    if (this.listenerClick) {
      this.$element?.removeEventListener("click", this.listenerClick)
    }
  }

  _addClass = (className) => {
    if (className) {
      this.$element?.setAttribute("class", className)
    }

    return this
  }

  render = () => {
    return this.$element
  }

  destroy = () => {
    this._removeClickListtener()
    this.$element?.remove()
    this.$element = null
  }
}

export default BaseElement