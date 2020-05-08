import React from 'react';
import { Link } from 'react-router-dom'
import Badge from '../components/Badge'
import logoConf from '../images/platziconf-logo.svg'
import './style/BadgeDetails.css'
import DeleteBadgeModal from '../components/DeleteBadgeModal';


// function useIncreaseCount(max){
//     const [state, setState] = React.useState(0);

//     if(state > max){
//         setState(0)
//     }

//     return [state, setState]
// }

const BadgeDetails = (props) => {
    // const [state, setState] = useIncreaseCount(4);
    
    const data = props.badge;
    
    const {firstName, lastName, email, twitter, jobTitle, id} = data
    
    return (

            <div>
                <div className ="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={logoConf} alt="logo de la conferencia" />
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name ">
                                <h1>{firstName} {lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName = {firstName}
                                lastName ={lastName}
                                twitter = {twitter}
                                email = {email}
                                jobTitle = {jobTitle}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>

                            <div>
                                {/* <button onClick={()=>{setState(state+1)}} className="btn btn-primary mr-4">Increase Count: {state}</button> */}
                                <Link className="btn btn-primary mb-4" to={`/badges/${id}/edit`}>Edit</Link>
                            </div>
                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger ">Delete</button>
                                <DeleteBadgeModal 
                                isOpen={props.modalIsOpen} 
                                onClose = {props.onCloseModal}
                                onDeleteBadge = {props.onDeleteBadge}
                                />,
                            </div>

                        </div>
                    </div>
                </div>
            </div>            
    );
}

export default BadgeDetails;