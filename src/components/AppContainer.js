// eslint-disable-next-line
import React from "react";
import {
    compose,
    withHandlers,
} from "recompose";
import { withRouter } from "react-router-dom";
import { withAuth } from "./With";
import AppView from "./AppView";

export default compose(
    withRouter,
    withAuth,
    withHandlers({
        setError: props => msg => props.AuthAction.setError(`${msg} => time: ${new Date()}`),
    }),
)(AppView);
