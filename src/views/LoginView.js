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
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='register-btn-flexbox-container'>
                    <table className='center'>
                        <tbody>
                            <tr>
                                <label>Username </label>
                                <input type="text" name="username" className="form-control"
                                    onChange={handleChange}
                                    required />
                            </tr>
                            <tr>
                                <label>Password</label>
                                <input type="password" name="password" className="form-control"
                                    onChange={handleChange}
                                    required />
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='register-btn-flexbox-container'> <button type='submit' className="btn">Login</button></div>
                <div className='register-btn-flexbox-container'><a href="/signup"> Sign-up </a></div>
            </form>
        </div>
    )
}

