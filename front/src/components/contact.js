import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class Contact extends Component {

    render() {
        return(
            <section>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={'/'}>Inicio</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">El anuncio</li>
                    </ol>
                </nav>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-12'>
                            <form action="/send-email" method="post">
                                <label for="">Email</label>
                                <input type="email" name="email" id="" />
                                <label for="">Subject</label>
                                <input type="text" name="subject" id="" />
                                <label for="">Message</label>
                                <textarea type="text" name="message" id=""></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Contact;