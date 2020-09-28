import React from "react";
import { withRouter } from 'react-router';

function URLparamsComponent(props) {
    console.log(props.match.params);
    return (
        <h2>ID From URL : {props.match.params.game_id} </h2>
    )
}

export default withRouter(URLparamsComponent);