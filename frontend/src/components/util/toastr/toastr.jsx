import React, { Component } from 'react';
import ReduxToastr from 'react-redux-toastr'
import './toastr.css'

class Toastr extends Component {
    render() {
        return (
            <ReduxToastr
                timeout={4000}
                newestOnTop={false}
                preventDuplicates={true}
                position='top-right'
                transitionIn='fadeIn'
                transitionOut='fadeOut'
                progressBar
            />
        )
    }
}
export default Toastr;