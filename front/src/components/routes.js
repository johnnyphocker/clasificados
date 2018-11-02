import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Index from './index';
import Form from './form';
import Error from './error';
import Detail from './detail';
import Contact from './contact';

const Routes = (props) => {
    return(
        <Switch>
            <Route exact path='/' component={Index} />
            <Route path='/formulario' component={Form} />
            <Route path='/anuncio/:id' component={Detail} />
            <Route path='/contacto' component={Contact} />
            <Route component={Error} />
        </Switch>
    )
}

export default Routes