import { Component, Element, Prop, h, Watch } from '@stencil/core'
import hexToRgba from 'hex-to-rgba'

@Component({
	tag: 'discord-mention',
	styleUrl: 'discord-mention.css',
})
export class DiscordMention {
	/**
	 * The DiscordMention element
	 */
	@Element() el: HTMLElement

	/**
	 * The ref to `<span class="discord-mention">` element
	 */
	private mentionSpan!: HTMLElement

	/**
	 * Whether this entire message block should be highlighted (to emulate the "logged in user" being pinged).
	 */
	@Prop() highlight: boolean = false

	/**
	 * The color to use for this mention. Only works for role mentions and must be in hex format.
	 */
	@Prop() color: string

	/**
	 * The name of the user, channel, or role to mention. If omitted, it will be set based upon the `type` prop (i.e. 'User', 'channel', or 'Role').
	 */
	@Prop() name?: string

	/**
	 * The type of mention this should be. This will prepend the proper prefix character. Valid values: `user`, `channel`, `role`
	 */
	@Prop() type: string = 'user'

	@Watch('type')
	handleType(value: string) {
		if (typeof value !== 'string') {
			throw new TypeError('DiscordMention `type` prop must be a string.')
		} else if (!['user', 'channel', 'role'].includes(value)) {
			throw new RangeError('DiscordMention `type` prop must be one of: \'user\', \'channel\', \'role\' ')
		}
	}

	componentWillLoad() {
		try {
			this.handleType(this.type)
		} catch (error) {
			return Promise.reject(error)
		}
	}

	componentDidLoad() {
		if (this.color && this.type === 'role') {
			this.mentionSpan.addEventListener('mouseover', this.setHoverColor.bind(this))
			this.mentionSpan.addEventListener('mouseout', this.resetHoverColor.bind(this))
		}
	}

	componentDidUnload() {
		if (this.color && this.type === 'role') {
			this.mentionSpan.removeEventListener('mouseover', this.setHoverColor.bind(this))
			this.mentionSpan.removeEventListener('mouseout', this.resetHoverColor.bind(this))
		}
	}

	setHoverColor() {
		this.mentionSpan.style.backgroundColor = hexToRgba(this.color, 0.3)
	}

	resetHoverColor() {
		this.mentionSpan.style.backgroundColor = hexToRgba(this.color, 0.1)
	}

	render() {
		const name: string = !this.name && this.type === 'channel' ? this.type : this.type.charAt(0).toUpperCase() + this.type.slice(1)
		const colorStyle: { color?: string, 'background-color'?: string } = !this.color || this.type !== 'role'
			? {}
			: {
				color: this.color,
				'background-color': hexToRgba(this.color, 0.1)
			}

		return (
			<span style={colorStyle} class="discord-mention" ref={el => this.mentionSpan = el as HTMLElement}>
				{this.type === 'channel' ? '#' : '@'}{name}
			</span>
		)
	}
}
