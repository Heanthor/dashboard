import React from 'react';
import PropTypes from "prop-types";
import { Card, CardContent, Content, Title } from 'bloomer';

export default class SimResults extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <Card className={`transitionable ${this.props.showClass} sim-results`} >
                <CardContent>
                    <Content>
                        <Title isSize={5}>Report for X Y</Title>
                    </Content>
                </CardContent>
            </Card>
        );
    }
}

SimResults.PropTypes = {
    showClass: PropTypes.string.isRequired
}
