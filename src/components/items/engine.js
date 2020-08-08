import React from 'react';
import { useDispatch } from 'react-redux';
import { addToInventory } from '../../actions/actions';
import './item.scss';

export default function Engine(props){

    const engine = props.engineItem;
    const dispatch = useDispatch();

    return(
        <div className="item_container" onClick={() => {
            dispatch(addToInventory(engine))
        }}>
            <h2 className="item_name">{engine.name}</h2>
            <table className="item_table">
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <td className="item_label">Acceleration</td>
                        <td className="item_label">Speed</td>
                        <td className="item_label">Turning</td>
                    </tr>
                    <tr>
                        <td>{engine.acceleration}</td>
                        <td>{engine.speed}</td>
                        <td>{engine.turning}</td>
                    </tr>
                    <tr>
                        <td className="item_label">Power Cost</td>
                        <td className="item_label">Crew Cost</td>
                        <td className="item_label">Price</td>
                    </tr>
                    <tr>
                        <td>{engine.power}</td>
                        <td>{engine.crew}</td>
                        <td>{engine.cost}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}