import React, { Component } from 'react';
import { Columns, Column, Section, Title, Label, Control, Select, Notification } from 'bloomer';
import 'bulma/css/bulma.css';
import { Container } from 'bloomer/lib/layout/Container';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';

// @flow
export default class App extends Component {
	render() {
		return (
			<Section>
			<Columns>
			<Column isSize="3/4">
				<Container>
					<Title>
						Heanthor's Simcraft Runner
					</Title>
					<Subtitle>
						Run sims on an <strong>entire guild</strong>, or a <strong>single player</strong>.<br/>
						Get meaningful results for <strong>all Legion raids</strong>.
					</Subtitle>
				</Container>
				</Column>
				<Column>
					<Notification isColor="primary">
					<Label>Select Raid</Label>
					<Control>
						<Select>
							<option value="nightmare">Emerald Nightmare</option>
							<option value="nighthold">Nighthold</option>
							<option value="tos">Tomb of Sargeras</option>
							<option value="antorus" selected={true}>Antorus</option>
						</Select>
					</Control>
					</Notification>
				</Column>
			</Columns>
		  </Section>
		);
	}
}
