import React from "react";
import PropTypes from 'prop-types'
import { ProgressSpinner } from 'primereact/progressspinner'
import './loader.scss'

function Loader(message) {
    return(
        <div className="row loader" data-testid='loader'>
            <div className="col-12">
                <div className="d-flex align-item-center p-2">
                    <ProgressSpinner className="p-2" />
                    <p className="gray-text p-2 loader-message align-items-center">
                        {message}...
                    </p>
                </div>
            </div>
        </div>
    )  
}
 
Loader.protoType = {
    message:PropTypes.string
}
Loader.defaultProps = {
    message:'Loader'
}

export default Loader
