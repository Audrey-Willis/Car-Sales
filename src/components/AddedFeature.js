import React from 'react';
import { useDispatch } from 'react-redux';
 import { REMOVE_FEATURE } from '../actions/actions';


const AddedFeature = props => {
  const dispatch = useDispatch() //called the dispatch - Audrey
  return (
    <li>
      {/* Added an onclick event to the button that removes features - Audrey */}
      <button onClick={() => dispatch(REMOVE_FEATURE(props.feature))} className="button">X</button> 
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
