import React, { useState} from 'react';
import weapons from '../../data/weapons';
import Weapon from '../items/weapon';

export default function Market () {
    const [state, setState] = useState({
        weaponsList: weapons,
    });

    return (
        state.weaponsList.map(weapon => {
            return(
                <Weapon weaponItem={weapon} />
            )
        })
    )
}