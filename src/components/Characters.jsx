
// Iteration 2.1. import the array of characters in "data/characters"
import charactersArr from "../data/characters.js"
console.log(charactersArr)

function Characters() {

  const titles = ['TEENAGE', 'MUTANT', 'NINJA', 'TURTLES'];

  return (
    <>
      <div className="container">
        {/* iteration 1. Using a .map on the array titles, create an h1 for every string */}
        {titles.map((eachTitle, index) => {
          return (
            <h1 key={index}>{eachTitle}</h1>
          )
        })}

      </div>

      <h2>List of Characters</h2>

      {/* Iteration 2.2. display all the characters in the array of characters with the following structure */}
      
      {charactersArr.map((eachCharacter, index) => {
        return (
          <div key={index} className="container" style={ {backgroundColor: eachCharacter.color} }>
            <h3>Name: {eachCharacter.name}</h3>
            <p>Weapon: {eachCharacter.weapon}</p>
            { eachCharacter.name === "splinter" ? <span>🐀</span> : <span>🐢</span> }

            {/* { eachCharacter.name === "michelangelo" ? <span>⭐</span> : null } */}
            { eachCharacter.name === "michelangelo" && <span>⭐</span> }
          </div>
        )
      })}
    </>
  )
}

export default Characters