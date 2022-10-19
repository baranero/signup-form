import React from "react";

export default function Form() {

  const [formData, setFormData] = React.useState(
    {
      email: "",
      password: "",
      confirmPassword: "",
      newsletter: false
    }
  )

  function handleChange(event) {
    setFormData(prevFormData => {
      const {name, value, type, checked} = event.target
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

 
  function handleSubmit(event) {
      event.preventDefault()
      if (formData.password === formData.confirmPassword) {
        console.log("Successfully signed up!", formData)
      } else {
        console.log("Passwords not to match!")
        return
      }
      if (formData.newsletter === true) {
        console.log("Thanks for signing up for our newsletter")
      }
  }

  const [alertMessage, setAlertMessage] = React.useState("")

  function signalWrongPassword() {
    let wrongPassword = document.getElementsByClassName("form-input")[2];
    if (formData.password != formData.confirmPassword){
      wrongPassword.classList.toggle("form-input-confirm-password")
      setAlertMessage("Incorrectly confirmed password")
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          placeholder="E-Mail"
        />

        <input
          className="form-input"
          type="password"
          value={formData.password}
          onChange={handleChange}
          name="password"
          placeholder="Password"
        />

        <input
          className="form-input"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          placeholder="Confirm password"
        />
        <p className="alert-message">{alertMessage}</p>
        <div className="form-newsletter">
          <input
            type="checkbox"
            value={formData.newsletter}
            onChange={handleChange}
            name="newsletter"
            id="newsletter"
            checked={formData.newsletter}
          />
          <label htmlFor="newsletter">I want to join the newsletter</label>
        </div>
        <button onClick={signalWrongPassword} className="form-submit-button">Sign up</button>
      </form>
    </div>
  )
}