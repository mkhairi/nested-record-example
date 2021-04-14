import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["add_item", "template", "record"]

  connect(){
    console.log('connect nested form controller')
    this.recordLimit = parseInt(this.data.get("limit"))
  }

  addAssociation(event) {
    event.preventDefault()

    const randomNumber = new Date().getTime()
    const content =
      this.templateTarget.innerHTML.replace(/TEMPLATE_RECORD/g, randomNumber)

    this.add_itemTarget.insertAdjacentHTML("beforebegin", content)

    if (this.reachedLimit()) {
      this.add_itemTarget.style.display = "none"
    }
  }

  addAssociationChild(event) {
    event.preventDefault()

    const randomNumber = new Date().getTime()
    const content =
      this.templateTarget.innerHTML.replace(/TEMPLATE_CHILD/g, randomNumber)

    this.add_itemTarget.insertAdjacentHTML("beforebegin", content)

    if (this.reachedLimit()) {
      this.add_itemTarget.style.display = "none"
    }
  }

  removeAssociation(event) {
    event.preventDefault()

    const wrapper = event.target.closest(".nested-fields")

    if (wrapper.dataset.newRecord == "true") {
      wrapper.remove()
    } else {
      this.markElementRemoved()

      wrapper.style.display = "none"
      wrapper.classList.add('hidden')
    }

    if (!this.reachedLimit()) {
      this.add_itemTarget.style.display = "initial"
    }
  }

  markElementRemoved() {
    const wrapper = event.target.closest(".nested-fields")
    const destroyElem = wrapper.querySelector("input[name*='_destroy']")
    const discardedElem = wrapper.querySelector("input[name*='discarded_at']")

    if (destroyElem) {
      destroyElem.value = 1
    }

    if (discardedElem) {
      discardedElem.value = new Date(Date.now()).toISOString()
    }
  }

  reachedLimit (){
    const records = this.element.querySelectorAll('.nested-fields:not(.hidden)')
    return (this.recordLimit === records.length)
  }
}
