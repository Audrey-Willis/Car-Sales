import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_FEATURE } from '../actions/actions';


const AdditionalFeature = props => {
  const dispatch = useDispatch() //called the dispatch-Audrey
  return (
    <li>
      {/* Added an onClick event to the button that adds features-Audrey */}
      <button onClick={() => dispatch(ADD_FEATURE(props.feature))} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
export default AdditionalFeature;
