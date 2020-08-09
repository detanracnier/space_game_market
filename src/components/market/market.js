import React from 'react';
import weaponsList from '../../data/weapons';
import engineList from '../../data/engines';
import reactorList from '../../data/reactors';
import extraList from '../../data/extra';
import Weapon from '../items/weapon';
import Engine from '../items/engine';
import Reactor from '../items/reactor';
import Extra from '../items/extra';
import { useDispatch } from 'react-redux';
import { addToInventory, updateFunds, updateCrew, updateCrewCapacity, updatePower, updatePowerCapacity, updateAmmo } from '../../actions/actions';
import './market.scss';

export default function Market () {
    const dispatch = useDispatch();

    return (
        <div className="market_container">
            <div className="item_type_header">Reactors:</div>
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
            <div className="item_type_header">Engines:</div>
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
            <div className="item_type_header">Weapons:</div>
            {weaponsList.map(weapon => {
                return(
                    <div className="item_container" onClick={() => {
                        dispatch(addToInventory(weapon))
                        dispatch(updateFunds(weapon.cost))
                        dispatch(updateCrew(weapon.crew))
                        dispatch(updatePower(weapon.power))
                        dispatch(updateAmmo(weapon.ammoType,weapon.ammo))
                    }}>
                        <Weapon weaponItem={weapon} />
                    </div>
                )
            })}
            <div className="item_type_header">Extras:</div>
            {extraList.map(extra => {
                return(
                    <div className="item_container" onClick={() => {
                        dispatch(addToInventory(extra))
                        dispatch(updateFunds(extra.cost))
                        if (extra.crew){dispatch(updateCrew(extra.crew))}
                        if (extra.crewCapacity){dispatch(updateCrewCapacity(extra.crewCapacity))}
                        if (extra.power){dispatch(updatePower(extra.power))}
                        if (extra.powerCapacity){dispatch(updatePowerCapacity(extra.powerCapacity))}
                        if (extra.ammo){dispatch(updateAmmo(extra.ammoType,extra.ammo))}
                    }}>
                        <Extra extraItem={extra} />
                    </div>
                )
            })}
        </div>
    )
}