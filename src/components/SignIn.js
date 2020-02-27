import React from 'react'
import { connect } from 'react-redux'

const SignIn  = props => {
    return (
        <>
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