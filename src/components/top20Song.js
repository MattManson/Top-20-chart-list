import React, {Component} from 'react';

const Top20Song = (props) => {


  return (
    <tr>
      <td className="position">{props.position}</td>
      <td>{props.title}</td>
      <td>{props.artist}</td>
      <td>
        <a href={props.link} alt="click for preview"><img 
        src={props.logo}
        alt="single cover"
        width='300px'
      /></a>
    </td>
    </tr>
  )

}

export default Top20Song;
