import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'

function App() {

  const [theme, setTheme] = useState("light")
  const [alert, setAlert] = useState(null)

  const changeTheme = (newTheme) => {
    setTheme(newTheme)
  }

  useEffect(() => {

    if (theme === "dark") {
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }

    else if (theme === "blue") {
      document.body.style.backgroundColor = "#0d47a1"
      document.body.style.color = "white"
    }

    else if (theme === "yellow") {
      document.body.style.backgroundColor = "#fff3cd"
      document.body.style.color = "black"
    }

    else {
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }

  }, [theme])


  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000)

  }


  return (
    <Router>

      <Navbar
        title="TextUtils"
        aboutText="About Us"
        theme={theme}
        changeTheme={changeTheme}
      />

      {/* Alert */}
      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.msg}
        </div>
      )}

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <TextForm
              heading="Enter the text"
              showAlert={showAlert}
            />
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </Router>
  )
}

export default App