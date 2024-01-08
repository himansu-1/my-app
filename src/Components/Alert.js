import React from 'react';





const Alert = (props) => {
    // const navStyle = {
    //     background: 'aqua',
    //     border: '2px solid cyan'
    // }
    return (
        props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.alert.message}</strong> : {props.alert.type}
            {/* <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span> */}
            {/* </button> */}
        </div>
    )
}


export default Alert;