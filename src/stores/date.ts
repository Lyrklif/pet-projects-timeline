export function formatDate(date) {
	const options = { day: '2-digit', month: 'long', year: 'numeric' };

	return new Intl.DateTimeFormat('en-EN', options).format(new Date(date));
}
