// добавить типизацию
export const getTagsEqual = (firstTags: any, secondTags: any) => {
	console.log(
		JSON.stringify(firstTags),
		JSON.stringify(secondTags),
		JSON.stringify(firstTags) === JSON.stringify(secondTags),
	);
	return JSON.stringify(firstTags) === JSON.stringify(secondTags);
};
