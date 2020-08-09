import React from 'react';
import weapons from '../../data/weapons';
import engines from '../../data/engines';
import reactors from '../../data/reactors';
import Weapon from '../items/weapon';
import Engine from '../items/engine';
import Reactor from '../items/reactor';
import { useDispatch } from 'react-redux';
import { addToInventory, updateResources } from '../../actions/actions';
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
                        dispatch(updateResources(weapon.cost,weapon.crew,weapon.power))
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
                        dispatch(updateResources(engine.cost,engine.crew,engine.power))
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
                        //dispatch(updateResources(reactor.cost,reactor.crew,reactor.power))
                    }}>
                        <Reactor reactorItem={reactor} />
                    </div>
                )
            })}
        </div>
    )
}