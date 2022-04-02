import React, { useState } from 'react';
import Auth from '../components/Auth'
import axios from 'axios';
import { Alert } from 'bootstrap';


export const SignupView = () => {

    const emptyForm = {
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }

    const [confirmPassword, setConfirmPassword] = useState({ confirmPassword: '' });

    const [form, setForm] = useState(emptyForm);

    const handleChange = (evt) => {
        const value = evt.target.value;

        setForm({
            ...form,
            [evt.target.name]: value
        });
        console.log(form)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (form.password == confirmPassword) {
            // send a POST request
            axios.post('https://surveymeanbackend.herokuapp.com/users/signup', form)
                .then(response => {

                    console.log(response)
                    if (response.success == true) {
                        alert("Success")
                        window.location.replace("/login");

                    }
                })
                .catch(error => {
                    alert("Error: " + error.message)
                })
        }
        else {
            alert("Passwords do not match")
        }

    }

    return (<div>
        <form onSubmit={handleSubmit} className="main-block login-container" >
            <div className="form-group">
                <label>Username:</label>
                <input type="text" name="username" className="form-control"
                    onChange={handleChange}
                    required />
            </div>
            <div className="form-group">
                <label>E-mail:</label>
                <input type="email" name="email" className="form-control"
                    onChange={handleChange}
                    required />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" name="password" className="form-control"
                    onChange={handleChange}
                    required />
            </div>
            <div className="form-group">
                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" className="form-control"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required />
            </div>
            <div className="form-group">
                <label>First Name:</label>
                <input type="text" name="firstName" className="form-control"
                    onChange={handleChange}
                    required />
            </div>

            <div className="form-group">
                <label>Last Name:</label>
                <input type="text" name="lastName" className="form-control"
                    onChange={handleChange}
                    required />
            </div>


            <div className="form-group">
                <button type='submit' className="submitButton buttonLog">
                    Register
                </button>
            </div>

        </form>

    </div>);

}
