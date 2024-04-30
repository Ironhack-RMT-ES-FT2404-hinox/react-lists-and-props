
function Actions(props) {
  console.log(props)

  let fontColor = null;
  if (props.likes <= 3) {
    fontColor = "red"
  } else if (props.likes > 3 && props.likes <=10) {
    fontColor = "yellow"
  } else {
    fontColor = "green"
  }

  return (
    <div className="container">
      <p>
        {/* Iteration 2. Receive props for 'likes' and show the number of likes in the second span*/}
        <span>Likes:</span>
        <span style={{color: fontColor}}>{props.likes}</span>
      </p>

      <p>
        {/* Iteration 3. Receive props for 'fav' and based on the boolean value display a different emoji 👍 for true and 👎 for false */}

        {/* {props.fav === true ? <span>👍</span> : <span>👎</span>} */}
        {/* {props.fav ? <span>👍</span> : <span>👎</span>} */}
        <span> {props.fav ? "👍" : "👎"} </span>

      </p>
    </div>
  );
}

export default Actions;

// BONUS. Make the likes value have a different font color based on its value.
// if less or equal than 3 should be red.
// if more than 3 and less than 10 should be yellow.
// if more or equal than 10 should be green.
