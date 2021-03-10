import Div from './Div'
//componente
function App() {
  return (
    <div>
     <h1> Ta no APP</h1>
     <marquee> wewwwwwwwww.... </marquee>
     <Home />
     <div> --------------- </div>
     <Div />
    </div>
  );
}


//componente
function Home(){
  return (
    <div>
        <h1>Inicio Home</h1>
        <Div />
        <div> Fim home</div>
    </div>
  )
}

export default App
