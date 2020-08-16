import React from 'react';
import './item.scss';

export default function Weapon(props){

    const weapon = props.item;
    return(
        <React.Fragment>
            <h2 className="item_name">{weapon.name}</h2>
            <table className="item_table">
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <td className="item_label">Shield damage</td>
                        <td className="item_label">Armor damage</td>
                        <td className="item_label">Crew damage</td>
                        <td className="item_label">Anti-Fighter</td>
                        <td className="item_label">Anti-Missile</td>
                        <td className="item_label">Range</td>
                    </tr>
                    <tr>
                        <td>{weapon.shield_damage}</td>
                        <td>{weapon.armor_damage}</td>
                        <td>{weapon.crew_damage}</td>
                        <td>{weapon.anti_fighter}</td>
                        <td>{weapon.anti_missile}</td>
                        <td>{weapon.range}</td>
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
                        <td>{weapon.rate_of_fire}</td>
                        <td>{weapon.ammo_type === "none" ? "none" : weapon.ammo_amount}</td>
                        <td>{weapon.speed}</td>
                        <td>{weapon.percision}</td>
                        <td>{weapon.power}</td>
                        <td>{weapon.crew}</td>
                        <td>{weapon.cost}</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}