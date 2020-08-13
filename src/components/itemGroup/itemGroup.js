import React from 'react';
import Reactor from '../items/reactor';
import Weapon from '../items/weapon';
import Engine from '../items/engine';
import Extra from '../items/extra';
import { marketItemClicked, marketCollectionHeaderClicked } from '../../actions/actions';
import '../market/market.scss';
import '../items/reactor.scss';
import '../items/weapon.scss';
import '../items/engine.scss';
import '../items/extra.scss';
import { useDispatch, useSelector } from 'react-redux';

export default function ItemGroup (props) {
    const dispatch = useDispatch();
    const collapsed = useSelector(state => state.market[props.id + "Collection"]);
    const itemComponents = {
        reactor: Reactor,
        weapon: Weapon,
        engine: Engine,
        extra: Extra,
    }
    const MyItem = itemComponents[props.id];
    const MyItemStyle = props.id + "_item_container";

    return(
        <React.Fragment>
            <div className="mk_item_type_header" onClick={()=>{
                dispatch(marketCollectionHeaderClicked(props.id))
            }}>{props.header}:
                <div className="collapsable_icon">{(collapsed ? "-" : "+")}</div>
            </div>

            {props.itemList.map(item => {
                return(
                    <div className={
                        (collapsed ? MyItemStyle : "hidden")
                    } onClick={() => {
                        dispatch(marketItemClicked(item))
                    }}>
                        <MyItem item={item} />
                    </div>
                )
            })}
        </React.Fragment>
    )
}