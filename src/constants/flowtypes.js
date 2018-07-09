export type Article = {
	category: Array<string>,
	comments: Array<{
		author: string,
		content: string,
		lastEdited: number
	}>,
	content: string,
	lastEdited: number,
	likes: Array<string>,
	title: string,
	writtenBy: string,
	_id: string
};
