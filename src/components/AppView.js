import React from "react";
import PropTypes from "prop-types";


const AppView = ({ error, setError }) => (
    <div>
        redux error message = { error || "empty" } <br />

        <button type="button" onClick={() => setError("errorMessage")}>
            set redux error
        </button>
    </div>
);

AppView.propTypes = {
    error: PropTypes.string,
    setError: PropTypes.func.isRequired,
};

AppView.defaultProps = {
    error: null,
};

export default AppView;
