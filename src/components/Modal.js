import React from 'react';
import FormOutput from "./FormOutput";

function Modal () {

  function closeModal (e) {
    e.target.parentElement.parentElement.parentElement.parentElement.remove()
  }

  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="between pb-24">
          <h1>Оставить заявку на участие</h1>
          <div className="close-button" onClick={ closeModal }>
            <span className="block">╳</span>
          </div>
        </div>
        <h2 className="mv-24">Оставьте заявку на участие и мы с вами свяжемся, как только подберем подходящий вариант</h2>
        <FormOutput options={['Английский', '8 класс', '13:00 - 17:00']} outputStyle={true} />
        <div className="contact-form mv-24 between">
          <div className="flex-grow mr-16">
            <h2>Как к вам обратиться</h2>
            <div className="contact-input-wrapper">
              <input type="text" placeholder="Ваше имя" className="contact-input"/>
            </div>
          </div>
          <div className="flex-grow">
            <h2>Контактные данные</h2>
            <div className="contact-input-wrapper">
              <input type="text" placeholder="Телефон/email" className="contact-input"/>
            </div>
          </div>
        </div>
        <div className="request-button m-0">
          <span>Оставить заявку →</span>
        </div>
      </div>
    </div>
  )
}

export default Modal;