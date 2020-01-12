type DiscordMessageOptions = {
	defaultTheme?: string
	defaultMode?: string
}

const { $discordMessage = {} }: { $discordMessage: DiscordMessageOptions } = window as any

export const defaultTheme: string = $discordMessage.defaultTheme !== 'light' ? 'dark' : 'light'

export const defaultMode: string = $discordMessage.defaultMode !== 'compact' ? 'cozy' : 'compact'
