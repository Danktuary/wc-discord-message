import { Component, h } from '@stencil/core'

@Component({
	tag: 'discord-embed-fields',
	styleUrl: 'discord-embed-fields.css',
})
export class DiscordEmbedFields {
	render() {
		return (
			<div class="discord-embed-fields">
				<slot></slot>
			</div>
		)
	}
}
