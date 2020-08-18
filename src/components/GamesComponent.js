import React from 'react';

class GamesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameID: '',
            gameName: '',
            totalPlayers: '',
            games: [
                {
                    gameID: '1',
                    gameName: 'Carrom',
                    totalPlayers: '2'
                }
            ]
        };
    }
    editGame = () => {
        console.log('btn click editGame');
    }
    deleteGame = (index) => {
        console.log('btn click deleteGame', index);
        let games = this.state.games;
        games.splice(index, 1);
        this.setState({ games }, () => { alert('Deleted successfully') });
    }
    addGame = () => {
        console.log('btn click addGame');
        let game = {
            gameID: this.state.gameID,
            gameName: this.state.gameName,
            totalPlayers: this.state.totalPlayers
        };
        let games = this.state.games;
        games.push(game);
        this.setState({ games }, () => { alert('Added ' + game.gameName + ' Details, successfully') });

        this.setState({
            gameID: "",
            gameName: "",
            totalPlayers: ""
        });
    }
    render() {
        return (
            <div>
                <h1>Add Game</h1>
                <p>Game ID</p>
                <input type="text" placeholder="Game ID" value={this.state.gameID}
                    onChange={(e) => { this.setState({ gameID: e.target.value }) }} />
                <p>Game Name</p>
                <input type="text" placeholder="Game Name" value={this.state.gameName}
                    onChange={(e) => { this.setState({ gameName: e.target.value }) }} />
                <p>Players Required</p>
                <select value={this.state.totalPlayers} onChange={(e) => { this.setState({ totalPlayers: e.target.value }) }}>
                    <option value="">Select Player</option>
                    <option value="1">1 Player</option>
                    <option value="2">2 Player</option>
                </select>

                <button className="btn btn-primary btn-sm" onClick={() => this.addGame()} >Add Game</button>
                <h2>List of Games</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Game ID</th>
                            <th>Game Name</th>
                            <th>Total Players</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.games.map((value, index) =>
                                <tr key={index}>
                                    <td>{value.gameID}</td>
                                    <td>{value.gameName}</td>
                                    <td>{value.totalPlayers}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm" onClick={() => this.editGame()}>Edit</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => this.deleteGame(index)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
                {/* {this.state.gameID},{this.state.gameName},{this.state.totalPlayers} */}
            </div>
        );
    }
}
export default GamesComponent