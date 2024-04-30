import './App.css'
import Actions from './components/Actions'
import Characters from './components/Characters'
import Container from './components/Container'
import FoodMenu from './components/FoodMenu'
import List from './components/List'

import Draggable from 'react-draggable';
import ReactPlayer from 'react-player'

function App() {


  return (
    <>
      
      {/* //* LISTAS */}
      <List />

      {/* //*LISTAS Y RENDERIZACION CONDICIONADA */}
      <Characters />

      {/* //*PROPS */}
      <FoodMenu />

      {/* Iteration 1. Make every invocation of Actions receive 2 props.*/}
      {/* prop 1 will be called 'likes' and should be a number (the value should be different on every invocation of the component) */}
      {/* prop 2 will be called 'fav' and should be a boolean (the value should be different on every invocation of the component)*/}

      <Actions likes={8} fav={true}/>

      <Actions likes={20} fav={false}/>

      <Actions likes={3} fav={true}/>

      {/* //* PROPS.CHILDREN */}
      <Container bgcolor="darkblue" color="lightblue">
        <div>
          <p>vegetales</p>
          <li>patatas</li>
        </div>
      </Container>
      <Container bgcolor="darkgreen" color="lightgreen">
        <header>
          <article>
            <h3>algo raro</h3>
            <p>otro texto</p>
          </article>
          <div>
            <h5>otro titulo</h5>
          </div>
        </header>
      </Container>
      <Container bgcolor="darkred" color="lightred">
        <Actions likes={8} fav={true}/>
        <Actions likes={20} fav={false}/>
        <Actions likes={3} fav={true}/>
      </Container>


      {/* //* LIBRERIAS DE COMPONENTES */}
      <ReactPlayer url='https://youtu.be/dQw4w9WgXcQ' volume={0.2} controls={true}/>
      
      <Draggable>
        <div>
          <Actions likes={8} fav={true}/>
        </div>
      </Draggable>

    </>
  )
}

export default App
