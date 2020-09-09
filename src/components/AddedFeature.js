import React from 'react';
import { useDispatch } from 'react-redux';
 import { REMOVE_FEATURE } from '../actions/actions';

 //made needed imports

const AddedFeature = props => {
  const dispatch = useDispatch() //called my dispatch
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => dispatch(REMOVE_FEATURE(props.feature))} className="button">X</button> 
      {props.feature.name}
    </li>
  );
  //updated button to use dispatch
};

export default AddedFeature;
