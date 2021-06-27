import React from "react";
import {useHistory} from 'react-router-dom'

export const AboutPage:React.FC = () => {
  const history = useHistory();
  return (
    <div className={'about_page'}>
      <h1>About This page</h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, voluptates.</p>
      <button onClick={()=>history.push('/')}>Go back to the todos</button>
    </div>
  )
}