
import React from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Spotify from 'react-native-spotify';

let spotifyOptions = {
    "clientID": "69708bf2b35e4cc2b208fafa600ce9a9",
    "sessionUserDefaultsKey": "SpotifySession",
    "redirectURL": "MoodMixer://auth",
    "scopes": ["user-read-private", "playlist-read", "playlist-read-private", "streaming"],
};

export default class App extends React.Component {

    render() {

            Spotify.initialize(spotifyOptions, (loggedIn, error) => {
                if (error != null) {
                    Alert.alert("ERROR", error.message);
                }
            });

    return (
      <View style={styles.container}>
        <Text>Login up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
import React, { Component } from 'react';
import {
	ActivityIndicator,
	Alert,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Spotify from 'react-native-spotify';

export default class App extends React.Component{
	static navigationOptions = {
		header: null
	};

	constructor()
	{
		super();

		this.state = {spotifyInitialized: false};
		this.spotifyLoginButtonWasPressed = this.spotifyLoginButtonWasPressed.bind(this);
	}

	goToPlayer()
	{
		const navAction = NavigationActions.reset({
			index: 0,
			actions: [
			  NavigationActions.navigate({ routeName: 'player'})
			]
		});
		this.props.navigation.dispatch(navAction);
	}

	componentDidMount()
	{
		if(!Spotify.isInitialized())
		{
			//initialize spotify
			var spotifyOptions = {
        "clientID": "69708bf2b35e4cc2b208fafa600ce9a9",
        "sessionUserDefaultsKey": "SpotifySession",
        "redirectURL": "MoodMixer://auth",
        "scopes": ["user-read-private", "playlist-read", "playlist-read-private", "streaming"],
			};
			Spotify.initialize(spotifyOptions, (loggedIn, error) => {
				if(error != null)
				{
					Alert.alert("Error", error.message);
				}
				//update UI state
				this.setState((state) => {
					state.spotifyInitialized = true;
					return state;
				});
				//handle initialization
				if(loggedIn)
				{
					Alert.alert("TEST")
				}
			});
		}
		else
		{
			//update UI state
			this.setState((state) => {
				state.spotifyInitialized = true;
				return state;
			});
			//handle logged in
			if(Spotify.isLoggedIn())
			{
				this.goToPlayer();
			}
		}
	}

	spotifyLoginButtonWasPressed()
	{
		Spotify.login((loggedIn, error) => {
			if(error)
			{
				Alert.alert("Error", error.message);
			}
			if(loggedIn)
			{
				this.goToPlayer();
			}
		});
	}

	render()
	{
		if(!this.state.spotifyInitialized)
		{
			return (
				<View style={styles.container}>
					<ActivityIndicator animating={true} style={styles.loadIndicator}>
					</ActivityIndicator>
					<Text style={styles.loadMessage}>
						Loading...
					</Text>
				</View>
			);
		}
		else
		{
			return (
				<View style={styles.container}>
					<Text style={styles.greeting}>
						Hey! You! Log into your spotify
					</Text>
					<TouchableHighlight onPress={this.spotifyLoginButtonWasPressed} style={styles.spotifyLoginButton}>
						<Text style={styles.spotifyLoginButtonText}>Log into Spotify</Text>
					</TouchableHighlight>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},

	loadIndicator: {
		//
	},
	loadMessage: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},

	spotifyLoginButton: {
		justifyContent: 'center',
		borderRadius: 18,
		backgroundColor: 'green',
		overflow: 'hidden',
		width: 200,
		height: 40,
		margin: 20,
	},
	spotifyLoginButtonText: {
		fontSize: 20,
		textAlign: 'center',
		color: 'white',
	},

	greeting: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});
*/