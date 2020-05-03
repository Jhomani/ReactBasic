import React from 'react'
import './styles/BadgesList.css'
import { Link } from 'react-router-dom'
import Gravatar from './Gravatar'

class BadgesList extends React.Component{
    render(){
        if(this.props.badges.length === 0){
            return (
                <div className="Badges__container">
                    <h3>No badges were found</h3>
                    <Link to="badges/new" className="btn btn-primary">Creade new badge</Link>
                </div>
            )
        }
        return(

            <div className="Badges__list">
            <div className="Badges__container">
                <ul>
                    {this.props.badges.map(item => {    
                        return(
                            <li className="item" key={item.id} >
                                <Link className="text-reset text-decoration-none Badges__item" to={`badges/${item.id}`}>
                                    <div className="Badges__img">
                                        <Gravatar email={item.email} alt="avatar" />
                                    </div>
                                    <div className="Badges__data">
                                        <p className="Badges__data-name">{item.firstName} {item.lastName}</p>
                                        <span >@{item.twitter}</span>
                                        <p>{item.jobTitle}</p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        )
    }
}

export default BadgesList; 