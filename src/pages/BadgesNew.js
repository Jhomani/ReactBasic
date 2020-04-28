import React from 'react';

import './style/BadgesNew.css'
import logo from '../images/badge-header.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'


class BadgesNew extends React.Component {
    state = {
        form: {
            firstName:'',
            lastName:'',
            email:'',
            jopTitle:'',
            website:'',
        }
    }

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]:e.target.value,
            }
        })
    }
        
    render(){
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className=" img-fluid" src={logo} alt="log" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName ={this.state.form.firstName}
                                lastName ={this.state.form.lastName}
                                website={this.state.form.website}
                                jobTitle = {this.state.form.jopTitle}
                                email= {this.state.form.email}
                                avatar ="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className ="col-6">
                            <BadgeForm
                            onChange ={this.handleChange}
                            formValues= {this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgesNew;