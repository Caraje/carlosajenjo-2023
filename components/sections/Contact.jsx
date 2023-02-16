import { LangContext } from 'context/LangContext'
import React, { useContext } from 'react'
import style from 'src/styles/Contact.module.css'
import uiWeb from '../../data/uiWeb.json'

const Contact = ({ dialog }) => {
  const { lang } = useContext(LangContext)
  const UiLang = lang === 'es-ES' ? uiWeb.es_ES : uiWeb.en_EN

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
      <h1 className={style.contactTitle}>{UiLang.contact.titles}</h1>
      <form onSubmit={handleSubmit} className={style.contactForm}>
        <label className={style.contactLabel}>
          {UiLang.contact.form.name}
          <input
            name='name'
            className={style.contactInput}
            placeholder={UiLang.contact.form.placeHolderName}
          />
        </label>
        <label className={style.contactLabel}>
          {UiLang.contact.form.email}
          <input
            type='email'
            name='email'
            className={style.contactInput}
            placeholder={UiLang.contact.form.placeHolderEmail}
          />
        </label>
        <label className={style.contactLabel}>
          {UiLang.contact.form.question}
          <textarea
            name='question'
            className={style.contactTextArea}
            placeholder={UiLang.contact.form.placeHolderQuestion}
          />
        </label>
        <button className={style.btnSend}>{UiLang.contact.buttons.send}</button>
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
