import React,{ Component } from 'react';
import { gql } from '@apollo/client'; //Fetch graphql query
import  {graphql} from '@apollo/client/react/hoc'; //bind component and query
class SongList extends Component{
    render(){
        console.log(this.props);
        return(
            <div>
                SongList
            </div>
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