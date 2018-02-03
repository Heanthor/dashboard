import React, { Component } from 'react';
import { Columns, Column, Section, Title, Label, Control, Select, Notification, Field, Button, Box } from 'bloomer';
import 'bulma/css/bulma.css';
import './mystyles.css';
import { Container } from 'bloomer/lib/layout/Container';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import { Input } from 'bloomer/lib/elements/Form/Input';

// @flow
export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			raid: "antorus",
			simType: null, // player or guild

			region: "US",
			difficulty: "heroic",
			weeksToScan: 3,
			
			playerName: "",
			playerRealm: "",
			guildName: "",
			guildRealm: "",

			animateArrow: ""
		};

		this.handleInput = this.handleInput.bind(this);
		this.mouseOverGoButton = this.mouseOverGoButton.bind(this);
		this.mouseLeaveGoButton = this.mouseLeaveGoButton.bind(this);
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

	handleInput(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	mouseOverGoButton() {
		this.setState({ animateArrow: "animate" });
	}

	mouseLeaveGoButton() {
		this.setState({ animateArrow: "animate-rev" });
	}

	// RENDER FUNCTIONS
	renderGuildSimForm() {
		return this.state.simType === "guild" ? (
			<Box>
				<Label>Guild</Label>
				<Field>
					<Control>
						<Input type="text" name="guildName" value={this.state.guildName} onChange={this.handleInput} />
					</Control>
				</Field>

				<Label>Realm</Label>
				<Field isGrouped="right">
					<Control isExpanded={true}>
						<Input type="text" name="guildRealm" value={this.state.guildRealm} onChange={this.handleInput} />
					</Control>
					<Control>
						<Button 
							isColor="info" 
							className={this.state.animateArrow} 
							onMouseEnter={this.mouseOverGoButton}
							onMouseLeave={this.mouseLeaveGoButton}>
						Go&nbsp;<i className="fas fa-angle-double-right"></i></Button>
					</Control>
				</Field>
			</Box>
		) : null;
	}

	renderPlayerSimForm() {
		return this.state.simType === "player" ? (
			<Box>
				<Label>Name</Label>
				<Field>
					<Control>
						<Input type="text" name="playerName" value={this.state.playerName} onChange={this.handleInput} />
					</Control>
				</Field>

				<Label>Realm</Label>
				<Field isGrouped="right">
					<Control isExpanded={true}>
						<Input type="text" name="playerRealm" value={this.state.playerRealm} onChange={this.handleInput} />
					</Control>
					<Control>
						<Button 
							isColor="info" 
							className={this.state.animateArrow} 
							onMouseEnter={this.mouseOverGoButton}
							onMouseLeave={this.mouseLeaveGoButton}>
						Go&nbsp;<i className="fas fa-angle-double-right"></i></Button>
					</Control>
				</Field>
			</Box>
		) : null;
	}

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
				<Field isGrouped={true}>
					<Control>
						<Select name="raid" defaultValue="antorus" onChange={this.handleInput}>
							<option value="nightmare">Emerald Nightmare</option>
							<option value="nighthold">Nighthold</option>
							<option value="tos">Tomb of Sargeras</option>
							<option value="antorus">Antorus</option>
						</Select>
					</Control>
					<Control>
						<Button isColor="primary" onClick={() => this.setState({ simType: "guild" })}>Guild Sim</Button>
					</Control>
					<Control>
						<Button isColor="primary" onClick={() => this.setState({ simType: "player" })}>Player Sim</Button>
					</Control>
				</Field>

				{this.renderGuildSimForm()}
				{this.renderPlayerSimForm()}

				</Column>

				<Column>
					<Notification isColor="primary"> {/* color change here */}
					<Field>
						<Label>Region</Label>
						<Control>
							<Select name="region" value={this.state.region} onChange={this.handleInput}>
								<option value="US">US</option>
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
							<Select name="difficulty" value={this.state.difficulty} onChange={this.handleInput}>
								<option value="lfr">LFR</option>
								<option value="normal">Normal</option>
								<option value="heroic">Heroic</option>
								<option value="mythic">Mythic</option>
							</Select>
						</Control>
					</Field>

					<Field>
						<Control>
							<Label>Weeks to Scan</Label>
							<Input type="number" name="weeksToScan" value={this.state.weeksToScan} onChange={this.handleInput} />
						</Control>
					</Field>
					
					</Notification>
				</Column>
			</Columns>
		  </Section>
		);
	}
}
