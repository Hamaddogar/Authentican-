import {
  ADD_SIGNUP,
  
} from "../actions/actionTypes";

const initialState = []
const signreducer = (state = initialState, action) => {
  debugger;

  switch (action.type) {
    case ADD_SIGNUP:
      return {
       ...state, ...action.payload

         
    
      };
    // case DELETE_PLACE:
    //   return {
    //     ...state,
    //     places: state.places.filter(place => {
    //       return place.key !== state.selectedPlace.key;
    //     }),
    //     selectedPlace: null
    //   };
    // case SELECT_PLACE:
    //   return {
    //     ...state,
    //     selectedPlace: state.places.find(place => {
    //       return place.key === action.placeKey;
    //     })
    //   };
    // case DESELECT_PLACE:
    //   return {
    //     ...state,
    //     selectedPlace: null
    //   };
    default:
      return state;
  }
};

export default signreducer;
