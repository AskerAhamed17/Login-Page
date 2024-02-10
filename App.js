import './App.css';
import { useState } from 'react';

function App() {

    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: '',
        city: ''
    })
    const [invalid, setInvalid] = useState(false)

    const handlesubmit = () => {
        if (userDetails.name === '' ||
            userDetails.email === '' ||
            userDetails.password === ''||
            userDetails.city === '') {
            setInvalid(true)
        }
        else {
            setInvalid(false)
            setUserDetails({
                ...userDetails,
                name : '',
                email : '',
                password : '',
                city : ''
            })
        }
    }

    console.log(invalid)

    const handleClear = () => {
        setUserDetails({
            ...userDetails,
            name : '',
            email : '',
            password : '',
            city : ''
        })
    }

    return (
        <div className='app'>
            <div className='login-form'>
                <label>Name</label>
                <input type='text' placeholder='Enter your name' value={userDetails.name} onChange={(event) => setUserDetails({ ...userDetails, name: event.target.value })} />
                {invalid ? <p id='invalid-alert'>Please enter valid name !</p> : null}
                <label>Email</label>
                <input type='email' placeholder='Enter your email' value={userDetails.email} onChange={(event) => setUserDetails({ ...userDetails, email: event.target.value })} />
                {invalid ? <p id='invalid-alert'>Please enter valid email !</p> : null}
                <label>Password</label>
                <input type='password' placeholder='Enter your password' value={userDetails.password} onChange={(event) => setUserDetails({ ...userDetails, password: event.target.value })} />
                {invalid ? <p id='invalid-alert'>Please enter valid password !</p> : null}
                <label>City</label>
                <input type='text' placeholder='Enter your city' value={userDetails.city} onChange={(event) => setUserDetails({ ...userDetails, city: event.target.value })} />
                {invalid ? <p id='invalid-alert'>Please enter valid city !</p> : null}
                <div className='login-form-buttons'>
                    <button onClick={handleClear}>Clear Form</button>
                    <button onClick={handlesubmit} >Submit</button>
                </div>
            </div>
        </div>
    )
}

export default App