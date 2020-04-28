import React from 'react'
import './styles/BadgesList.css'
import { Link } from 'react-router-dom'


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
                    {this.props.badges.map((item) => {    
                        return(
                            <li className="Badges__item" key={item.id} >
                                <div className="Badges__img">
                                    <img src={item.avatarUrl} alt="avatar" />
                                </div>
                                <div className="Badges__data">
                                    <p className="Badges__data-name">{item.firstName} {item.lastName}</p>
                                    <a href="/">@{item.twitter}</a>
                                    <p>{item.jobTitle}</p>
                                </div>
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