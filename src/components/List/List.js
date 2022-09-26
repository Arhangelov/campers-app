import React from 'react';
import './ListStyles.css';

function List(props) {
  return (
      <div className='col'>
          <img className='img' src={props.imgUrl} alt="camper-img" />
          <p className='p'>{props.name}</p>
    </div>
  )
}

export default List