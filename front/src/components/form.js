import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import datos from '../estados.json';

import axios from 'axios';

class Form extends Component {

    state = {
        estados: datos,
        nombre: '',
        email: '',
        estado: '',
        telefono: '',
        titulo: '',
        cuerpo: '',
        categoria: ''
    }

    nombre = React.createRef();
    titulo = React.createRef();
    categoria = React.createRef();
    cuerpo = React.createRef();
    email = React.createRef();
    telefono = React.createRef();
    estado = React.createRef();

    handleChange = event => {
        this.setState({
            nombre: this.nombre.current.value,
            titulo: this.titulo.current.value,
            categoria: this.categoria.current.value,
            cuerpo: this.cuerpo.current.value,
            email: this.email.current.value,
            telefono: this.telefono.current.value,
            estado: this.estado.current.value
        });
    }

    post = (e) => {
        e.preventDefault();
        
        // let nombre = this.nombre.current.value;
        // let titulo = this.titulo.current.value;
        // let categoria = this.categoria.current.value;
        // let cuerpo = this.cuerpo.current.value;
        // let email = this.email.current.value;
        // let telefono = this.telefono.current.value;
        // let estado = this.estado.current.value;

        let {nombre, titulo, categoria, cuerpo, email, telefono, estado} = this.state
        
        axios.post('http://localhost:3000/formulario', {name:nombre, title: titulo, category: categoria, body: cuerpo, email, phone: telefono, state: estado})
            .then(res => {
                console.log(res)
            });
            // setTimeout(()=> {
            //     this.props.history.goBack(30)
            // }, 4000);
            this.props.history.goBack(30)
    }  


    render() {
        
        return(
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={'/'}>Inicio</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Crea tu anuncio clasificado</li>
                    </ol>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="offset-md-2 col-xs-12 col-md-8">
                            <form onSubmit={this.post} className="post pt-5 pb-5" action='/formulario' method='post'>
                                <div className="form-group">
                                    <label>Nombre del titular</label>
                                    <input onChange={this.handleChange} required ref={this.nombre} name='name' type="text" className="form-control" placeholder="Nombre" />
                                </div>
                                <div className="form-group">
                                    <label>Email del titular</label>
                                    <input onChange={this.handleChange} required ref={this.email} name='email' type="text" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label>Teléfono del titular</label>
                                    <input onChange={this.handleChange} required ref={this.telefono} name='phone' type="text" className="form-control" placeholder="Teléfono" />
                                </div>
                                <div className="form-group">
                                    <label>Estado</label>
                                    <select onChange={this.handleChange} required ref={this.estado} name='state' className="form-control">
                                        {Object.keys(this.state.estados).map((e, i) => (
                                            <option key={i} value={e}>{e}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Categoría</label>
                                    <select onChange={this.handleChange} required ref={this.categoria} name='category' className="form-control">
                                        <option value='Empleos'>Empleos</option>
                                        <option value='Inmuebles'>Inmuebles</option>
                                        <option value='Vehículos'>Vehículos</option>
                                        <option value='Servicios'>Servicios</option>
                                        <option value='Moda y Hogar'>Moda y Hogar</option>
                                        <option value='Electrónica'>Electrónica</option>
                                        <option value='Deportes y Tiempo Libre'>Deportes y Tiempo Libre</option>
                                        <option value='Niños y Bebes'>Niños y Bebes</option>
                                        <option value='Otros'>Otros</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Título del clasificado</label>
                                    <input onChange={this.handleChange} required ref={this.titulo} name='title' type="text" className="form-control" placeholder="Título" />
                                </div>
                                <div className="form-group">
                                    <label>Cuerpo del clasificado</label>
                                    <textarea onChange={this.handleChange} required ref={this.cuerpo} maxLength="250" name='body' cols="30" rows="7" className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn-outline-danger btn-block" value="Enviar" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Form;