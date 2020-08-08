import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ShipInventory(){
    const items = useSelector(state => state.shipInventory);

    return (
        <React.Fragment>
        <div>Ship Inventory:</div>
        {items.map(item =>{
            return (
                <div>{item.name}</div>
            )
        })}
        </React.Fragment>
    )
}