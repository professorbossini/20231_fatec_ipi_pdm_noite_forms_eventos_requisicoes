import Busca from "./Busca"
import React from 'react'
import env from 'react-dotenv'
// import { createClient } from "pexels"
import ListaImagens from "./ListaImagens"
import PexelsLogo from "./PexelsLogo"
import pexelsClient from "../utils/pexelsClient"

// const App = () => {
class App extends React.Component{
  
  
  state = {
    pics: []
  }
  
  // componentDidMount(){
  //   this.pexelsClient = createClient(env.PEXELS_KEY)
  // }
  
  // pexelsClient = null
  // onBuscaRealizada = (termo) => {
  //   this.pexelsClient.photos.search({
  //     query: termo
  //   })
  //   .then(pics => this.setState({pics: pics.photos}))
  // }
  onBuscaRealizada = (termo) => {
    pexelsClient.get('/search', {
      params: { query: termo, per_page: 80}
    })
    .then(result => this.setState({pics: result.data.photos}))
  }  
  render(){
    return(
      // div>h1{Exibir uma lista de...}
      <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
        <div className="col-12">
          <PexelsLogo />
        </div>
        {/* .col-12 */}
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        {/* .col-8 */}
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        {/* http://pexels.com/foto1.png => <img src="..." 
            http://pexels.com/foto2.png => <img src="..."
        */}
        <div className="col-12">
          {/* {
            this.state.pics.map(pic =>(
              <div key={pic.id}>
                <img src={pic.src.small} alt={pic.alt} />
              </div>
            ))
          } */}
          <div className="grid">
            <ListaImagens 
              pics={this.state.pics}
              // col-md-6
              imgStyle={'col-12 md:col-6 lg:col-4 xl:col-3'}/>
          </div>
        </div>
      </div> 
    )
  }
}


export default App