import React from 'react';

class ChildComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
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
                            this.props.games.map((value, index) =>
                                <tr key={index}>
                                    <td>{value.gameID}</td>
                                    <td>{value.gameName}</td>
                                    <td>{value.totalPlayers}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm" onClick={() => this.props.enableEdit(index)}>Edit</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => this.props.deleteGame(index)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ChildComponent;