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
            const opacityValue = (i + 1) - (this.props.percentComplete / (100 / this.props.numCircles))

            circles.push(
                <div key={i} className="circle-container">
                    <div style={{opacity: opacityValue}} className={`circle opacity-container`}></div>
                    <div className={`circle ${this.props.highlightClass}`}></div>
                </div>
            );
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
    percentComplete: PropTypes.number.isRequired,
    highlightClass: PropTypes.string.isRequired
};

Spinner.defaultProps = {
    numCircles: 6
};
