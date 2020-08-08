import React from 'react';
import weapons from '../../data/weapons';
import engines from '../../data/engines';
import Weapon from '../items/weapon';
import Engine from '../items/engine';
import './market.scss';

export default function Market () {
    const weaponsList = weapons;
    const engineList = engines;

    return (
        <div className="market_container">
            {weaponsList.map(weapon => {
                return(
                        <Weapon weaponItem={weapon} />
                )
            })}
            {engineList.map(engine => {
                return(
                    <Engine engineItem={engine} />
                )
            })}
        </div>
    )
}