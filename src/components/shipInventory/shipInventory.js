import React from 'react';
import { useSelector } from 'react-redux';
import InventoryGroup from '../inventoryGroup/inventoryGroup';
import './shipInventory.scss';

export default function ShipInventory(){
    const weapons = useSelector(state => state.shipInventory.filter(item => item.type === "weapon"));
    const weaponsSorted = weapons.sort((a,b) => a.name > b.name ? 1 : -1);
    const engines = useSelector(state => state.shipInventory.filter(item => item.type === "engine"));
    const enginesSorted = engines.sort((a,b) => a.name > b.name ? 1 : -1);
    const reactors = useSelector(state => state.shipInventory.filter(item => item.type === "reactor"));
    const reactorsSorted = reactors.sort((a,b) => a.name > b.name ? 1 : -1);
    const extras = useSelector(state => state.shipInventory.filter(item => item.type === "extra crew" || item.type === "extra ammo"));
    const extrasSorted = extras.sort((a,b) => a.name > b.name ? 1 : -1);

    return (
        <div className="ship_inventory_container">
            <h2 className="si_header">Ship Inventory:</h2>
            <div className="si_item_type_header">Reactor:</div>
            {reactorsSorted.map(reactor =>{
                return <InventoryGroup item={reactor} />
            })}
            <div className="si_item_type_header">Engine:</div>
            {enginesSorted.map(engine =>{
                 return <InventoryGroup item={engine} />
            })}
            <div className="si_item_type_header">Weapons:</div>
            {weaponsSorted.map(weapon =>{
                 return <InventoryGroup item={weapon} />
            })}
            <div className="si_item_type_header">Extras:</div>
            {extrasSorted.map(extra =>{
                 return <InventoryGroup item={extra} />
            })}
        </div>
    )
}