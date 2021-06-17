type Avatars = {
	blue: string
	gray: string
	green: string
	orange: string
	red: string
	[key: string]: string
}

export type Profile = {
	author?: string
	avatar?: string
	bot?: boolean
	roleColor?: string
}

type DiscordMessageOptions = {
	avatars?: Avatars
	profiles?: { [key: string]: Profile }
	defaultTheme?: string
	defaultMode?: string
}

const { $discordMessage = {} }: { $discordMessage: DiscordMessageOptions } = window as any

const discordAvatars: Avatars = {
	blue: 'https://cdn.discordapp.com/embed/avatars/0.png',
	gray: 'https://cdn.discordapp.com/embed/avatars/1.png',
	green: 'https://cdn.discordapp.com/embed/avatars/2.png',
	orange: 'https://cdn.discordapp.com/embed/avatars/3.png',
	red: 'https://cdn.discordapp.com/embed/avatars/4.png',
  pink: 'https://cdn.discordapp.com/embed/avatars/5.png',
}

const globalAvatars: any = $discordMessage.avatars ?? {}

export const avatars: Avatars = Object.assign(discordAvatars, globalAvatars, {
	default: discordAvatars[globalAvatars.default] ?? globalAvatars.default ?? discordAvatars.blue,
})

export const profiles: { [key: string]: Profile } = $discordMessage.profiles ?? {}

export const defaultTheme: string = $discordMessage.defaultTheme !== 'light' ? 'dark' : 'light'

export const defaultMode: string = $discordMessage.defaultMode !== 'compact' ? 'cozy' : 'compact'
