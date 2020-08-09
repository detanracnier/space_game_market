import React from 'react';
import { useSelector } from 'react-redux';
import './shipInventory.scss';
import { useDispatch } from 'react-redux';
import { removeFromInventory, updateFunds, updateCrew, updatePower, updatePowerCapacity } from '../../actions/actions';

export default function ShipInventory(){
    const weapons = useSelector(state => state.shipInventory.filter(item => item.type === "weapon"));
    const weaponsSorted = weapons.sort((a,b) => a.name > b.name ? 1 : -1);
    const engines = useSelector(state => state.shipInventory.filter(item => item.type === "engine"));
    const enginesSorted = engines.sort((a,b) => a.name > b.name ? 1 : -1);
    const reactors = useSelector(state => state.shipInventory.filter(item => item.type === "reactor"));
    const reactorsSorted = reactors.sort((a,b) => a.name > b.name ? 1 : -1);
    const dispatch = useDispatch();

    return (
        <div className="ship_inventory_container">
            <h2 className="header">Ship Inventory:</h2>
            <div>Reactor(s):</div>
            {reactorsSorted.map(reactor =>{
                return (
                    <React.Fragment>
                        <div className="item_container" onClick={() => {
                            dispatch(removeFromInventory(reactor.id))
                            dispatch(updateFunds(reactor.cost*-1))
                            dispatch(updateCrew(reactor.crew*-1))
                            dispatch(updatePowerCapacity(reactor.powerCapacity*-1))
                        }}>
                            <h2 className="item_name">{reactor.name}</h2>
                            <div className="item_cost_container">
                                <div className="item_cost"><strong>Crew:</strong> {reactor.crew}</div>
                                <div className="item_cost"><strong>Power Generation:</strong> {reactor.powerCapacity}</div>
                                <div className="item_cost"><strong>Price:</strong> {reactor.cost}</div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
            <div>Engine:</div>
            {enginesSorted.map(engine =>{
                return (
                    <React.Fragment>
                        <div className="item_container" onClick={() => {
                            dispatch(removeFromInventory(engine.id))
                            dispatch(updateFunds(engine.cost*-1))
                            dispatch(updateCrew(engine.crew*-1))
                            dispatch(updatePower(engine.power*-1))
                        }}>
                            <h2 className="item_name">{engine.name}</h2>
                            <div className="item_cost_container">
                                <div className="item_cost"><strong>Crew:</strong> {engine.crew}</div>
                                <div className="item_cost"><strong>Power:</strong> {engine.power}</div>
                                <div className="item_cost"><strong>Price:</strong> {engine.cost}</div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
            <div>Weapons:</div>
            {weaponsSorted.map(weapon =>{
                return (
                    <React.Fragment>
                        <div className="item_container" onClick={() => {
                            dispatch(removeFromInventory(weapon.id))
                            dispatch(updateFunds(weapon.cost*-1))
                            dispatch(updateCrew(weapon.crew*-1))
                            dispatch(updatePower(weapon.power*-1))
                        }}>
                            <h2 className="item_name">{weapon.name}</h2>
                            <div className="item_cost_container">
                                <div className="item_cost"><strong>Crew:</strong> {weapon.crew}</div>
                                <div className="item_cost"><strong>Power:</strong> {weapon.power}</div>
                                <div className="item_cost"><strong>Price:</strong> {weapon.cost}</div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    )
}