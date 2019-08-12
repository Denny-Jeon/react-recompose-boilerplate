import { compose } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as authReducer from "../../store/reducers/auth";

export default compose(
    connect(
        state => ({
            error: state.auth.get("error") || null,
        }),
        dispatch => ({
            AuthAction: bindActionCreators(authReducer, dispatch),
        }),
    ),
);
