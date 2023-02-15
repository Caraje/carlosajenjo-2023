import React from 'react'
import style from 'src/styles/Contact.module.css'
import uiWeb from '../../data/uiWeb.json'

const Contact = ({ dialog }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ event })
    console.log(event.target.name.value)
    console.log(event.target.email.value)
    console.log(event.target.question.value)
    dialog.current.close()
  }
  return (
    <section className={style.contactContainer}>
      <h1 className={style.contactTitle}>{uiWeb.es_ES.contact.titles}</h1>
      <form onSubmit={handleSubmit} className={style.contactForm}>
        <label className={style.contactLabel}>
          {uiWeb.es_ES.contact.form.name}
          <input
            name='name'
            className={style.contactInput}
            placeholder={uiWeb.es_ES.contact.form.placeHolderName}
          />
        </label>
        <label className={style.contactLabel}>
          {uiWeb.es_ES.contact.form.email}
          <input
            type='email'
            name='email'
            className={style.contactInput}
            placeholder={uiWeb.es_ES.contact.form.placeHolderEmail}
          />
        </label>
        <label className={style.contactLabel}>
          {uiWeb.es_ES.contact.form.question}
          <textarea
            name='question'
            className={style.contactTextArea}
            placeholder={uiWeb.es_ES.contact.form.placeHolderQuestion}
          />
        </label>
        <button className={style.btnSend}>
          {uiWeb.es_ES.contact.buttons.send}
        </button>
      </form>
      <button
        type='submit'
        className={style.btnClose}
        onClick={() => {
          dialog.current.close()
        }}
      >
        X
      </button>
    </section>
  )
}

export default Contact
