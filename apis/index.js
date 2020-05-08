import React from 'react'
import ReactDOM from 'react-dom'

const api = document.getElementById('api');

class App extends React.Component{
  state = {
    nextPage:1,
    loading:true,
    error:null,
    data:{
      results:[]
    }
  }

  componentDidMount(){
    this.fetchCharacters();
  }
  
  async fetchCharacters(){
    this.setState({loading:true, error:null})
    
    try{
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
      const data = await response.json()
      
      this.setState({
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        loading: false,
        nextPage: this.state.nextPage +1,
      })
    } catch(error){
      this.setState({
        error:error,
        loading:false,
      })
    }

  }

  render(){
    if(this.state.error){
      return`Error ${this.state.error.message}`
    }

    return (
      <div>
        <ul className="unorder">
          {this.state.data.results.map(api=>(
            <li key= {api.id}>
              <h3>{api.name}</h3>
              <img src={api.image} />
            </li>))}
        </ul>

        {this.state.loading && (
          <h1>Esta Cargando perro</h1>
        )}

        {!this.state.loading && (
          <button className="n" onClick={()=>this.fetchCharacters()} >Load More</button>
        )}
      </div>
    )
  }
}

ReactDOM.render(<App /> , api)