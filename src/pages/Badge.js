import React from 'react'
import './style/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import { Link } from 'react-router-dom'
import api from '../api'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

class Badge extends React.Component{
    state = {
            data:undefined,
            loading:true,
            error: null,
        }

    componentDidMount(){
        this.fetchData();

        this.intervalId = setInterval(this.fetchData, 5000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    fetchData = async () =>{
        this.setState({loading:true, error:null})
        
        try{
            const data= await api.badges.list();
            this.setState({data:data, loading:false})
        } catch(err){
            this.setState({error:err, loading:false})
        }
    }

    // componentDidUpdate(prevProps, prevState){
    //     console.log(`5. componetDidUpdate()`)

    //     console.log({
    //         prevProps: prevProps,
    //         prevState:prevState,
    //     })

    //     console.log({
    //         props:this.props,
    //         state: this.state,
    //     })
    // }

    // componentWillUnmount(){
    //     console.log(`6. y se marcho...`)
    //     clearTimeout(this.timeoutID);
    // }

    render(){
        if(this.state.loading ===true && !this.state.data){
            return <PageLoading />
        }
        
        if(this.state.error){
            return <PageError error={this.state.error}/>
        }
        return( 
            <React.Fragment>                
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="logo" />
                        </div>
                    </div>
                </div>
        
                <div className="Badge__conteiner">
                    <div className="Badges__buttons">
                        <Link to="badges/new" className="btn btn-primary"> New Badge</Link>
                    </div>
                </div>

                <BadgesList badges={this.state.data}/>

                {this.state.loading && 'loading...'}
            </React.Fragment>
        )
    }
}

export default Badge;