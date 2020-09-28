import React from 'react';
// import ChildComponent from './ChildComp'
import ChildComponent from './ChildClassComp'

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameID: '',
            gameName: '',
            totalPlayers: '',
            currentIndex: -1,
            isUpdate: false,
            games: [
                {
                    gameID: '1',
                    gameName: 'Carrom',
                    totalPlayers: '2'
                }
            ]
        };
    }
    enableEdit = (index) => {
        console.log('btn click editGame', index);
        this.setState({
            currentIndex: index,
            isUpdate: true,
            gameID: this.state.games[index].gameID,
            gameName: this.state.games[index].gameName,
            totalPlayers: this.state.games[index].totalPlayers
        });
    }
    deleteGame = (index) => {
        console.log('btn click deleteGame', index);
        let games = this.state.games;
        games.splice(index, 1);
        this.setState({ games }, () => { alert('Deleted successfully') });
    }
    backToAdd = () => {
        this.setState({
            gameID: "",
            gameName: "",
            totalPlayers: "",
            currentIndex: -1,
            isUpdate: false
        });
    }

    updateGame = () => {
        let games = this.state.games;
        games[this.state.currentIndex] = {
            gameID: this.state.gameID,
            gameName: this.state.gameName,
            totalPlayers: this.state.totalPlayers
        }
        this.setState({ games }, this.backToAdd);
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
        this.setState({ games },
            () => { alert('Added ' + game.gameName + ' Details, successfully') });

        this.setState({
            gameID: "",
            gameName: "",
            totalPlayers: "",
            currentIndex: -1,
            isUpdate: false
        });
    }
    render() {
        return (
            <div>
                <h1>Main Game Page</h1>
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
                </select><br />
                {
                    this.state.isUpdate ?
                        <div>
                            <button className="btn btn-default btn-sm" onClick={() => this.backToAdd()} >back to Add</button>
                            <button className="btn btn-primary btn-sm" onClick={() => this.updateGame()} >Update Game</button>
                        </div>
                        :
                        <button className="btn btn-primary btn-sm" onClick={() => this.addGame()} >Add Game</button>
                }
                <ChildComponent games={this.state.games}
                    enableEdit={(index) => { this.enableEdit(index) }}
                    deleteGame={(index) => { this.deleteGame(index) }} />
            </div>
        );
    }
}
export default MainComponent;