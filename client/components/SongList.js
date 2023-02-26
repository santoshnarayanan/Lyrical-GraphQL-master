import React,{ Component } from 'react';
import { gql } from '@apollo/client'; //Fetch graphql query
import  {graphql} from '@apollo/client/react/hoc'; //bind component and query
class SongList extends Component{
    renderSongs(){
        return this.props.data.songs.map(song=> {
            return(
                <li key={song.id} className="collection-item">
                    {song.title}
            </li>
            );
        });
    }
    render(){
        //if the query is still fething data then do not load entire component
        if(this.props.data.loading)
        {
            return(<div>Still Loading...</div>);
        }
        return(
            <ul className="collection">
                {this.renderSongs()}
            </ul>
        );
    }
}

const query = gql`
{
    songs{
        title
    }
}`;

export default graphql(query)(SongList);