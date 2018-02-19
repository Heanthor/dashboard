import React, { Component } from 'react';
import { Columns, Column, Section, Title, Label, Control, Select, Notification, Field, Button, Box, Delete } from 'bloomer';
import { Container } from 'bloomer/lib/layout/Container';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import { Input } from 'bloomer/lib/elements/Form/Input';

import Spinner from './components/spinner';
import BackButton from './components/backButton';

// @flow
export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			// DISPLAY state
			raid: "antorus",
			simType: null, // player or guild

			region: "US",
			difficulty: "heroic",
			weeksToScan: 3,
			
			playerName: "",
			playerRealm: "",
			guildName: "",
			guildRealm: "",

			// ANIMATION state
			animateArrow: "",
			loadingStatus: "loading",

			// ERROR state
			validationError: false,
			serverError: false,
			errorMessage: ""
		};

		this.handleInput = this.handleInput.bind(this);
		this.mouseOverGoButton = this.mouseOverGoButton.bind(this);
		this.mouseLeaveGoButton = this.mouseLeaveGoButton.bind(this);
		this.getShowHideClass = this.getShowHideClass.bind(this);
		this.onGoClick = this.onGoClick.bind(this);
		this.onCancelClick = this.onCancelClick.bind(this);
		this.renderValidationErrorNotification = this.renderValidationErrorNotification.bind(this);
		this.renderServerErrorNotification = this.renderServerErrorNotification.bind(this);
	}

	/**
	 * Get show/hide class for initial forms
	 * @param {string} loadingStatus 
	 */
	getShowHideClass(loadingStatus) {
		return loadingStatus === "loading" ? "hide" : "show";
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

	onGoClick() {
		const guildName = this.state.guildName;
		const guildRealm = this.state.guildRealm;

		if (guildName.length < 1 || guildRealm.length < 1) {
			this.setState({
				 validationError: true,
				 errorMessage: "Guild or realm name cannot be blank."
			});
		} else {
			this.setState({
				simType: null,
				loadingStatus: "loading",
				animateArrow: "animate-rev",
				validationError: false
			});
		}
	}

	onCancelClick() {
		// wait for api response before cancelling
		this.setState({
			loadingStatus: null
		});
	}

	// RENDER FUNCTIONS

	renderGuildSimForm() {
		return this.state.simType === "guild" ? (
			<Box className="guild-box">
				{this.renderValidationErrorNotification()}

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
							onMouseLeave={this.mouseLeaveGoButton}
							onClick={this.onGoClick}>
						Go&nbsp;<i className="fas fa-angle-double-right"></i></Button>
					</Control>
				</Field>
			</Box>
		) : null;
	}

	renderPlayerSimForm() {
		return this.state.simType === "player" ? (
			<Box className="guild-box">
				{this.renderValidationErrorNotification()}

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
							onMouseLeave={this.mouseLeaveGoButton}
							onClick={this.onGoClick}>
						Go&nbsp;<i className="fas fa-angle-double-right"></i></Button>
					</Control>
				</Field>
			</Box>
		) : null;
	}

	renderOptionsPane() {
		return (
		<Notification className={`transitionable notification-pane ${this.getShowHideClass(this.state.loadingStatus)}`}>
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
				<Select name="difficulty" value={this.state.difficulty} onChange={this.handleInput} >
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
				<Input type="number" name="weeksToScan" value={this.state.weeksToScan} onChange={this.handleInput} min="1"/>
			</Control>
		</Field>
		
		</Notification>
		);
	}

	renderMainForm() {
		return (
			<div className={`transitionable ${this.getShowHideClass(this.state.loadingStatus)}`}>
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
						<Button isColor={this.state.simType === "guild" ? "primary" : "info"} onClick={() => this.setState({ simType: "guild" })}>Guild Sim</Button>
					</Control>
					<Control>
						<Button isColor={this.state.simType === "player" ? "primary" : "info"} onClick={() => this.setState({ simType: "player" })}>Player Sim</Button>
					</Control>
				</Field>
			</div>
		);
	}

	renderSpinner() {
		return (
			<Container className={`spinner-container has-text-centered transitionable ${this.state.loadingStatus === "loading" ? "show" : "hide"}`}>
				<Spinner percentComplete={0} highlightClass={this.state.raid} />
				<BackButton onClick={this.onCancelClick} hoverClass={this.state.raid} />
			</Container>
		);
	}

	renderValidationErrorNotification() {
		return this.state.validationError ? (
			<Notification isColor="danger">
				<Delete onClick={() => this.setState({ validationError: false })} />
				{this.state.errorMessage}
			</Notification>
		) : null;
	}

	renderServerErrorNotification() {
		return this.state.serverError ? (
			<Notification isColor="danger">
				<Delete onClick={() => this.setState({ serverError: false })} />
				{this.state.errorMessage}
			</Notification>
		) : null;
	}

	renderProgressTextBox() {
		return (
			<div className={`progress-container transitionable has-text-centered ${this.state.loadingStatus === "loading" ? "show" : "hide"}`}>
				<span>Finished player <strong>Heanthor</strong> - Boss <strong>FirstBoss</strong></span><br />
				<span>Finished player <strong>Heanthor</strong> - Boss <strong>FirstBoss</strong></span><br />
				<span>Finished player <strong>Heanthor</strong> - Boss <strong>FirstBoss</strong></span><br />
				<span>Finished player <strong>Heanthor</strong> - Boss <strong>FirstBoss</strong></span><br />
				<span>Finished player <strong>Heanthor</strong> - Boss <strong>FirstBoss</strong></span><br />
				<span>Finished player <strong>Heanthor</strong> - Boss <strong>FirstBoss</strong></span><br />
				<span>Finished player <strong>Heanthor</strong> - Boss <strong>FirstBoss</strong></span><br />
				<span>Finished player <strong>Heanthor</strong> - Boss <strong>FirstBoss</strong></span><br />
				<span>Finished player <strong>Heanthor</strong> - Boss <strong>FirstBoss</strong></span><br />
			</div>
		);
	}

	renderFooter() {
		return (
			<div className="footer-div has-text-centered">
			<a href="https://bulma.io">
				<img src="https://bulma.io/images/made-with-bulma--semiblack.png" alt="Made with Bulma" width="128" height="24" />
			</a>
			</div>
		);
	}

	render() {
		return (
			<Section className={`bg-raid-color ${this.state.raid}`}>
			<Container className="main-container">
			<Columns className="columns-short">
			<Column isSize="3/4">
				<Title>
					Heanthor's Simcraft Runner
				</Title>
				<Subtitle>
					Run sims on an <strong>entire guild</strong>, or a <strong>single player</strong>.<br/>
					Get meaningful results for <strong>all Legion raids</strong>.
				</Subtitle>
				{this.renderServerErrorNotification()}
				{this.renderMainForm()}
				
				{this.renderGuildSimForm()}
				{this.renderPlayerSimForm()}
				</Column>

				<Column>
					{this.renderOptionsPane()}
				</Column>
			</Columns>
			<Columns>
				{this.renderSpinner()}
			</Columns>
				{this.renderProgressTextBox()}
			
				{this.renderFooter()}
			</Container>
		  </Section>
		);
	}
}
