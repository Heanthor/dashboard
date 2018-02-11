import React, { Component } from 'react';
import PropTypes from "prop-types";


export default class Spinner extends Component {
    constructor(props) {
        super(props);

        this.renderCircles = this.renderCircles.bind(this);
    }

    renderCircles() {
        const circles = [];
        const numFilled = this.props.numCircles * (this.props.percentComplete / 100);

        for (let i = 0; i < this.props.numCircles; i++) {
            const filledString = i < numFilled ? "filled" : null;

            circles.push(<div className={`circle ${filledString}`} key={i}></div>);
        }

        return circles;
    }

    render() {
        return (
        <div className="spinner-component-container">
            {this.renderCircles()}
        </div>
        );
    }
}

Spinner.propTypes = {
    numCircles: PropTypes.number,
    percentComplete: PropTypes.number.isRequired
};

Spinner.defaultProps = {
    numCircles: 6
};
