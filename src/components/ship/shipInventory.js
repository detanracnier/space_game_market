import React from 'react';
import { useSelector } from 'react-redux';
import './shipInventory.scss';
import { useDispatch } from 'react-redux';
import { removeFromInventory } from '../../actions/actions';

export default function ShipInventory(){
    const items = useSelector(state => state.shipInventory);
    const itemsSorted = items.sort((a,b) => a.name > b.name ? 1 : -1);
    const dispatch = useDispatch();

    return (
        <div className="ship_inventory_container">
            <h2 className="header">Ship Inventory:</h2>
            {itemsSorted.map(item =>{
                return (
                    <div onClick={() => {
                        dispatch(removeFromInventory(item.id))
                    }}>{item.name}</div>
                )
            })}
        </div>
    )
}