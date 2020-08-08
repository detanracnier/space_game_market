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
                    <React.Fragment>
                        <div className="item_container" onClick={() => {
                            dispatch(removeFromInventory(item.id))
                        }}>
                            <h2 className="item_name">{item.name}</h2>
                            <div className="item_cost_container">
                                <div className="item_cost"><strong>Crew:</strong> {item.crew}</div>
                                <div className="item_cost"><strong>Power:</strong> {item.power}</div>
                                <div className="item_cost"><strong>Price:</strong> {item.cost}</div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    )
}