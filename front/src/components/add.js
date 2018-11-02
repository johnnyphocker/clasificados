import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';

class Add extends Component {

    render() {
        const {body,title,_id,category} = this.props.datos;
        return(
            <div className='card'>
                <div className='card-body'>
                    <h4 className='card-title'>{title}</h4>
                    <span className="badge badge-secondary">{category}</span>
                    <p className='card-text'>
                        {body.substr(0,100)}...
                    </p>
                    <div className='text-center me-interesa'>
                        <NavLink to={'/anuncio/'+_id} className='btn'>
                            Me interesa
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Add;