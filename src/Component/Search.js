import React, { useState } from 'react'

function Search({method}) {
  const [content, setContent]= useState()

  const Find =(e)=>{
    setContent(e.target.value)
    method(content);
  }
  return (
    <div>
      <input type="text" placeholder="Search any content" onChange={Find}/>
    </div>
  )
}

export default Search
