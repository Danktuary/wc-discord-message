import { Component, h, Host, Prop } from '@stencil/core'

@Component({
	tag: 'discord-embed-field',
	styleUrl: 'discord-embed-field.css',
})
export class DiscordEmbedField {
	/**
	 * The field's title.
	 */
	@Prop() fieldTitle!: string

	/**
	 * Whether this field should be displayed inline or not.
	 */
	@Prop() inline: boolean = false

	render() {
		return (
			<Host class={`discord-embed-field ${this.inline ? 'discord-inline-field' : ''}`}>
				<div class="discord-field-title">{this.fieldTitle}</div>
				<slot></slot>
			</Host>
		)
	}
}
