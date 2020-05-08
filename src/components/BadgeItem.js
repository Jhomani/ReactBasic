import React from 'react';
import Gravatar from './Gravatar'
import './styles/BadgesList.css'


const BadgeItem = (props) => {
    return (
        <React.Fragment>
            <div className="Badges__img">
                <Gravatar email={props.badge.email} alt="avatar" />
            </div>
            <div className="Badges__data">
                <p className="Badges__data-name">{props.badge.firstName} {props.badge.lastName}</p>
                <span >@{props.badge.twitter}</span>
                <p>{props.badge.jobTitle}</p>
            </div>
        </React.Fragment>
    );
}

export default BadgeItem;