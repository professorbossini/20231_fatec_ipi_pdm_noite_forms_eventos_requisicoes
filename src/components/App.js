import Busca from "./Busca"
const App = () => {
  return(
    // div>h1{Exibir uma lista de...}
    <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
      {/* .col-12 */}
      <div className="col-12">
        <h1>Exibir uma lista de...</h1>
      </div>
      {/* .col-8 */}
      <div className="col-8">
        <Busca />
      </div>
    </div> 
  )
}


export default App