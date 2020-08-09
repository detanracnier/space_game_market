import React from 'react';
import './item.scss';

export default function Reactor(props){
    const reactor = props.reactorItem;

    return(
        <React.Fragment>
            <h2 className="item_name">{reactor.name}</h2>
            <table className="item_table">
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <td className="item_label">Power Generation</td>
                        <td className="item_label">Crew</td>
                        <td className="item_label">Cost</td>
                    </tr>
                    <tr>
                        <td>{reactor.powerCapacity}</td>
                        <td>{reactor.crew}</td>
                        <td>{reactor.cost}</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    )

}