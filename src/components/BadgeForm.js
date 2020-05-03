import React from 'react'

class BadgeForm  extends React.Component{
    // state={
    //     jobTitle:'disagner'
    // };
    
    // handleChange = (e)=>{
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value})
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }
    
    // handleClick = (e)=>{
    //     console.log('Carlos eres el puto amo')
    // }

    // handleSubmit = (e)=>{
    //     e.preventDefault();
    //     console.log('form was submitted')
    // }

    render(){
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="firstName"
                        value={this.props.formValues.firstName}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="lastName"
                        value={this.props.formValues.lastName}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>email</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="email"
                        name="email"
                        value={this.props.formValues.email}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="jobTitle"
                        value={this.props.formValues.jobTitle}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="twitter"
                        value={this.props.formValues.twitter}
                        ></input>
                    </div>
                    

                    <button onClick={this.props.onSudmit}
                    className = "btn btn-primary"
                    >Save</button>

                    {this.props.error && (<p className="text-danger">{this.props.error.message}</p>)}
                </form>
            </React.Fragment>

        )
    }
}

export default BadgeForm