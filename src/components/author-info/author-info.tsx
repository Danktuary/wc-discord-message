import { FunctionalComponent, h } from '@stencil/core'

interface AuthorInfoProps {
	author: string
	bot: boolean
	roleColor: string
}

export const AuthorInfo: FunctionalComponent<AuthorInfoProps> = ({ author, bot, roleColor }) => (
	<span class="discord-author-info">
		<span class="discord-author-username" style={{ color: roleColor }}>{author}</span>
		{bot ? <span class="discord-bot-tag">Bot</span> : ''}
	</span>
);
