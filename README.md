# WC Discord Message

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

Web components to easily build and display fake Discord messages on your webpages.

If you use Vue in your project, you should use [vue-discord-message](https://vue-discord-message.netlify.com/).

## Features

* Design modeled after [Discord](https://discordapp.com/) itself
* Comfy and compact mode support
* Dark and light themes support
* Set the message author's username, avatar (use defaults or provide your own), role color, and "bot" tag status
* Display fake user, role, and channel mentions
* Complete embed support
* Simple syntax!

## Preview

![wc-discord-message preview](https://i.imgur.com/xHL8Xyx.png)

```html
<discord-messages>
	<discord-message>
		Hey guys, I'm new here! Glad to be able to join you all!
	</discord-message>
	<discord-message author="Dawn" avatar="red">
		Hi, I'm new here too!
	</discord-message>
	<discord-message author="Sanctuary" avatar="https://i.imgur.com/FPWMhCa.png" role-color="#0099ff">
		Hey, <discord-mention>User</discord-mention> and <discord-mention>Dawn</discord-mention>. Welcome to our server! Be sure to read through the <discord-mention type="channel">rules</discord-mention>. You can ping <discord-mention type="role" color="#70f0b4">Support</discord-mention> if you need help.
	</discord-message>
	<discord-message author="Twelve" avatar="https://i.imgur.com/Mc0F0Hf.png" role-color="#70f0b4">
		Hello everyone! How's it going?
	</discord-message>
	<discord-message author="User">
		Thank you <discord-mention highlight>Sanctuary</discord-mention>!
	</discord-message>
	<discord-message author="Yotsuba" avatar="https://i.imgur.com/amw0MGJ.png">
		I'm doing well, <discord-mention>Twelve</discord-mention>. What about yourself?
	</discord-message>
	<discord-message author="Twelve" avatar="https://i.imgur.com/Mc0F0Hf.png" role-color="#70f0b4">
		!8ball How am I doing today?
	</discord-message>
	<discord-message author="Rinon" avatar="https://i.imgur.com/axQ9wJl.png" role-color="violet" bot>
		Yes.
	</discord-message>
</discord-messages>
```

## Installation

### Package managers

If you're using a package manager, you can install it like normal.

```bash
yarn add wc-discord-message
# or npm install wc-discord-message
```

Import it and then use it in your HTML templates, JSX, etc.

```js
import 'wc-discord-message';

// ...

export default class App {
	render() {
		return (
			<discord-messages>
				<discord-message>
					Hey guys, I'm new here! Glad to be able to join you all!
				</discord-message>
				<discord-message author="Dawn" avatar="red">
					Hi, I'm new here too!
				</discord-message>
			</discord-messages>
		)
	}
}
```

### Browser build

If you're want to use the browser build, you can pull it in via unpkg.

```html
<script src="https://unpkg.com/wc-discord-message"></script>
```

And then use it anywhere in your HTML.

```html
<body>
	<discord-messages>
		<discord-message author="Sanctuary" avatar="https://i.imgur.com/0TeacfY.png" role-color="#0099ff">
			Hey, <discord-mention>User</discord-mention> and <discord-mention>Dawn</discord-mention>. Welcome to our server!
		</discord-message>
	</discord-messages>
</body>
```

## Usage

The syntax is kept fairly simple. Here's a basic example of a regular conversation:

```html
<discord-messages>
	<discord-message>
		Hey guys, I'm new here! Glad to be able to join you all!
	</discord-message>
	<discord-message author="Dawn" avatar="red">
		Hi, I'm new here too!
	</discord-message>
	<discord-message author="Sanctuary" avatar="https://i.imgur.com/FPWMhCa.png" role-color="#0099ff">
		Hey, <discord-mention>User</discord-mention> and <discord-mention>Dawn</discord-mention>. Welcome to our server!
	</discord-message>
</discord-messages>
```

## Notes

### Default font

By default, this plugin uses the Google Fonts CDN to pull in the Roboto font. This isn't the same font Discord uses, so if you want to provide your own, you can override the CSS.

```css
/* index.css */
.discord-messages {
	font-family: 'Your Font', sans-serif;
}
```

### Avatar shortcuts

The current avatar shortcut strings available are "blue" (default), "gray", "green", "orange", and "red". These shortcuts map to the following image links:

```json
{
	"blue": "https://cdn.discordapp.com/attachments/654503812593090602/665721745466195978/blue.png",
	"gray": "https://cdn.discordapp.com/attachments/654503812593090602/665721746569166849/gray.png",
	"green": "https://cdn.discordapp.com/attachments/654503812593090602/665721748431306753/green.png",
	"orange": "https://cdn.discordapp.com/attachments/654503812593090602/665721750201434138/orange.png",
	"red": "https://cdn.discordapp.com/attachments/654503812593090602/665721752277483540/red.png"
}
```

If you want to add to or override the shortcuts, you can set them via `window.$discordMessage.avatars`.

```js
window.$discordMessage = {
	avatars: {
		'default': 'green'
		jojo: 'https://i.imgur.com/BOlehTj.jpg',
		djs: require('./assets/discord-avatar-djs.png'),
	},
}
```

### Profile shortcuts

Sometimes you'll want to use the same message data across multiple messages. You can do so by providing an object of profiles in `window.$discordMessage.profiles`.

```js
window.$discordMessage = {
	profiles: {
		sanc: {
			author: 'Sanctuary',
			avatar: 'https://i.imgur.com/0TeacfY.png',
		},
		rinon: {
			author: 'Rinon',
			avatar: 'https://i.imgur.com/axQ9wJl.png',
			bot: true,
			roleColor: '#ee82ee',
		},
	},
}
```

And then in your HTML:

```html
<discord-messages>
	<discord-message profile="rinon">
		Welcome to our server, <mention>Sanctuary</mention>!
	</discord-message>
	<discord-message profile="sanc">
		Hey, glad to be here!
	</discord-message>
</discord-messages>
```

### Components notes

Below are notes for a few certain components. If you want to see what props each component has, check their readme.md file in the respective [`/src/components/`](https://github.com/Danktuary/wc-discord-message/blob/master/src/components/) folder.

#### DiscordMessages component

This is a wrapper for any child `<discord-message>` component. It must be used in order for messages to display properly.

#### DiscordMention component

If the default slot is left empty, the mention will be rendered as `'User'`, `'Role'`, or `'channel`', depending on the `type` prop given.

#### DiscordEmbed component

An embed that can be attached to the end of your messages. The default slot is used for the embed's description. The `footer` slot is used for the footer text.

To ensure the embed gets displayed correctly inside your message, be sure to give it the proper `slot` attribute.

```html
<discord-message>
	Hi, I'm part of the normal message content.
	<discord-embed slot="embeds" color="#0099ff">
		Hi, I'm part of the embed message content.
	</discord-embed>
</discord-message>
```

#### EmbedFields component

A wrapper for any child `<discord-embed-field>` components. Must be used in order for fields to display properly. To ensure the embed fields gets displayed correctly inside your embed, be sure to give it the proper `slot` attribute.

```html
<discord-message>
	<discord-embed slot="embeds">
		Hi, I'm part of the embed message content.
		<discord-embed-fields slot="fields">
			<!-- Embed fields go here -->
		</discord-embed-fields>
	</discord-embed>
</discord-message>
```

#### EmbedField component

At least 2 consecutive fields need to be marked as inline in order for them to actually display next to each other. The maximum amount of inline fields is 3, and drops to 2 if an embed thumbnail is used.

```html
<discord-message>
	<discord-embed slot="embeds">
		Hi, I'm part of the embed message content.
		<discord-embed-fields slot="fields">
			<discord-embed-field field-title="Inline field" inline>
				Field content.
			</discord-embed-field>
			<discord-embed-field field-title="Inline field" inline>
				Field content.
			</discord-embed-field>
		</discord-embed-fields>
	</discord-embed>
</discord-message>
```
