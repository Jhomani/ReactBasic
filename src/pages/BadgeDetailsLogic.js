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
        modalIsOpen:false,
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

    handleCloseModal=()=>{
        this.setState({modalIsOpen:false})
    }
    handleOpenModal=()=>{
        this.setState({modalIsOpen:true})
    }
    handleDeleteBadge = async ()=>{
        this.setState({loading:true, error:null})

        try{
            await api.badges.remove(this.props.match.params.badgeId);
            this.setState({loading:false, error:null})
            this.props.history.push('/badges')
        }catch(err){
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
            <BadgeDetails 
            badge = {this.state.data} 
            onCloseModal={this.handleCloseModal}
            modalIsOpen={this.state.modalIsOpen}
            onOpenModal={this.handleOpenModal}
            onDeleteBadge={this.handleDeleteBadge}
            />
        );
        
    }
}

export default BadgeDetailsLogic;