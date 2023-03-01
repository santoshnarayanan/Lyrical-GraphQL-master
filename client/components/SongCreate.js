import React,{ Component } from 'react';
import { gql } from '@apollo/client'; //Fetch graphql query
import  {graphql} from '@apollo/client/react/hoc'; //bind component and query
import { Link, useHistory } from "react-router-dom";
class SongCreate extends Component{
    constructor(props){
        super(props);

        this.state= {title: ''};
    }

    onSubmit(event){
        event.preventDefault();

        this.props.mutate({
            variables: {
                title: this.state.title
            }
        }).then(()=>useHistory.push('/songs')) //Here newsong is not rendered automatically without manual refresh
        .catch(err=>console.log(err));
    }

    render(){
        return(
            <div>
                <Link to="/songs">Back</Link>
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

const mutation = gql`
mutation AddSong($title: String) {
    addSong(title: $title) {
        title
    }
}
`;

export default graphql(mutation)(SongCreate);