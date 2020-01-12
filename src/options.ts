type Avatars = {
	blue: string
	gray: string
	green: string
	orange: string
	red: string
	[key: string]: string
}

type DiscordMessageOptions = {
	avatars?: Avatars
	defaultTheme?: string
	defaultMode?: string
}

const { $discordMessage = {} }: { $discordMessage: DiscordMessageOptions } = window as any

const discordAvatars: Avatars = {
	blue: 'https://cdn.discordapp.com/attachments/654503812593090602/665721745466195978/blue.png',
	gray: 'https://cdn.discordapp.com/attachments/654503812593090602/665721746569166849/gray.png',
	green: 'https://cdn.discordapp.com/attachments/654503812593090602/665721748431306753/green.png',
	orange: 'https://cdn.discordapp.com/attachments/654503812593090602/665721750201434138/orange.png',
	red: 'https://cdn.discordapp.com/attachments/654503812593090602/665721752277483540/red.png',
};

const globalAvatars: any = $discordMessage.avatars ?? {}

export const avatars: Avatars = Object.assign(discordAvatars, globalAvatars, {
	default: discordAvatars[globalAvatars.default] ?? globalAvatars.default ?? discordAvatars.blue
})
export const defaultTheme: string = $discordMessage.defaultTheme !== 'light' ? 'dark' : 'light'

export const defaultMode: string = $discordMessage.defaultMode !== 'compact' ? 'cozy' : 'compact'
