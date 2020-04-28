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
    
    handleClick = (e)=>{
        console.log('Carlos eres el puto amo')
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log('form was submitted')
    }

    render(){
        return (
            <React.Fragment>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="firstName"
                        value={this.props.formValues.firsName}
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
                        <label>Jop Title</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="jopTitle"
                        value={this.props.formValues.jopTitle}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Website</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="website"
                        value={this.props.formValues.website}
                        ></input>
                    </div>
                    

                    <button onClick={this.handleClick}
                    className = "btn btn-primary"
                    >Save</button>
                </form>
            </React.Fragment>

        )
    }
}

export default BadgeForm