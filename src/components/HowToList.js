import React, { useState, useEffect } from 'react' 
import { connect } from 'react-redux'

const HowToList = props => {
    // useEffect(() => {

    // })
    return (
        <>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLocation: state.isLocation,
        user: state.user,
        error: state.error,
        array: state.array
    }
}

export default connect(mapStateToProps, {fetchUserArray})(EmployerList)


