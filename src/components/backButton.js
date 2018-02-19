import React from 'react';
import PropTypes from "prop-types";

export default class BackButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false,
            hoverClass: this.props.hoverClass
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.hoverClass !== this.props.hoverClass) {
            this.setState({ hoverClass: nextProps.hoverClass });
        }
    }

    render() {
        return (
            <div className={`back-container ${this.state.hover ? "raid-color " + this.state.hoverClass : ""}`} onClick={this.props.onClick}
             onMouseEnter={() => {this.setState({ hover: true })}}
             onMouseLeave={() => {this.setState({ hover: false })}}>
                <i className="far fa-times-circle cancel-button"></i>
            </div>
        );
    }
}

BackButton.PropTypes = {
    hoverClass: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};
