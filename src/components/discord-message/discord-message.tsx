import { Component, Element, getAssetPath, h, Host, Prop, Watch } from '@stencil/core'
import { avatars, DiscordTimestamp, handleTimestamp } from '../../util'
import { AuthorInfo } from '../author-info/author-info'

@Component({
	tag: 'discord-message',
	styleUrl: 'discord-message.css',
	assetsDirs: ['assets'],
})
export class DiscordMessage {
	/**
	 * The DiscordMessage element.
	 */
	@Element() el: HTMLElement

	/**
	 * The message author's username.
	 */
	@Prop() author: string = 'User'

	/**
	 * The message author's avatar. Can be a relative path or external link.
	 */
	@Prop() avatar: string

	/**
	 * Whether the message author is a bot or not.
	 */
	@Prop() bot: boolean = false

	/**
	 * Whether the message has been edited or not.
	 */
	@Prop() edited: boolean = false

	/**
	 * The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
	 */
	@Prop() roleColor: string

	/**
	 * The timestamp to use for the message date. When supplying a string, the format must be `01/31/2000`.
	 */
	@Prop({ mutable: true, reflect: true }) timestamp: DiscordTimestamp = new Date()

	@Watch('timestamp')
	updateTimestamp(value: DiscordTimestamp): string {
		return handleTimestamp(value)
	}

	componentWillLoad() {
		try {
 			this.timestamp = handleTimestamp(this.timestamp)
		} catch(error) {
			return Promise.reject(error)
		}
	}

	render() {
		const parent = this.el.parentElement as any

		if (parent.tagName.toLowerCase() !== 'discord-messages') {
			throw new Error('All <discord-message> components must be direct children of <discord-messages>.')
		}

		const avatarPath = avatars.hasOwnProperty(this.avatar) || !this.avatar
			? getAssetPath(`./assets/avatars/${avatars[this.avatar || 'default']}`)
			: this.avatar

		const highlightMention: boolean = Array.from(this.el.children).some((child: HTMLDiscordMentionElement): boolean => {
			return child.tagName.toLowerCase() === 'discord-mention' && child.highlight && child.type !== 'channel'
		})

		return (
			<Host class="discord-message">
				<div class="discord-author-avatar">
					<img src={avatarPath} alt={this.author} />
				</div>
				<div class="discord-message-content">
					{!parent.compactMode
						? (
							<div>
								<AuthorInfo author={this.author} bot={this.bot} roleColor={this.roleColor} />
								<span class="discord-message-timestamp">{this.timestamp}</span>
							</div>
						)
						: ''
					}
					<div class={`discord-message-body ${highlightMention ? 'discord-highlight-mention': ''}`}>
						{parent.compactMode
							? (
								<span>
									<span class="discord-message-timestamp">{this.timestamp}</span>
									<AuthorInfo author={this.author} bot={this.bot} roleColor={this.roleColor} />
								</span>
							)
							: ''
						}
						<slot></slot>
						{this.edited ? <span class="discord-message-edited">(edited)</span> : ''}
					</div>
					<slot name="embeds"></slot>
				</div>
			</Host>
		)
	}
}
