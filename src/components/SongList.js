import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    return <div>Songlist</div>;
  }
}

const mapStateToPop = (state) => {
  // state is reduers:  song and selectedSong
  console.log(state);

  return { songs: state.songs };
};

export default connect(mapStateToPop)(SongList);
