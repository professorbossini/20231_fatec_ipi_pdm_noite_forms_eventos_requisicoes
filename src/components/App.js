import Busca from "./Busca"
import React from 'react'
import env from 'react-dotenv'

class App extends React.Component{
// const App = () => {
  onBuscaRealizada = (termo) => {
    console.log(termo)
  }  
  render(){
    console.log(env.PEXELS_KEY)
    console.log(window.env.PEXELS_KEY)
    return(
      // div>h1{Exibir uma lista de...}
      <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
        {/* .col-12 */}
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        {/* .col-8 */}
        <div className="col-8">
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
      </div> 
    )
  }
}


export default App