import React,{ Component } from 'react';
import { gql } from '@apollo/client'; //Fetch graphql query

class SongCreate extends Component{
    constructor(props){
        super(props);

        this.state= {title: ''};
    }

    onSubmit(event){
        event.preventDefault();


    }

    render(){
        return(
            <div>
                <h3>Create new Song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title:</label>
                    <input onChange={event => this.setState({title:event.target.value})} 
                        value={this.state.title}
                    />
                </form>
            </div>
        );
    }
}

const mutations = gql
`
mutation{
    addSong(title:){
        id
        title
    }
}
`;

export default SongCreate;