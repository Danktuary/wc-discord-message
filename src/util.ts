export type DiscordTimestamp = Date | string

const dateRegex: RegExp = /^\d{2}\/\d{2}\/\d{4}$/

const padZeroes = (value: string): string => {
	const [month, day, year]: string[] = value.split('/')
	return `${month.padStart(2, '0')}/${day.padStart(2, '0')}/${year}`
}

const formatDate = (value: DiscordTimestamp): string => {
	if (!(value instanceof Date)) return value
	return padZeroes(`${value.getMonth() + 1}/${value.getDate()}/${value.getFullYear()}`)
}

export const handleTimestamp = (value: DiscordTimestamp): string => {
	if ((!(value instanceof Date) && typeof value !== 'string')) {
		throw new TypeError('Timestamp prop must be a Date object or a string in the format of `01/31/2000`.')
	}
	else if (typeof value === 'string' && !dateRegex.test(value)) {
		throw new Error('Date string must be in the format of `01/31/2000`.')
	}

	return formatDate(value)
}

export const findSlotElement = (elements: HTMLCollection, name: string): Element => {
	return Array.from(elements).find((child: Element): boolean => {
		return child.slot && child.slot === name
	})
}

const discordAvatars: { [key: string]: string } = {
	blue: 'blue.png',
	gray: 'gray.png',
	green: 'green.png',
	orange: 'orange.png',
	red: 'red.png',
};

export const avatars = Object.assign({ 'default': discordAvatars.blue }, discordAvatars)
