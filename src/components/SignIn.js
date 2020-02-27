import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

const SignIn  = props => {
    const[user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        console.log(user)
    }, [user])
    return (
        <>
            <form onSubmit={ e => {
                e.preventDefault()
            }}>
                <label>Username</label>
                <input
                    name="username"
                    value={user.username}
                    onChange={e => handleChange(e)}
                ></input>
                <label>Password</label>
                <input
                    name="password"
                    value={user.password}
                    onChange={e => handleChange(e)}
                ></input>
                <button 
                    type="submit"   
                >Sign In</button>
                <button
                    onClick={ e => console.log("register")}
                >Register</button>  
            </form>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        user: state.user,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(SignIn)