import React, { Component } from "react";
import { gql } from "@apollo/client"; //Fetch graphql query
import { graphql } from "@apollo/client/react/hoc"; //bind component and query
import { Link } from "react-router-dom";
class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map((song) => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  }
  render() {
    //if the query is still fething data then do not load entire component
    if (this.props.data.loading) {
      return <div>Still Loading...</div>;
    }
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

//Fetch Id and title , Id is required to pass key in React component
const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
