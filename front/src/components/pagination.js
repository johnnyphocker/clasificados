import React, {Component} from 'react';
//import {NavLink} from 'react-router-dom';

class Pagination extends Component {

    state = {
        current: 1,
        limit: 10
    }

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {

        const {current, limit} =  this.state;

        const indexOfLastTodo = current * limit;
        const indexOfFirstTodo = indexOfLastTodo - limit;
        const currentTodos = this.props.anuncios.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderTodos = currentTodos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.anuncios.length / limit); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li key={number} id={number} onClick={this.handleClick}>
                    {number}
                </li>
            );
        });


        return(
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
        )
    }

}

export default Pagination;