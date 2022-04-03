import React, { useState } from 'react';
import Auth from '../components/Auth'
import axios from 'axios';

export const LoginView = () => {


    const emptyForm = {
        username: '',
        password: '',
    }

    const [form, setForm] = useState(emptyForm);
    const [loadingUser, setLoadingUser] = useState(true);

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

        axios.post('http://surveymeanbackend.herokuapp.com/users/signin', form)
            .then(response => {

                if (response.data.success == true) {
                    //alert(response.data.token)
                    //alert("Success")
                    localStorage.setItem('token', response.data.token);
                    window.location.replace("/");
                }
            })
            .catch(error => {
                alert("Error: " + error.message)
            })
    }

    return (
        <form onSubmit={handleSubmit} action="#" className='container'>
            <div className="form-group">
                <label>Username:</label>
                <input type="text" name="username" className="form-control"
                    onChange={handleChange}
                    required />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" name="password" className="form-control"
                    onChange={handleChange}
                    required />
            </div>
            <button type='submit' className="btn">
                Login
            </button>
            <div className="form-group signupBtn">
                <a href="/signup">
                    Sign-up
                </a>
            </div>
        </form>
    )


}

