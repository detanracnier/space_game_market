import React from 'react';
import weapons from '../../data/weapons';
import engines from '../../data/engines';
import reactors from '../../data/reactors';
import Weapon from '../items/weapon';
import Engine from '../items/engine';
import Reactor from '../items/reactor';
import { useDispatch } from 'react-redux';
import { addToInventory, updateFunds, updateCrew, updatePower, updatePowerCapacity } from '../../actions/actions';
import './market.scss';

export default function Market () {
    const weaponsList = weapons;
    const engineList = engines;
    const reactorList = reactors;
    const dispatch = useDispatch();

    return (
        <div className="market_container">
            <div>Weapons:</div>
            {weaponsList.map(weapon => {
                return(
                    <div className="item_container" onClick={() => {
                        dispatch(addToInventory(weapon))
                        dispatch(updateFunds(weapon.cost))
                        dispatch(updateCrew(weapon.crew))
                        dispatch(updatePower(weapon.power))
                    }}>
                        <Weapon weaponItem={weapon} />
                    </div>
                )
            })}
            <div>Engines:</div>
            {engineList.map(engine => {
                return(
                    <div className="item_container" onClick={() => {
                        dispatch(addToInventory(engine))
                        dispatch(updateFunds(engine.cost))
                        dispatch(updateCrew(engine.crew))
                        dispatch(updatePower(engine.power))
                    }}>
                        <Engine engineItem={engine} />
                    </div>
                )
            })}
            <div>Reactors:</div>
            {reactorList.map(reactor => {
                return(
                    <div className="item_container" onClick={() => {
                        dispatch(addToInventory(reactor))
                        dispatch(updateFunds(reactor.cost))
                        dispatch(updateCrew(reactor.crew))
                        dispatch(updatePowerCapacity(reactor.powerCapacity))
                    }}>
                        <Reactor reactorItem={reactor} />
                    </div>
                )
            })}
        </div>
    )
}