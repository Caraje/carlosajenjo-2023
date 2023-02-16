import { LangContext } from 'context/LangContext'
import React, { useContext, useState } from 'react'
import style from 'src/styles/Contact.module.css'
import uiWeb from '../../data/uiWeb.json'
import emailjs from '@emailjs/browser'

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY

const Contact = ({ dialog }) => {
  const { lang } = useContext(LangContext)
  const [isDisabled, setIsDisabled] = useState(false)
  const UiLang = lang === 'es-ES' ? uiWeb.es_ES : uiWeb.en_EN

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsDisabled(true)
    let templateParams = {
      to_name: event.target.name.value,
      reply_to: event.target.email.value,
      message: event.target.question.value
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      (response) => {
        console.log(response)
        if (response.text === 'OK') {
          dialog.current.close()
          setIsDisabled(false)
        }
      },
      (err) => {
        console.log('FAILED...', err)
        setIsDisabled(false)
      }
    )
  }

  return (
    <>
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
          <button
            disabled={isDisabled}
            className={isDisabled ? style.btnDisabled : style.btnSend}
          >
            {UiLang.contact.buttons.send}
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
    </>
  )
}

export default Contact
