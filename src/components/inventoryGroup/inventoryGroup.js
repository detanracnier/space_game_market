import React from 'react';
import { useDispatch } from 'react-redux';
import { inventoryItemClicked } from '../../actions/actions';

export default function InventoryGroup(props){
    const item = props.item;
    const dispatch = useDispatch();
    const powerLabelHandler = () => {
        if (item.power){
            return (<div className="si_item_cost"><strong>Power:</strong> {item.power ? item.power : "--"}</div>)
        } else if (item.powerCapacity){
            return (<div className="si_item_cost"><strong>Power Gen:</strong> {item.powerCapacity}</div>)
        }
    }

    return (
        <React.Fragment>
            <div className="si_item_container" onClick={() => {
                dispatch(inventoryItemClicked(item))
            }}>
                <h2 className="si_item_name">{item.name}</h2>
                <div className="si_item_cost_container">
                    <div className="si_item_cost"><strong>Crew:</strong> {item.crew ? item.crew : "--"}</div>
                    {powerLabelHandler()}
                    <div className="si_item_cost"><strong>Price:</strong> {item.cost}</div>
                </div>
            </div>
        </React.Fragment>
    )
}