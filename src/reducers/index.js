import { combineReducers } from "redux";

const songReducers = () => {
  return [
    { title: "No Scrub", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I want it that way", duration: "1:45" },
  ];
};

const selectedSongReducers = (selectedSong = null, action) => {
  if (action.type === "Song_Selected") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducers,
  selectedSong: selectedSongReducers,
});
