import React, { useState } from 'react';
import './item.scss';

export default function Weapon(props){

    const [state, setState] = useState ({
        weapon: props.weaponItem,
    })

    return(
        <div className="item_container" onClick={(e) => {

        }}>
            <h2 className="item_name">{state.weapon.name}</h2>
            <table className="item_table">
                <tr>
                    <td className="item_label">Shield damage</td>
                    <td className="item_label">Armor damage</td>
                    <td className="item_label">Crew damage</td>
                    <td className="item_label">Anti-Fighter</td>
                    <td className="item_label">Anti-Missile</td>
                    <td className="item_label">Range</td>
                </tr>
                <tr>
                    <td>{state.weapon.shield_damage}</td>
                    <td>{state.weapon.armor_damage}</td>
                    <td>{state.weapon.crew_damage}</td>
                    <td>{state.weapon.anti_fighter}</td>
                    <td>{state.weapon.anti_missile}</td>
                    <td>{state.weapon.range}</td>
                </tr>
                <tr>
                    <td className="item_label">Rate-of-fire</td>
                    <td className="item_label">Ammo</td>
                    <td className="item_label">Speed</td>
                    <td className="item_label">Percision</td>
                    <td className="item_label">Power Cost</td>
                    <td className="item_label">Crew Cost</td>
                    <td className="item_label">Price</td>
                </tr>
                <tr>
                    <td>{state.weapon.rate_of_fire}</td>
                    <td>{state.weapon.ammo}</td>
                    <td>{state.weapon.speed}</td>
                    <td>{state.weapon.percision}</td>
                    <td>{state.weapon.power}</td>
                    <td>{state.weapon.crew}</td>
                    <td>{state.weapon.cost}</td>
                </tr>
            </table>



        </div>
    )
}