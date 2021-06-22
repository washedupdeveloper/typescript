export const capitalizeFirstCharacter = (str: string): string => {
	return str.replace(/^\w/, (firstChar) => firstChar.toUpperCase());
};
