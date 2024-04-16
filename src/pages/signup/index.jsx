import { React, useState } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"
import "./index.less"

const SignUp = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({ username: "", password: "" })
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.username.trim() === "" || formData.password.trim() === "") {
      setErrorMessage("Please enter both username and password.")
    } else {
      if (formData.username === "admin" && formData.password === "admin123") {
        // alert("Login successful!")
        navigate('/')
      } else {
        setErrorMessage("Invalid username or password.")
      }
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Login</h1>
        <TextField
          name="username"
          label="Username"
          variant="outlined"
          margin="normal"
          value={formData.username}
          onChange={handleInputChange}
          style={{ width: "100%" }}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={formData.password}
          onChange={handleInputChange}
          style={{ width: "100%" }}
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="btn"
        >
          Login
        </Button>
      </form>
    </div>
  )
}

export default SignUp
