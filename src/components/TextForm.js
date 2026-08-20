import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Text converted to Uppercase", "success")
  }

  const handleloClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Text converted to Lowercase", "success")
  }

  const handleClearClick = () => {
    setText("")
    props.showAlert("Text has been cleared", "success")
  }

  const handleEmailExtract = () => {
    const foundEmails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g)

    setEmails(foundEmails || [])

    if (foundEmails) {
      props.showAlert("Emails extracted successfully", "success")
    } else {
      props.showAlert("No email found", "checked")
    }
  }

  const handleOnchange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState("")
  const [emails, setEmails] = useState([])

  return (
    <>
      <div className="container">

        <h2>{props.heading}</h2>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="3"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-3" onClick={handleloClick}>
          Convert to LowerCase
        </button>

        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear the Text
        </button>

        <button className="btn btn-primary mx-3" onClick={handleEmailExtract}>
          Email Extractor
        </button>

      </div>

      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>
          <b>
            {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
            words and {text.length} characters
          </b>
        </p>
      </div>

      <div className="container my-3">
        <h3>Extracted Emails</h3>

        {emails.length > 0 ? (
          emails.map((email, index) => (
            <p key={index}>{email}</p>
          ))
        ) : (
          <p>No emails found</p>
        )}
      </div>
    </>
  )
}