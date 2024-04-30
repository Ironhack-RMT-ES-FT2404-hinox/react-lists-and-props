import arepasImg from "../assets/arepas.jpg"
import pabellonImg from "../assets/pabellon.jpg"
import treslechesImg from "../assets/tres-leches.jpg"
import FoodCard from "./FoodCard"
import FoodTitle from "./FoodTitle"

function FoodMenu() {
  return (
    <div>
      
      <FoodTitle />

      {/* <div className="container">
        <p>Arepas</p>
        <img src={arepasImg} alt="arepas" width="400px"/>
      </div>

      <div className="container">
        <p>Pabellon</p>
        <img src={pabellonImg} alt="pabellon" width="400px"/>
      </div>

      <div className="container">
        <p>Tres Leches</p>
        <img src={treslechesImg} alt="tres leches" width="400px"/>
      </div> */}

      <FoodCard foodName="Arepas" foodImage={arepasImg} width="200px"/>
      <FoodCard foodName="Pabellon" foodImage={pabellonImg} width="300px"/>
      <FoodCard foodName="Tres leches" foodImage={treslechesImg}/>

      {/* 
        FooCard( { foodName: "Arepas" } )
        FooCard( { foodName: "Pabellon" } )
        FooCard( { foodName: "Tres leches" } ) 
      */}

    </div>
  )
}

export default FoodMenu