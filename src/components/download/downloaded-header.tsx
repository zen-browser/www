export const DownloadedHeader = () => {
	return (
		<>
			<h1 className="text-6xl font-bold">Downloaded! ❤️</h1>
			<p className="mt-3 text-muted-foreground">
				Your download of Zen Browser will begin shortly. Enjoy browsing the web
				with Zen!
			</p>
			<div className="mt-5 flex items-center font-bold">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/zen-browser"
				>
					Source Code
				</a>
				<a
					target="_blank"
					className="ml-5"
					rel="noopener noreferrer"
					href="https://patreon.com/zen_browser?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
				>
					Donate
				</a>
				<a className="ml-5" href="/release-notes/latest">
					Release Notes
				</a>
			</div>
		</>
	);
};
