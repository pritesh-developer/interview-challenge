import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const MenuPreview = (props) => {

  const dispatch = useDispatch();
 
  const handleRemoveMenu =useCallback((menu) =>{
    dispatch({type:"REMOVE_MENU_PREVIEW",payload:{id:menu.id}})
  },[dispatch])

  return (
    <div>
       <ul className="item-picker">
                {props.previews?.length > 0 && props.previews.map((menu) => (<li 
                 key={menu.id} className="item">
                    <h2>{menu.name}</h2>
                    <p>
                       { menu.dietaries.map((dietari)=>( <span className="dietary">{dietari}</span>)) }
                    </p>
                    <button className="remove-item" onClick={() => handleRemoveMenu(menu) }>x</button>
                </li>))
                }
            </ul>
      
    </div>

  )
}
