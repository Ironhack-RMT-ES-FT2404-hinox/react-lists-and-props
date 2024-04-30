

function FoodCard( props ) {
  console.log(props)

  return (
    <div className="container">
      <p>{props.foodName}</p>
      <img src={props.foodImage} alt={props.foodName} width={props.width === undefined ? "400px" : props.width}/>
    </div>
  )
}

export default FoodCard