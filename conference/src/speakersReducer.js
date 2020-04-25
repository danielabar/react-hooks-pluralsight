// Whatever this function returns becomes the new state
// See conference/src/Speakers.js for usages
// Eg: State is initialized to [],
// then called by useEffect hook with data: speakerListServerFilter, which will update state with speakers
// then could be called by heartFavoriteHandler which will update each entry in state (aka speakers) with heart value true/false
const speakersReducer = (state, action) => {
  function updateFavorite(favoriteValue) {
    return state.map((item, index) => {
      if (item.id === action.sessionId) {
        item.favorite = favoriteValue;
        return item;
      }
      return item;
    });
  }
  switch (action.type) {
    case 'setSpeakerList': {
      return action.data;
    }
    case 'favorite': {
      return updateFavorite(true);
    }
    case 'unfavorite': {
      return updateFavorite(false);
    }
    default:
      return state;
  }
};

export default speakersReducer;
