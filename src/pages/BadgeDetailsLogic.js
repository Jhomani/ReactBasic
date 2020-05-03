import React from 'react';
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import BadgeDetails from './BadgeDetails'
import api from '../api'

class BadgeDetailsLogic extends React.Component {
    state ={
        loading: false,
        error: null,
        data:{
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            twitter:'',
        },
    }
    
    componentDidMount (){
        this.fetchData()
    }

    fetchData = async ()=>{
        this.setState({loading:true, error:null})
        try{
            const data = await api.badges.read(this.props.match.params.badgeId); 
            this.setState({loading:false, error:null, data: data})
        }catch (err){
            this.setState({loading:false, error:err})
        }
    }

    render() {

        if(this.state.loading){
            return <PageLoading />
        }
        if(this.state.error){
            return <PageError error = {this.state.error} />
        }
        return (
            <BadgeDetails badge = {this.state.data}/>
        );
    }
}

export default BadgeDetailsLogic;