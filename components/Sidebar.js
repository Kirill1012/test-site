 import Typography from "../elements/Typography"

 class Sidebar {
    $element = null

    constructor({
        title = "Категории",
        items = []
    }) {
        this._create(title,items)
    }
    _create = (title,items) => {
        const $sidebar = document.createElement("aside")
        $sidebar.className = "sidebar"

        const $title = new Typography({
            text: title,
            className: "sidebar-list"
        }).render()

        const $list = document.createElement("ul")
        $list.className = "sidebar-list"

        items.forEach(item => {
            const $li = document.createElement("li")
            $li.className = "sidebar-item"
            $li.textContent = item.text
            $list.appendChild($li) 
        })

        $sidebar.appendChild($title)
        $sidebar.appendChild($list)

        this.$element = $sidebar
    }

    render = () => {
        return this.$element
    }
 }



 export default Sidebar