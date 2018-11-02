import React, {Component} from 'react';
import axios from 'axios';
//import queryString from 'query-string';

import datos from '../estados.json';

import Add from './add';

class Index extends Component {

    state = {
        anuncios: [],
        busquedaTermino: '',
        busquedaCategoria: '',
        busquedaEstado: '',
        categorias: ['Niños y Bebes','Deportes y Tiempo Libre','Electrónica','Empleos','Inmuebles','Moda y Hogar','negocios','Servicios','Vehículos','Otros'],
        estados: datos,
        current: 1,
        limit: 20
    }

    busqueda = React.createRef();
    estado = React.createRef();
    categoria = React.createRef();



    busquedaPorTermino = () => {
        if(this.busqueda.current.value.length > 3) {
            this.setState({
                busquedaTermino: this.busqueda.current.value
            });
        } else {
            this.setState({
                busquedaTermino: ''
            });
        }
    }

    buscar = (e) => {
        e.preventDefault();
        this.setState({
            busquedaCategoria: this.categoria.current.value,
            busquedaEstado: this.estado.current.value
        });
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

            //const values = queryString.parse(this.props.location.search)
            
        }).catch(err => console.log(err))
    }

    handleClick = (event) => {
        this.setState({
            current: Number(event.target.id)
        });
    }

    render() {
        
        //let anuncios = [...this.state.anuncios];
        //let busqueda = this.state.busquedaTermino;

        //let busquedaEstado = this.state.busquedaEstado;
        //let busquedaCategoria = this.state.busquedaCategoria;
        
        
        // if(busqueda !== '') {
        //     resultado = anuncios.filter((anuncio, i) => (
        //         anuncio.body.toLowerCase().indexOf(busqueda.toLowerCase(), i) !== -1
        //     ));
        // } else {
        //     resultado = anuncios;
        // }
        
        const {current, limit} =  this.state;

        const indexOfLastTodo = current * limit;
        const indexOfFirstTodo = indexOfLastTodo - limit;
        
        const isActive = this.state.anuncios.filter(anuncio => (
            anuncio.isActive === true
        ));

        const currentTodos = isActive.slice(indexOfFirstTodo, indexOfLastTodo);
        
        const renderTodos = currentTodos.map((e, i) => {
            
            return <div key={i} className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
                        <Add datos={e} />
                    </div>;
            
            // if(busquedaEstado !== '' && busquedaCategoria !== '') {
            //     resultado = currentTodos.filter(anuncio => (
            //         anuncio.state.indexOf(busquedaEstado) !== -1 && anuncio.category.indexOf(busquedaCategoria) !== -1
            //     ));
            // } else {
            //     return resultado;
            // }
        });


        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.anuncios.length / limit); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li key={number} id={number} onClick={this.handleClick} className="page-item page-link">
                    {number}
                </li>
            );
        });

        return(
            <div>
              <div className='jumbotron jumbotron-fluid banner'>
                  <div className='container'>
                        <h1 className='display-4'>¿Qué buscas?</h1>
                        <p className='lead'>Encuentralo con nosotros.</p>
                    </div>
              </div>
                <div className='container body'>
                    {/* <nav aria-label="breadcrumb row">
                        <form onSubmit={this.buscar} action='/' method='get' className="form-inline search">
                            <input onChange={this.busquedaPorTermino} ref={this.busqueda} type="text" className="form-control mb-4 mr-sm-3 mr-md-3 col-xs-12 col-md-12" placeholder="Palabras clave" />
                            <select ref={this.categoria} className="form-control mb-2 mr-md-3 col-xs-12 col-sm-12 col-md-4">
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
                            <select ref={this.estado} className="form-control mb-2 mr-sm-3 mr-md-3 col-xs-12 col-sm-12 col-md-4">
                              {Object.keys(this.state.estados).map((e, i) => (
                                    <option key={i} value={e}>{e}</option>
                                ))}
                            </select>
                            <button type="submit" className="btn btn-danger mb-2 col-xs-12 col-sm-12 col-md-3">Buscar</button>
                        </form>
                    </nav> */}
                    <div className='row'>
                        {/* {resultado.map((e,i) => (
                            <div key={i} className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
                                    <Add datos={e} />
                            </div>
                        ))} */}
                        {renderTodos !== null ? renderTodos : 'hola'}
                    </div>
                    <div className='row body pagination'>
                        <div className='col-xs-12'>
                            <nav aria-label="...">
                                <ul className="pagination">
                                    {renderPageNumbers}
                                    {/* <li className="page-item disabled">
                                        <a className="page-link" href="#!" tabIndex={-1}>Anterior</a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#!">1</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#!">2 </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#!">Siguiente</a>
                                    </li> */}
                                </ul>
                            </nav>    
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Index;