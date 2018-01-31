import React, { Component } from 'react';
import { Columns, Column, Section, Title, Label, Control, Select, Notification, Field, Button } from 'bloomer';
import 'bulma/css/bulma.css';
import { Container } from 'bloomer/lib/layout/Container';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import { Input } from 'bloomer/lib/elements/Form/Input';

// @flow
export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			raidSelectorColor: "primary",
			simType: null // player or guild
		};
	}

	onRaidSwitch(raid) {
		let colorChoice = "";
		switch(raid) {
			case "nightmare":
			case "nighthold":
			case "tos":
			case "antorus":
		}
	}

	renderGuildSimForm() {
		return this.state.simType == "guild"
	}

	// RENDER FUNCTIONS
	render() {
		return (
			<Section>
			<Columns>
			<Column isSize="3/4">
				<Title>
					Heanthor's Simcraft Runner
				</Title>
				<Subtitle>
					Run sims on an <strong>entire guild</strong>, or a <strong>single player</strong>.<br/>
					Get meaningful results for <strong>all Legion raids</strong>.
				</Subtitle>


				<Subtitle isSize={5}>Select a raid and sim type...</Subtitle>
				<Field hasAddons="right" isPulled="left">
				<Control>
					<Select>
						<option value="nightmare">Emerald Nightmare</option>
						<option value="nighthold">Nighthold</option>
						<option value="tos">Tomb of Sargeras</option>
						<option value="antorus" selected={true}>Antorus</option>
					</Select>
				</Control>
				<Control>
					<Button isColor="primary">Guild Sim</Button>
				</Control>
				<Control>
					<Button isColor="primary">Player Sim</Button>
				</Control>
				</Field>
				</Column>

				<Column>
					<Notification isColor={this.state.raidSelectorColor}>
					<Field>
						<Label>Region</Label>
						<Control>
							<Select>
								<option value="US" selected>US</option>
								<option value="EU">EU</option>
								<option value="CN">CN</option>
								<option value="TW">TW</option>
								<option value="KR">KR</option>
							</Select>
						</Control>
					</Field>

					<Field>
						<Label>Difficulty</Label>
						<Control>
							<Select>
							<option value="lfr">LFR</option>
							<option value="normal">Normal</option>
							<option value="heroic" selected>Heroic</option>
							<option value="mythic">Mythic</option>
							</Select>
						</Control>
					</Field>

					<Field>
						<Control>
							<Label>Weeks to Scan</Label>
							<Input type="number" value="3" />
						</Control>
					</Field>
					
					</Notification>
				</Column>
			</Columns>
		  </Section>
		);
	}
}
