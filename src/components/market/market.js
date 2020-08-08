import React from 'react';
import weapons from '../../data/weapons';
import Weapon from '../items/weapon';
import './market.scss';

export default function Market () {
    const weaponsList = weapons;

    return (
        <div className="market_container">
            {weaponsList.map(weapon => {
                return(
                    <Weapon weaponItem={weapon} />
                )
            })}
        </div>
    )
}