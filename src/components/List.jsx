import React from 'react'

function List() {

  let unString = "patata"

  let stringArr = ["patatas", "tomates", "lechugas", "aguacates", "patatas"]

  // como traducimos un array de strings a un array donde cada elemento se vea como un JSX

  // let jsxArr = [<li>patatas</li>, <li>tomates</li>, <li>lechugas</li>, <li>aguacates</li>]

  // let jsxArr = stringArr.map((eachString) => {
  //   return (
  //     <li>{eachString}</li>
  //   )
  // })

  return (
    <>

      {/* {unString} */}

      {/* {stringArr} */}

      {/* {jsxArr} */}

      <h1>Lista de vegetales</h1>

      { stringArr.map((eachString, index) => {
        return (
          <p key={index}>{eachString}</p>
        )
      }) }
    
    </>
  )
}

export default List

// atajo para crear componentes rfce o rfc