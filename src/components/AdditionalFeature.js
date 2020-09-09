import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_FEATURE } from '../actions/actions';
 //imported needed items

const AdditionalFeature = props => {
  const dispatch = useDispatch() //called dispatch
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => dispatch(ADD_FEATURE(props.feature))} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
//updated button above
export default AdditionalFeature;
