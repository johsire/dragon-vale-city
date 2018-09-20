
import { GENERATION_ACTION_TYPE } from './types';

// Action Creator is wrapped around the ACTION -
// its returning it in itself BUT its not the action creator itself.
export const generationActionCreator = (payload) => {
    return {
      type: GENERATION_ACTION_TYPE,
      generation: payload
    }
  };
