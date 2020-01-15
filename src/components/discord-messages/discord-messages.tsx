import { Component, h, Host, Prop } from '@stencil/core'
import { defaultTheme, defaultMode } from '../../options'

@Component({
	tag: 'discord-messages',
	styleUrl: 'discord-messages.css',
})
export class DiscordMessages {
	/**
	 * Whether to use light theme or not.
	 */
	@Prop({ mutable: true, reflect: true }) lightTheme: boolean

	/**
	 * Whether to use compact mode or not.
	 */
	@Prop({ mutable: true, reflect: true }) compactMode: boolean

	componentWillLoad() {
		if (this.lightTheme === true || defaultTheme === 'light' && this.lightTheme !== false) {
			this.lightTheme = true
		}

		if (this.compactMode === true || defaultMode === 'compact' && this.compactMode !== false) {
			this.compactMode = true
		}
	}

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
