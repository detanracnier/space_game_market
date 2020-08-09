import React from 'react';
import { useSelector } from 'react-redux';
import './resourceTracker.scss';

export default function ResourceTracker(){
    const funds = useSelector(state => state.resourceTracker.funds);
    const powerComsumed = useSelector(state => state.resourceTracker.power);
    const powerCapacity = useSelector(state => state.resourceTracker.powerCapacity);
    return(
        <div className="resource_tracker_container">
            <div className="resource_text">Funds Available: {funds}</div>
            <div className="resource_text">Power Consumption: {powerComsumed} / {powerCapacity}</div>
        </div>
    )
}