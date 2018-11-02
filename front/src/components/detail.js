import React, {Component} from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

class Detail extends Component {

    state = {
        anuncios: []
    }

    componentDidMount() {
        axios.get('http://localhost:3000/')
        .then(res => {
            const anuncios = [...this.state.anuncios];
            for(let i = 0; i < res.data.add.length; i++) {
                anuncios.push(res.data.add[i])
            }
            
            this.setState({
                anuncios
            });
            
        }).catch(err => console.log(err))
    };

    render() {        
    
        const id = this.props.location.pathname.replace('/anuncio/','');

        const anuncio = this.state.anuncios.filter(add => (
            add._id === id
        ));

        let add = [];
        for(let i = 0; i < anuncio.length; i++) {
            add.push(anuncio[i]) 
        }
        if(add[0] !== undefined) {
            var {body, title, phone, name, email, category, state} = add[0];
        }

        return(
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={'/'}>Inicio</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">El anuncio</li>
                    </ol>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-7">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">{title}</h4>
                                    <p className="card-text">
                                    {body}
                                    </p>
                                </div>
                                <h6><span className="badge badge-secondary">{category}</span></h6>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-5">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Nombre:</h4>
                                    <p className="card-text">
                                    {name}
                                    </p>
                                    <h4 className="card-title">Teléfono:</h4>
                                    <p className="card-text">
                                    {phone}
                                    </p>
                                    <h4 className="card-title">Email:</h4>
                                    <p className="card-text">
                                    {email}
                                    </p>
                                    <h4 className="card-title">Estado:</h4>
                                    <p className="card-text">
                                    {state}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail;