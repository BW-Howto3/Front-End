import React from 'react'

const Header = props => {
    return (
        <>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        user: state.user,
        error: props.error
    }
}

export default (mapStateToProps, {})(Header)