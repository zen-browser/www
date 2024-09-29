export function useClipboard(valueToCopy: string) {
	const copyToClipboard = () => {
		navigator.clipboard.writeText(valueToCopy);
	};

	return copyToClipboard;
}
