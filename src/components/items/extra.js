import React from 'react';
import './item.scss';

export default function Extra(props){

    const extra = props.extraItem;

    return(
        <React.Fragment>
            <h2 className="item_name">{extra.name}</h2>
            <table className="item_table">
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <td className="item_label">{extra.extraLabel1}</td>
                        <td className="item_label">{extra.extraLabel2}</td>
                        <td className="item_label">{extra.extraLabel3}</td>
                        <td className="item_label">Price</td>
                    </tr>
                    <tr>
                        <td>{extra.extraText1}</td>
                        <td>{extra.extraText2}</td>
                        <td>{extra.extraText3}</td>
                        <td>{extra.cost}</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}