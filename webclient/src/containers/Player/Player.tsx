// eslint-disable-next-line
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter /*, RouteComponentProps */, generatePath } from "react-router-dom";
import { RoomsStateMessages, RoomsStateRooms, JoinedRooms, RoomsSelectors } from "store";
import { AuthGuard } from "components";

const Player = props => {

     console.log(props);
    return (
        <div>
            <AuthGuard />
            <span>"Player"</span>
            <span> {props.name} </span>

        </div>
    )

}


const mapStateToProps = state => ({
    
    
});


export default withRouter(connect(mapStateToProps)(Player));