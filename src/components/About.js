import React from 'react'

export default function About() {
  return (
    <div className="container my-5">

      <div className="card">
        <div className="card-body">

          <h2 className="card-title">About TextUtils</h2>

          <p className="card-text">
            TextUtils is a simple text utility application that helps you
            analyze and modify your text easily.
          </p>

          <p className="card-text">
            You can convert text to uppercase or lowercase, clear the text,
            extract emails, and view a summary of your text.
          </p>

          <h5>Features</h5>

          <ul>
            <li>Convert text to Uppercase</li>
            <li>Convert text to Lowercase</li>
            <li>Clear text</li>
            <li>Extract emails from text</li>
            <li>Count words and characters</li>
          </ul>

        </div>
      </div>

    </div>
  )
}