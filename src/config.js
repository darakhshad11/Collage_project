const { Colors } = require('discord.js');

const config = {
	ownerID: ['1168959748075429928'],
	token: 'MTIyMDc4NTcxNTYzMDMwOTQ0Ng.G6DxGX.UdNxaG4ShLFD-PY-I_S5kFrBzTz-JIHL9CqX1Y',
	// For looking up Twitch, Fortnite, Steam accounts
	api_keys: {
		// https://genius.com/developers
		genius: 'genuisAPI-KEY',
		// https://api.amethyste.moe/
		amethyste: 'amethysteAPI-Key',
		// https://api.egglord.dev/settings
		masterToken: '',
	},
	// add plugins/commands here if you don't want them loaded in the bot.
	disabledCommands: [],
	disabledPlugins: [],
	websiteURL: 'Bot\'s dashboard',
	// your support server
	SupportServer: {
		// Link to your support server
		link: 'https://discord.gg/tdyw2G7W',
		// Your support's server ID
		GuildID: '1222971701554577479',
		// This for using the suggestion command on your server
		ModRole: '751857618720522341',
		// What channel to post the suggestions
		SuggestionChannel: '1222971701554577482',
		// Where the bot will send Guild join/leave messages to
		GuildChannel: '1222973404395733143',
		// Where rate limits will be sent to, for investigation
		rateLimitChannelID: '1222975519738564649',
	},
	API: {
		port: 3000,
		secure: true,
		token: '123456789',
	},
	LavalinkNodes: [
		{ host: 'localhost', port: 5000, password: 'youshallnotpass' },
	],
	// URL to mongodb
	MongoDBURl: 'mongodb+srv://darakhsharayen9:darakhsha01@cluster0.kpldfgg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
	// embed colour
	embedColor: Colors.Default,
	// This will spam your console if you enable this but will help with bug fixing
	debug: false,
};

module.exports = config;
