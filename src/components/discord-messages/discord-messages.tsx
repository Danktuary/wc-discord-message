import { Component, h, Host, Prop } from '@stencil/core'

@Component({
	tag: 'discord-messages',
	styleUrl: 'discord-messages.css',
})
export class DiscordMessages {
	/**
	 * Whether to use light theme or not.
	 */
	@Prop() lightTheme: boolean = false

	/**
	 * Whether to use compact mode or not.
	 */
	@Prop() compactMode: boolean = false

	render() {
		const layoutClasses: string[] = []
		if (this.lightTheme) layoutClasses.push('discord-light-theme')
		if (this.compactMode) layoutClasses.push('discord-compact-mode')

		return (
			<Host class={`discord-messages ${layoutClasses.join(' ')}`}>
				<slot></slot>
			</Host>
		)
	}
}
