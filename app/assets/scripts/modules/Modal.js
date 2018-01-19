import $ from 'jquery'

class Modal {
  constructor() {
    this.openModalBtn = $(".open-modal")
    this.modal = $(".modal")
    this.closeModalBtn = $(".modal__close")
    this.events()
  }

  events() {
    // clicking the open modal btn
    this.openModalBtn.click(this.openModal.bind(this))
    // cliing the X close modal btn
    this.closeModalBtn.click(this.closeModal.bind(this))
    // pushes any key
    $(document).keyup(this.keyPressHander.bind(this))
  }
  keyPressHander(e) {
    if (e.keyCode == 27) {
      this.closeModal()
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible")
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible")
  }
}

export default Modal
