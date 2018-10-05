
import { GENERATION } from './types';
import { BACKEND } from '../config';

// Action Creator is wrapped around the ACTION -
// its returning it in itself BUT its not the action creator itself.
// export const generationActionCreator = (payload) => {
//     return {
//       type: GENERATION_ACTION_TYPE,
//       generation: payload
//     }
//   };

export const fetchGeneration = () => dispatch => {
  dispatch({ type: GENERATION.FETCH });

  return fetch(`${ BACKEND.ADDRESS }/generation`)
    .then(response => response.json())
    .then(json => {
      if(json.type === 'error') {
        dispatch({
          type: GENERATION.FETCH_ERROR,
          message: json.message
        });
      } else {
      dispatch({ 
        type: GENERATION.FETCH_SUCCESS,
        generation: json.generation
        });
      }  
    })
    .catch(error => dispatch({ 
      type: GENERATION.FETCH_ERROR,
      message: error.message
   }));
};
