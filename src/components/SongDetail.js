import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  console.log("🚀 ~ SongDetail ~ song", song);
  if (!song) {
    return <div>Secelct a Song</div>;
  }

  // console.log({ song });
  return (
    <div>
      <h3>Detail for :</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
