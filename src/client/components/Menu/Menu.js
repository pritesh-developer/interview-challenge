import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const Menu = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch({type:'GET_MENUS'});


    }, [dispatch])

    const handleOnClick = useCallback((menu)=>{
        dispatch({type:'ADD_MENU_PREVIEW',payload:{menu}});
    },[]);

    const handleSearch = useCallback((e)=>{
        dispatch({type:'SEARCH_MENUS',payload:{searchString:e.target.value}});
    },[])

    return (
        <div>
            <div className="filters">
                <input className="form-control" onKeyUp={(e)=> handleSearch(e)} placeholder="Name" />
            </div>
            <ul className="item-picker">
                {props.menuList.menus?.length > 0 && props.menuList.menus.map((menu) => (<li onClick={()=>handleOnClick(menu)}
                 key={menu.id} className="item">
                    <h2>{menu.name}</h2>
                    <p>
                       { menu.dietaries.map((dietari)=>( <span className="dietary">{dietari}</span>)) }
                    </p>
                    
                </li>))
                }
            </ul>
        </div>
    )

}