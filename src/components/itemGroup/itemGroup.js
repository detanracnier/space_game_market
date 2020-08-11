import React from 'react';
import Reactor from '../items/reactor';
import Weapon from '../items/weapon';
import Engine from '../items/engine';
import Extra from '../items/extra';
import { marketItemClicked } from '../../actions/actions';
import '../market/market.scss';
import '../items/reactor.scss';
import '../items/weapon.scss';
import '../items/engine.scss';
import '../items/extra.scss';
import { useDispatch } from 'react-redux';

export default function ItemGroup (props) {
    const dispatch = useDispatch();

    return(
        <React.Fragment>
            <div className="mk_item_type_header" onClick={()=>{
            }}>{props.header}:
                <div className="collapsable_icon">+</div>
            </div>

            {props.itemList.map(item => {
                switch(item.type){
                    case "reactor":
                        return(
                            <div className={
                                "reactor_item_container"
                            } onClick={() => {
                                dispatch(marketItemClicked(item))
                            }}>
                                <Reactor reactorItem={item} />
                            </div>
                        )
                    case "engine":
                        return(
                            <div className={
                                "engine_item_container"
                            } onClick={() => {
                                dispatch(marketItemClicked(item))
                            }}>
                                <Engine engineItem={item} />
                            </div>
                        )
                    case "weapon":
                        return(
                            <div className={
                                "weapon_item_container"
                            } onClick={() => {
                                dispatch(marketItemClicked(item))
                            }}>
                                <Weapon weaponItem={item} />
                            </div>
                        )
                    case "extra crew":
                        return(
                            <div className={
                                "extra_item_container"
                            } onClick={() => {
                                dispatch(marketItemClicked(item))
                            }}>
                                <Extra extraItem={item} />
                            </div>
                        )
                    case "extra ammo":
                        return(
                            <div className={
                                "extra_item_container"
                            } onClick={() => {
                                dispatch(marketItemClicked(item))
                            }}>
                                <Extra extraItem={item} />
                            </div>
                        )
                    default:
                        return(<div></div>)
                }
            })}
        </React.Fragment>
    )
}