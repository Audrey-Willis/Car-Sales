export const ADD_FEATURE = featureInfo => {
    return { type: 'ADD_FEATURE', payload: featureInfo };
}

export const REMOVE_FEATURE = featureInfo => {
    return { type: 'REMOVE_FEATURE', payload: featureInfo};
}  

//made actions for adding and removing a feature.