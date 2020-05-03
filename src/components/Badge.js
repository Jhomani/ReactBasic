import React from 'react';
import logoConf from '../images/badge-header.svg'
import './styles/Badges.css'
import Gravatar from '../components/Gravatar'

class Badge extends React.Component {
    
    render(){
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={logoConf} alt='Logo de conferencia'/>
                </div>

                <div className="Badge__section-name">
                    <Gravatar className = "Badge__avatar" email={this.props.email} />
                    <h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">   
                    <h5>{this.props.jobTitle}</h5>
                    <a className="Badge__ref" href={this.props.twitter}>@{this.props.twitter}</a>
                </div>
                <div className="Badge__footer">
                    #Platziconf
                </div>
            </div>
        );
    }
}

export default Badge;