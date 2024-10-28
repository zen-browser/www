interface Fix {
	description: string;
	issue?: number;
}

export interface ReleaseNote {
	version: string;
	date: string;
	extra?: string;
	image?: boolean;
	fixes?: Fix[];
	features?: string[];
	breakingChanges?: string[];
	themeChanges?: string[];
	inProgress?: boolean;
	workflowId?: number;
}

export const releaseNotes: ReleaseNote[] = [
	{
		version: "1.0.0-a.1",
		date: "11/07/2024",
		extra:
			"This release will be the first release considered as stable. It's still in alpha, but it's the first release that we consider to be stable enough for daily use. You can start using it as your main browser right now if you are reading this!",
		features: [
			"Stable support for split views.",
			"Updated firefox to version 128.0",
			"Vertical tabs are now supported.",
			"Better profile management system.",
			"Full support for sidebar web panels.",
			"Other minor UI additions and improvements.",
			"Added support for an automatic update system.",
		],
		fixes: [
			{
				description:
					"Fixed a bug where the browser would crash when opening any extension.",
				issue: 34,
			},
			{
				description: "Fixed extension icon resolution on the toolbar.",
				issue: 35,
			},
			{
				description: "Applied a fix for that affected some linux users.",
				issue: 36,
			},
		],
	},
	{
		version: "1.0.0-a.2",
		date: "12/07/2024",
		extra:
			"This release is the second alpha release of the 1.0.0-alpha series. It includes a lot of bug fixes and improvements given the feedback we received from the first alpha release. This release is still not considered stable, but it's a big step towards the first stable release.",
		features: [
			"Added support for macOS aaarch64!",
			"Some performance improvements.",
		],
		fixes: [
			{
				description:
					"Fixed rounded corners of browser views for some websites.",
				issue: 48,
			},
			{
				description: "Fixed audio icon overlapping with the tab container.",
				issue: 41,
			},
			{
				description: "Changed to the correct branding for Zen Home.",
				issue: 50,
			},
		],
		breakingChanges: [
			"Removed support window's stub installer, it's under development.",
		],
	},
	{
		version: "1.0.0-a.3",
		date: "14/07/2024",
		extra:
			"This release is the third alpha release of the 1.0.0-alpha series. One big feature of this release is the new workspaces feature. This feature allows you to create different workspaces with different tabs and configurations. This release also includes a lot of bug fixes and improvements.",
		features: [
			"Added support for workspaces. (Experimental)",
			"Better support for macOS aarch64.",
		],
		fixes: [
			{
				description: "Fixed subwindows not being displayed correctly.",
				issue: 54,
			},
			{
				description: "Fixed zen's compact view mode.",
				issue: 45,
			},
			{
				description: "Fixed displaying tab icons when they are pinned.",
				issue: 52,
			},
		],
		breakingChanges: [
			"Changed the update URL meaning that since 1.0.0-a.2 (previous release) the browser will be able to update itself.",
		],
	},
	{
		version: "1.0.0-a.4",
		date: "14/07/2024",
		extra:
			"This release is the fourth alpha release of the 1.0.0-alpha series. This release includes a lot of bug fixes and improvements. The main focus of this release was to improve some small details and the compact view mode.\n\nThis release is very small but it includes some important fixes and I wont be able to work on the browser for the next few days so I decided to release it now.\n\nSorry!",
		features: [
			"Improved compact view mode.",
			"Tabs with no icons will now display a default icon.",
			"Improved workspaces feature (Experimental).",
			"Added support for pinned tabs.",
		],
		fixes: [
			{
				description:
					"Fixed the compact view mode not displaying correctly when it's not fullscreen.",
				issue: 58,
			},
			{
				description: 'Fixed "Weird margins in popup windows".',
				issue: 54,
			},
			{
				description: "Fixed pinned tab icons not being displayed correctly.",
				issue: 52,
			},
		],
	},
	{
		version: "1.0.0-a.5",
		date: "16/07/2024",
		extra:
			"This release is a very small release that includes some speed improvements and privacy improvements. This release is the fifth alpha release of the 1.0.0-alpha series.",
		features: [
			"Improved performance of the browser, specially for windows users.",
			"Changed some of firefox's default privacy settings to improve privacy.",
			"Allowed using GPU for rendering by default.",
			"Set the default user agent to Firefox.",
		],
		fixes: [
			{
				description: "Fixed license not being clear.",
				issue: 62,
			},
			{
				description:
					"Fixed Zen not being able to execute on some linux distributions.",
				issue: 36,
			},
			{
				description: "Fixed sites like whatsapp web not working correctly.",
				issue: 59,
			},
			{
				description: "Fixed some background overlapping the browser view.",
				issue: 48,
			},
		],
	},
	{
		version: "1.0.0-a.6",
		date: "24/07/2024",
		extra:
			"Hello there! Sorry for not updating so frequently, i've been busy this week.\n\nWelcome to the sixth alpha release of the 1.0.0-alpha series, gettin' closer to the first stable release!\n\nThis release includes a lot of bug fixes and improvements. The main focus of this release was to improve some small details and performance.",
		features: [
			"Improved performance of the browser.",
			"Added support for the latest version of Firefox (128.0.2).",
			"Improved the compact view mode.",
			"Started working on flatpak support.",
			"Improved the workspaces feature. (Added icons and control buttons)",
			"Implemented better branding for the Installer.",
			"Created better better visual feedback for the user. (Animations and Split views)",
			"Made an opt-out for the watermark.",
			"Enabled further customization for buttons (Pill buttons and sizes).",
			"Added performance focused user settings by default.",
			"Added theme-related profile avatars.",
			"Added a way to expand the sidebar tabs and to be able to customize the sidebar.",
			"Started experimenting with PGO builds. (linux only currently)",
			"Added scrollable tabs support.",
			"Added context menu button for quick sidebar website addition.",
			"Enabled smooth scrolling by default.",
			"Added container identification to the tab bar.",
		],
		fixes: [
			{
				description: "Fixed pinned tabs not being displayed correctly.",
			},
			{
				description:
					'Fixed pressing "Bookmarks" twice in the bottom left doesn\'t close the bookmarks tab',
				issue: 74,
			},
			{
				description: "Fixed wrong colors for web-content popups.",
				issue: 70,
			},
			{
				description: "Fixed padding when DOM fullscreen is enabled.",
				issue: 67,
			},
			{
				description: "Tab Bar Icons Hidden When Many Tabs are Open",
				issue: 64,
			},
			{
				description:
					"Disabled Zen Workspaces when private browsing is enabled.",
			},
			{
				description: "Fixed web view padding when opening a hidden popup.",
				issue: 54,
			},
			{
				description:
					'The Windows NSIS installer correctly installs the browser in the right path now instead of "Mozilla Developer Preview".',
			},
			{
				description: "Fixed overall windows installer branding.",
			},
			{
				description: "Fixed update URLs and support links.",
			},
		],
		breakingChanges: [
			"Updated CPU requirements for x86_64-v3",
			"Changed the way profile avatars are stored, may not be any issues, please report them if you find any.",
		],
	},
	{
		version: "1.0.0-a.7",
		date: "27/07/2024",
		extra:
			"This release is the seventh alpha release of the 1.0.0-alpha series. This release includes some important bug fixes and improvements. The main focus of this release was to improve some small details and improve stability.",
		features: [
			"A grid system for pinned tabs.",
			"Flatpak support.",
			"More performance improvements.",
			"Added newtab wallpapers (Version 2).",
			"Enabled hiding floating sidebar web panels when clicking outside.",
			"Branded more the installer.",
			"Used more intuitive icons for the sidebar.",
			"Improved animations.",
			"More compact view stability improvements.",
		],
		fixes: [
			{
				description: "Fixed the browser crashing when updating on linux.",
				issue: 76,
			},
			{
				description:
					"Fixed workspace deleting button, deleting the wrong workspace.",
				issue: 81,
			},
			{
				description: "Fixed the expanded sidebar for the compact view.",
				issue: 79,
			},
			{
				description: "Fixed small margin on hidden windows.",
			},
		],
	},
	{
		version: "1.0.0-a.8",
		date: "29/07/2024",
		extra:
			"This release is the eighth alpha release of the 1.0.0-alpha series.\n\nThis release includes some small bug fixes and improvements. The main focus of this release was to improve some small details and improve stability.",
		features: [
			"Added support for the latest version of Firefox (128.0.3).",
			"Improved the compact view mode.",
			"New logo for the browser!",
			"Imrpoved speed of the browser.",
		],
		fixes: [
			{
				description: "Lowered the CPU requirements for Linux users.",
			},
			{
				description:
					"Fixed browser updater crashing on some linux distributions.",
				issue: 76,
			},
			{
				description: "Added more contrast to web context menus on light mods.",
				issue: 88,
			},
			{
				description: "Fixed horizontal separator not showing on pinned tabs.",
				issue: 100,
			},
			{
				description:
					"Created a small hotfix for mods and some broken extensions.",
				issue: 89,
			},
		],
		breakingChanges: [
			"Changed the ID for flatpak to io.github.zen_browser.zen",
		],
	},
	{
		version: "1.0.0-a.11",
		date: "02/08/2024",
		extra:
			"This release is the eleventh alpha release of the 1.0.0-alpha series.\n\nWe skipped some releases because we were working on some big features and improvements. This release includes some big performance improvements and support for other platforms.\n\nHopefuly things will get a bit more stable from now on.",
		features: [
			"Added support for Windows Generic CPUs.",
			"Added support for Linux Generic CPUs.",
			"Added support for macOS x86_64 CPUs.",
			"Added support for macOS arm64 CPUs.",
			"Allow the user to change the sidebar's max width.",
			"Started to work on a new onboarding experience.",
			"Support for AppImage. Both specific and generic.",
			"New icons for MacOS and Windows/Linux (Different icons for each OS).",
			"Added a floating URL bar option.",
			"Added option to hide the toolbar as well in compact view.",
			"Move security button to the right of the URL bar.",
			"Added introduction for side web panels.",
			"Drastically improved the performance of the browser.",
		],
		fixes: [
			{
				description: "Fixed the browser crashing when updating on MacOS.",
				issue: 84,
			},
			{
				description:
					"Fixed 'Couldn't load XPCOM' error on some windows installations.",
				issue: 107,
			},
			{
				description: "Fixed the browser crashing when updating on Linux.",
			},
			{
				description: "Fixed pinned tabs not being properly aligned.",
				issue: 110,
			},
			{
				description: "Remove padding around close button on Windows.",
				issue: 134,
			},
			{
				description:
					"Fixed a part of the tab list and the corner border is showing/clipping in Fullscreen",
				issue: 124,
			},
		],
		breakingChanges: [
			"Changed the ID for AppImage to io.github.zen_browser.zen",
		],
	},
	{
		version: "1.0.0-a.12",
		date: "04/08/2024",
		extra:
			"This release is the twelfth alpha release of the 1.0.0-alpha series.\n\nThis release includes some nice features and improvements. The main focus of this release was to improve some small details and improve stability.",
		features: [
			"Added support for the vertical tabs to remember their width.",
			"Added support for disallowing the sidebar web panels to closed when clicked outside and floating (Settings).",
			"Added support for the sidebar web panels to remember their width and if they are floating.",
			"Allow installing unsigned extensions.",
			"Imrpoved onboarding experience.",
			"New compact mode design, it's much better now.",
			"Reduced CPU requirements for MacOS Intel CPUs.",
			"Reduced blur for floating URL bar.",
			"Allow the sidebar to be wider, customisable in about:config.",
		],
		fixes: [
			{
				description: "Task Manager Icon Missing in Flatpak Version",
				issue: 146,
			},
			{
				description:
					'Clicking "Next" on "Choose your search engine" intro page does nothing',
				issue: 145,
			},
			{
				description: "Crash Report on Intel Mac running Monterey 12.7",
				issue: 144,
			},
			{
				description: "Fixed pinned tabs not being properly aligned.",
			},
			{
				description: '"Delete Web Panel" closes the sidebar',
				issue: 143,
			},
			{
				description: "Disallow remove workspace deletion for default workspace",
				issue: 136,
			},
			{
				description: "Fixed small sidebar display bug",
				issue: 125,
			},
		],
	},
	{
		version: "1.0.0-a.13",
		date: "05/08/2024",
		extra:
			"This is a smaller release to fix some bugs and improve some small details.\n\nIm going to try doing more frequent releases from now on, see how it goes.",
		features: ["Allow to remember sidebar width even after collapsing it."],
		fixes: [
			{
				description: "Task Manager Icon Missing in Flatpak Version",
				issue: 146,
			},
			{
				description: "Condensed Vertical Tabs not working in Compact Mode",
				issue: 160,
			},
			{
				description: "Remember sidebar width on toggle",
				issue: 149,
			},
			{
				description: "Fixed startup issue with AppImage",
			},
			{
				description: "Fixed typos on the onboarding experience.",
			},
		],
	},
	{
		version: "1.0.0-a.15",
		date: "07/08/2024",
		extra:
			"This release is the fifteenth alpha release of the 1.0.0-alpha series.\n\nI've skipped version 1.0.0-a.14 because of the quality of the release, it was not good enough to be released.\n\nThis release includes some bug fixes and improvements.\n\nThanks everyone for the feedback! It may look like a small release but it includes some important fixes and improvements.",
		features: [
			"Added support for the latest version of Firefox (129.0).",
			"Reworked on split views.",
			"Improved the performance of the browser.",
			"Allow the sidebar to be at the right side of the browser.",
		],
		fixes: [
			{
				description: "Blank space when closing tabs",
				issue: 181,
			},
			{
				description: "Tab bar: misaligned icons and hover background",
				issue: 180,
			},
		],
	},
	{
		version: "1.0.0-a.17",
		date: "11/08/2024",
		extra:
			"This release is the seventeenth alpha release of the 1.0.0-alpha series.\n\nThis release includes some bug fixes and improvements.\n\nThanks everyone for the feedback! We've skipped version 1.0.0-a.16 because of the size of the releases. One more step closer to the first stable release!",
		features: [
			"Added support for default keyboard shortcuts.",
			"Added JavaScript Bytecode Cache.",
			"Added shortcuts for split views.",
			"Updated UserAgent for website panels (Mobile UserAgent).",
			"Added support for zsync in AppImages.",
			"New tab button is now stuck to the last tab.",
			"Any inactive tab will be dimmed.",
			"Allowed prefetching for network requests.",
			"Added security measures for the browser (Sandboxing).",
			"Added more optimizations for Specific CPUs.",
			"Added shortcuts for cycling through workspaces.",
			"Fixed settings linguistics.",
			"Promoted hardware acceleration for flatpaks.",
			"Added shortcut for toggling the sidebar.",
			"Windows generic CPU support is now stable!",
		],
		fixes: [
			{
				description: "Toolbar only partially shown in Compact Mode",
				issue: 205,
			},
			{
				description: "Closed tabs are not really closed",
				issue: 216,
			},
			{
				description: "Getting 0xc0000142 error while trying to open zen.exe",
				issue: 209,
			},
			{
				description: "Fixed pinned tabs separator display issue",
				issue: 195,
			},
		],
	},
	{
		version: "1.0.0-a.23",
		date: "18/08/2024",
		extra:
			"This release is the twenty-third alpha release of the 1.0.0-alpha series.\n\nWe have made a lot of improvements and bug fixes since the last release note. I will go over the most important changes since version 1.0.0-a.17.\n\nThanks to everyone for the feedback and support!!",
		features: [
			"Added support for the latest stable version of Firefox (129.0.1)",
			"Added security warning when changing the language",
			"Locked preferences for Mozilla Telemetry and Experiments",
			"Refactored parts of the Zen interface theme",
			"Disabled Reader Mode's parse-on-load function",
			"Updated network and buffer preferences",
			"Improved font rendering",
			"Introduced support for WebAssembly SIMD",
			"Optimized macOS version for Nehalem architecture",
			"Added Branding Assets page",
			"Released Theme Store",
			"Added documentation for submitting mods",
			"Added confirm theme removal button",
			"Released Floating URL Bar feature as an official theme",
			"Released an official theme to remove browser padding",
		],
		fixes: [
			{
				description: "No option to disable dimming inactive tabs",
				issue: 225,
			},
			{
				description:
					"Closed tabs reappear if restore previous tabs on startup is enabled ",
				issue: 230,
			},
			{
				description: "Can't move tabs between workspaces",
				issue: 237,
			},
			{
				description: "Zen Browser is damaged and can't be opened on macOS",
				issue: 53,
			},
			{
				description: "Floating URL Bar does not close",
				issue: 252,
			},
			{
				description: "Web panel can go out of bounds if it is not pinned",
				issue: 267,
			},
			{
				description: "Bookmarks bar does not match the selected theme",
				issue: 264,
			},
			{
				description: "Tab backgrounds overlap on hover",
				issue: 303,
			},
		],
	},
	{
		version: "1.0.0-a.24",
		date: "20/08/2024",
		extra:
			"This release is the twenty-fourth alpha release of the 1.0.0-alpha series.\n\nThis release brings the long-awaited expand on hover feature, as well as some bug fixes and improvements to the theme store and documentation.",
		features: [
			"Added a frequently asked questions page to the documentation",
			"Added platform specific preferences to Zen mods",
			"Added expand-on-hover feature for the tab sidebar",
			"Improved scrollbar appearance on Windows",
			"Improved URL bar background color",
		],
		fixes: [
			{
				description: "Mute button is shown on inactive collapsed tabs",
				issue: 322,
			},
			{
				description: "Visual bug on bottom sidebar buttons",
				issue: 304,
			},
			{
				description: "Closing tabs makes other tabs briefly smaller",
				issue: 337,
			},
			{
				description: "Checkboxes are hard to see",
				issue: 103,
			},
		],
	},
	{
		version: "1.0.0-a.26",
		date: "20/08/2024",
		extra:
			"This release is the twenty-sixth alpha release of the 1.0.0-alpha series.\n\nThis is a short release that addresses some important bugs.",
		features: [
			"Updated to the latest stable version of Firefox (129.0.2)",
			"Updated CSS to improve compact mode and vertical tabs styling",
			"Updated the browser logo for Windows to a higher resolution",
			"Fixed severe issue with platform specific preference handling",
			"Added feature to set a default workspace",
		],
		fixes: [
			{
				description:
					"Issue with edge detection for expand-on-hover sidebar feature",
				issue: 355,
			},
		],
	},
	{
		version: "1.0.0-a.28",
		date: "22/08/2024",
		extra:
			"This release is the twenty-eighth alpha release of the 1.0.0-alpha series.",
		features: [
			"Enabled JPEG XL",
			"Changed Zen Core Components license to CC BY-SA",
			"Added support for color mods in theme creation",
			"Fixed sidebar shortcuts",
			"Started work on browser translations",
		],
		fixes: [
			{
				description: "No way to restore native theming to toolbar",
				issue: 426,
			},
			{
				description: "Address bar icons are hidden",
				issue: 430,
			},
			{
				description: "Tabs don't appear in vertical tab bar",
				issue: 429,
			},
			{
				description: "Location bar is not focused when opening new window",
				issue: 414,
			},
			{
				description:
					"The treshhold for the expanded tab sidebar in compact mode is too high",
				issue: 389,
			},
		],
	},
	{
		version: "1.0.0-a.29",
		date: "24/08/2024",
		extra:
			"This release is the twenty-ninth alpha release of the 1.0.0-alpha series.",
		features: [
			"Added Spanish translations",
			"Added documentation for contributing",
			"Added support for multi-tab splitting with shortcuts",
			"Fixed sidebar shortcuts",
		],
		fixes: [
			{
				description: "Text on websites is blurry",
				issue: 383,
			},
			{
				description: "Expanded compact mode triggers too early",
				issue: 520,
			},
			{
				description: "Ampersand in workspace name breaks workspace menu",
				issue: 439,
			},
		],
	},
	{
		version: "1.0.0-a.30",
		date: "26/08/2024",
		extra:
			"This release is the thirtieth alpha release of the 1.0.0-alpha series.",
		features: [
			"Added support for 24 more languages!",
			"Update installed mods from the browser settings",
		],
		fixes: [
			{
				description: "Letterboxing option is missing",
				issue: 475,
			},
			{
				description: "Collapsed tabs move when audio is playing",
				issue: 608,
			},
			{
				description:
					"Screensaver starts while a video is running in fullscreen",
				issue: 619,
			},
			{
				description: "Can't scroll through list of workspaces",
				issue: 603,
			},
			{
				description: "Can't rename created workspace",
				issue: 604,
			},
			{
				description: "JavaScript won't execute in the browser console",
				issue: 913,
			},
		],
	},
	{
		version: "1.0.0-a.33",
		date: "30/08/2024",
		extra:
			"This release is the thirty-third alpha release of the 1.0.0-alpha series.",
		features: [
			"Fixed policies for updates",
			"Enforce HTTPS-Only Mode",
			"URL bar improvements",
			"Fixed issue with opening links from external apps",
			"Compact mode now takes element separation into account",
			"Added labels to buttons during expand-on-hover",
		],
		fixes: [
			{
				description: "Tab bar stuck on right side",
				issue: 1115,
			},
		],
	},
	{
		version: "1.0.0-a.35",
		date: "02/09/2024",
		extra:
			"This release is the thirty-fifth alpha release of the 1.0.0-alpha series. Things are getting stable!",
		features: [
			"Added option to restore legacy toolbar interface",
			"Added profile-guided optimization (Windows)",
			"Added experimental Zen Labs settings",
			"Changed interface colors",
			"Disabled efficiency-mode by default (Windows)",
			"Enabled GPU-accelerated web rendering by default",
			"Enabled Video Acceleration API for media decoding",
			"Improved support for translations",
			"Added Identical Code Folding compiler optimization",
		],
		fixes: [
			{
				description: "Zen Browser is damaged and can't be opened on macOS",
				issue: 53,
			},
			{
				description: "Can't reorganize tabs in compact mode",
				issue: 1168,
			},
			{
				description: "Theme Store settings page doesn't display installed mods",
				issue: 1125,
			},
			{
				description: "No Homebrew support",
				issue: 273,
			},
			{
				description: "Remember last active workspaces on startup",
				issue: 240,
			},
		],
	},
	{
		version: "1.0.0-a.39",
		date: "09/09/2024",
		workflowId: 29912810500,
		extra:
			"This release is the thirty-eighth alpha release of the 1.0.0-alpha series.",
		features: [
			"Successfully added Apple developer certificate (macOS)",
			"Fixed issue with ffmpeg VA-API decoding",
			"Ensure tab becomes visible when selected",
			"Ensure top toolbar remains visible when dragging the window",
			"Briefly show tab sidebar when switching tabs in compact mode",
			"Enabled JPEG XL support by default",
			"Enabled moving pages in the Web View Sidebar",
			"Improved responsiveness of the top toolbar",
			"Enabled fused multiply-add instructions (optimization)",
		],
		fixes: [
			{
				description: "Scrolling between tabs is buggy/slow",
				issue: 1340,
			},
			{
				description:
					"Broken hover effect with NewTab button with compact density interface",
				issue: 1224,
			},
			{
				description: "Issue on Google Meet regarding WebRTC",
				issue: 972,
			},
			{
				description: "Zen Browser.app is damaged and can’t be opened on macOS",
				issue: 1245,
			},
			{
				description: "Fixed issue with ⌘ keyboard shortcuts on macOS",
				issue: 376,
			},
		],
	},
	{
		version: "1.0.1-a",
		date: "15/09/2024",
		workflowId: 10911842349,
		image: true,
		extra:
			"This version marks a more stable alpha release.\n\nThis release brings a few improvements to the UI and some important quality of life features for workspaces, such as separate pinned tabs, custom icons and assigned tab conainers!\n\nWe've also added a new AppImage installer for Linux users and started signing our Windows builds with a verified digital signature, making Windows Defender and other antivirus software less annoying!\n\nAlso, we've made the browser's layout more stable for mods, improved overal UX and added an a better theme support (Now called Zen Mods)!",
		features: [
			"Added verified digital signnature to Windows builds",
			"Added Zen to Homebrew Cask repository",
			"Enabled private search suggestions by default",
			"Improved Theme Store settings page",
			"Added Night and Colorful mods",
			"Restore browsing session on startup by default",
			"Added preference for custom workspace icons",
			"Redesigned url bar and workspaces",
			"Added preference for separate pinned tabs per workspace",
			"Fixed padding on right side tabs and expand-on-hover",
			"Repositioned List All Tabs button",
			"Allow binding tab containers to workspaces",
			"Added new AppImage installer",
			"Improved bookmarks sidebar interface",
			"Added compatibility for legacy Zen Theme preferences",
		],
		fixes: [
			{
				description: "Window borders show in full-screen mode",
				issue: 1404,
			},
			{
				description: "Collapsed sidebar widens on warning",
				issue: 1325,
			},
			{
				description: "Blurry font when using 2x pixel density (macOS)",
				issue: 440,
			},
			{
				description: "Firefox Add-ons won't update",
				issue: 1173,
			},
		],
	},
	{
		version: "1.0.1-a.2",
		date: "17/09/2024",
		image: true,
		workflowId: 10966772761,
		extra:
			"This release could be considered a hotfix release for the previous version.\n\nSince we've started doing pretty big UI changes in order to gain more stability, it's normal that we may encounter some bugs... But not that many!\n\nThis release fixes some of the most important bugs that were introduced in the previous version and adds some small improvements.",
		features: [
			"Added entering animation when creating a new tab",
			"Added support for other tab icons such as audio and microphone",
			"Added more customization towards rounded borders and padding",
			"Newtab button is now colored when expanded",
			"MacOS users will have the legacy toolbar location by default",
			"Workspaces are disabled on private browsing",
		],
		fixes: [
			{
				description: "Fixed padding of buttons when expanding the sidebar",
			},
			{
				description: "Fixed favicon not centered when collapsed",
			},
			{
				description: "Fixed compact mode overlapping the tab bar",
			},
			{
				description: "Fixed fullscreen when entering compact mode",
			},
			{
				description: "Fixed close icon showing on pinned tabs",
			},
			{
				description: "Fixed websites moving when hovering over tabs",
			},
			{
				description: "Removed 'private browsing' text from the toolbar",
			},
			{
				description: "Fixed avatars not being rounded",
			},
			{
				description: "Fixed paddings for personal toolbar",
			},
			{
				description: "Fixed width of the tab not being correct",
			},
			{
				description: "Fixed the tab bar not being visible in fullscreen",
			},
			{
				description:
					"Sidebar wont interfere with the toolbar anymore in compact mode",
			},
			{
				description: "Fixed release notes pointing to a 404 page",
			},
		],
	},
	{
		version: "1.0.1-a.3",
		date: "22/09/2024",
		image: true,
		workflowId: 10984599633,
		extra:
			"We are thrilled to announce that this release marks a significant leap forward for Zen Browser.\n\nSince the last version (1.0.1-a.2), we've implemented numerous improvements and addressed key bug fixes, all aimed at enhancing your browsing experience.\n\nWe've made significant changes to the UI, including a new compact mode design, improved tab management, and a more intuitive user interface. We've also added new features, such as the ability to customize the tab bar and a new compact mode design.\n\nWe hope you enjoy this release and look forward to your feedback!",
		features: [
			"Compact mode now allows to only hide the toolbar",
			"Added support for customizing the tab bar",
			"Added a new layout that saves vertical space",
			"Added support for workspaces icon strip (Quick workspace switching)",
			"Increased the font size on tabs",
			"Added support for customizing all the buttons that where before at the bottom left",
			"Added support for context menu clicks on the tab bar (compact mode and on hover)",
			"Added support for a new compact mode design",
			"Allowed text fragments for the DOM by default",
			"Added support for resizing split views",
			"Added a keyboard shortcut to cycle through workspaces backwards",
			"Compact mode now stays open for a longer time if the mouse exits the app",
			"MacOS buttons will now be at the left side of the toolbar",
			"Updated to the latest version of Firefox (130.0.1)",
			"Added a way to modify compact mode behavior from right clickin the tab bar",
			"No paddings or borders will be shown when in fullscreen no more",
			"Applied a more consistent design for the tab bar",
			"Correctly signed the Windows updater",
		],
		fixes: [
			{
				description:
					"Can't split tab, if one of the tabs has been previously split",
				isse: 1592,
			},
			{
				description: "Exit button padding is not correct",
				issue: 1583,
			},
			{
				description: "Font size is too small on tabs",
				issue: 1580,
			},
			{
				description: "Misaligned Padding across window",
				isue: 1542,
			},
			{
				description: "Fixed exiting from split view with more than 6 tabs",
				issue: 1539,
			},
			{
				description:
					"Fixed the sidebar ignoring the mobile user agent checkbox on creation",
				isue: 1536,
			},
			{
				description:
					'"Hide the default container indicator in the tab bar" doesn\'t work when opening container with shortcut or via link',
				issue: 1472,
			},
			{
				description:
					"Left, Bottom, and Right borders visible when in full screen mode",
				issue: 1513,
			},
			{
				description: "Fixed checkboxes on context menu not being aligned",
			},
			{
				description:
					"Fixed Mods not being applied to every single window opened",
			},
		],
		breakingChanges: [
			"Removed Galaxy and Dream mods",
			"Removed the 'legacy-toolbar' preference",
		],
		themeChanges: [
			"Themes will now be able to have string and number values",
			"The configuration schema for mods has been updated. All current mods have been updated automatically.",
		],
	},
	{
		version: "1.0.1-a.4",
		date: "23/09/2024",
		image: true,
		workflowId: 11000317603,
		extra:
			"This update addresses some significant issues with the previous release.\n\nWe appreciate your patience and support!",
		features: ["Added a new system for handling keyboard shortcuts"],
		fixes: [
			{
				description: "The New Tab button is not visible",
				issue: 1640,
			},
			{
				description: "The Unified Extensions button is not visible",
				issue: 1643,
			},
			{
				description: "The workspace element can't be moved on the toolbar",
				issue: 1636,
			},
			{
				description:
					"Expand-on-hover doesn't work properly when compact mode is enabled",
			},
			{
				description: "Fixed an issue with reordering tabs",
			},
		],
	},
	{
		version: "1.0.1-a.5",
		date: "24/09/2024",
		image: false,
		workflowId: 11020784612,
		extra:
			"This update is a small patch to fix some issues that weren't addressed in the previous release!",
		features: [
			"Moved application menu button to the right",
			"Added new shortcuts",
			"Collapsed tab sidebar is now smaller",
		],
		fixes: [
			{
				description:
					"Fixed issue with hovering over window control buttons (macOS)",
			},
			{
				description: "(Hopefully) resolved all issues with keyboard shortcuts",
				issue: 1629,
			},
		],
	},
	{
		version: "1.0.1-a.6",
		date: "29/09/2024",
		image: true,
		workflowId: 11095257662,
		extra:
			"This release fixes a few critical bugs and introduces Tab Unloading! Unused tabs will free up memory with this new feature",
		features: [
			"Added Paste and Go button",
			"Added Tab Unloading",
			"Sidebar Web Panel can now be moved freely",
			"Added warning when shortcut setting changes are unsaved",
			"Enabled container tabs by default",
			"Improved Expand Tabs on Hover layout",
		],
		themeChanges: ["Toggle inputs will not use the themed tertiary color"],
		breakingChanges: [
			"The keyboard shortcuts will be overriden by the defaults ones in this update.",
		],
		fixes: [
			{
				description: "Fixed Firefox add-ons not updating",
				issue: 1173,
			},
			{
				description: "Fixed expand-on-hover shifting web page",
				issue: 1718,
			},
			{
				description: "Fixed cycling between workspaces with shortcuts",
			},
			{
				description: "Removed duplicate shortcut options in the settings",
				issue: 1784,
			},
			{
				description: "Restored missing keyboard shortcuts",
				issue: 1706,
			},
			{
				description: "Fixed keyboard shortcuts not saving",
				issue: 1715,
			},
			{
				description: "Fixed workspace names that start with an emoji",
				issue: 1732,
			},
			{
				description: "Fixed shortcut keys incorrectly displayed on macOS",
			},
		],
	},
	{
		version: "1.0.1-a.7",
		date: "01/10/2024",
		image: false,
		workflowId: 11108707060,
		extra:
			"This release is a really small release to fix a very important bug that was introduced in the previous release.",
		fixes: [
			{
				description:
					"Fixed a critical issue with the sidebar being 1 pixel small",
			},
			{
				description: "Fixed tabs separation always showing",
			},
		],
	},
	{
		version: "1.0.1-a.8",
		date: "10/10/2024",
		image: true,
		workflowId: 11279059812,
		extra:
			"This release brings Zen to Firefox v131.0.2, which patches a significant security vulnerability.\n\nThis update improves the split view and pinned tabs features.\nWe have also released Zen Twilight; automated unstable builds where you can test out the latest features!",
		features: [
			"Updated to the latest stable version of Firefox (131.0.2)",
			"Added floating compact mode",
			"Allow moving split view tabs with drag and drop functionality",
			"Added option to reset pinned tabs to original state on close",
			"Added support for syncing workspaces",
			"Allow opening tabs by middle clicking the tab sidebar",
		],
		fixes: [
			{
				description: "Fixed tab sidebar flickering when on the right",
			},
			{
				description: "Fixed performance issue when scrolling",
			},
			{
				description: "Fixed buffering issues on YouTube",
			},
			{
				description:
					"Fixed Zen Mod settings page crashing when a mod ceases to exist",
			},
			{
				description:
					"Fixed extension menu breaking compact mode when held open",
				issue: 1925,
			},
			{
				description: "Fixed internal keyboard shortcuts for macOS",
				issue: 1629,
			},
			{
				description: "Fixed display issues with certain keyboard layouts",
				issue: 1930,
			},
			{
				description: "Applied patches to fix CVE-2024-9680",
				issue: 1993,
			},
		],
	},
	{
		version: "1.0.1-a.9",
		date: "14/10/2024",
		image: true,
		workflowId: 11333793682,
		extra:
			"This update brings further refinements to Zen Browser, focusing on stability improvements and new features for session management.\n\nWe've also enhanced pinned tab handling and workspaces to improve the user experience. Thanks everyone!",
		features: [
			"Updated to the latest stable version of Firefox (131.0.3)",
			"Improved session storage of pinned tabs, now storing the triggering principal for more accurate state restoration.",
			"Added a new feature to save the pinned state of tabs in the session store, allowing for better tab management across sessions.",
			"Reduced the vertical tab toolbox width to 44px, providing a more compact layout and freeing up more screen space for content",
			"Added support for containers in the sidebar websites",
			"Changed amoled theme's base color",
			"Worked on keyboard shortcuts",
			"Improved light mode experience",
			"Allow VAAPI/FMPEG APIs only for linux",
			"Twilight will now display the proper name on .desktop files",
			"Added a better icon selection for workspaces, enhancing more icons",
			'Created a "Force container workspace" option. Basically, force each container to belong to acertain workspace.',
			"Bookmarks are now opened in the workspace's default container",
			"Allow tab unloader to ignore picture-in-picture tabs",
		],
		fixes: [
			{
				description:
					"Disabled forcing hardware accelerating, causing issues for some unsupported GPUs",
			},
			{
				description: "Fixed compact mode overlapping the tabs",
			},
			{
				description: "Fixed browser bottom padding misaligns",
				issue: 2007,
			},
			{
				description:
					"sidebar is blank when there's a moving video/picture on other open tabs",
				issue: 1900,
			},
			{
				description:
					"Fixed extension menu breaking compact mode when held open",
				issue: 1925,
			},
			{
				description:
					"Fixed 'Sidebar is very thin making stuff not appear correctly'",
				issue: 2015,
			},
			{
				description:
					"Fixed 'Tabs sidebar Expand on Hover casuses jank with latest UI'",
				issue: 2033,
			},
			{
				description: "Applied patches to fix mfsa2024-53 security issue",
			},
			{
				description:
					"Major issue with zen sidebar disapering and not re-appearing on restart",
				issue: 1979,
			},
		],
	},
	{
		version: "1.0.1-a.10",
		date: "15/10/2024",
		image: false,
		workflowId: 11349525400,
		extra:
			"This release is a small patch to fix some issues on keyboard shortcuts that were introduced in the previous release.",
		fixes: [
			{
				description: "Fixed keyboard shortcuts not working in macos",
				issue: 1629,
			},
			{
				description: "Fixed handling when having a corrupted mods file",
			},
			{
				description: "Fixed reseting shortcuts not working",
			},
			{
				description:
					"Fixed settings UI when night theme is enabled while having a light website displayed",
			},
			{
				description:
					"Fixed about page linking 'global comunity' to a mozilla page",
			},
		],
		features: [
			"About page will now display the firefox version used",
			"Disabled forcing container grouping for workspaces",
		],
	},
	{
		version: "1.0.1-a.11",
		date: "19/10/2024",
		image: true,
		workflowId: 11412027026,
		extra:
			"This release brings some quality of life improvements and new features to Workspaces.",
		fixes: [
			{
				description: "Fixed right side tab bar not working (macOS)",
				issue: 334,
			},
			{
				description: "Fixed compact mode moving titlebar buttons (macOS)",
				issue: 1872,
			},
			{
				description: "Fixed expand on hover moving sites",
				issue: 2033,
			},
			{
				description: "Fixed About Zen showing incorrect Firefox version",
				issue: 2150,
			},
			{
				description: "Fixed workspace icon picker no longer showing (Windows)",
				issue: 2121,
			},
			{
				description: "Fixed inconsistent padding on toolbar buttons",
				issue: 2176,
			},
			{
				description:
					"Fixed workspace buttons lacking top and bottom padding when placed on the toolbar",
				issue: 2184,
			},
			{
				description: "Allow reserved keyboard shortcuts to be changed",
			},
			{
				description:
					"Fixed display issue for shortcuts with certain keybinds (macOS)",
				issue: 2189,
			},
		],
		features: [
			"Improved light theme",
			"Changed split view button icon",
			"Added reordering mode to workspaces",
			"Added button to disable all active Zen Mods",
			"Workspace icon picker now supports all emojis by default",
		],
	},
	{
		version: "1.0.1-a.12",
		date: "19/10/2024",
		image: false,
		workflowId: 11419764479,
		extra:
			"This release is a small release that fixes some annoying bugs, and adds some small improvements.\n\nThese releases will commonly mostly contain bug fixes and small improvements as our current goal right now is to stabilize the browser.\n\nThanks everyone for the feedback!",
		features: [
			"Fixed always rendering the split view overlay, pottentially fixing huge speed issues",
			"Disabled 'all' webrender options by default, performance increase for unsuported GPUs",
		],
		fixes: [
			{
				description: "Fixed tab overlflow changing the height of the web view",
			},
			{
				description:
					"Fixed 'cancel' button for workspaces creation not working",
			},
			{
				description: "Creating tabs wont flash-bang the user anymore",
			},
			{
				description: "Fixed tabs moving not closing expand on hover sometimes",
			},
		],
	},
	{
		version: "1.0.1-a.13",
		date: "27/10/2024",
		image: true,
		workflowId: 11540529505,
		extra:
			"This update brings custom gradient themes to workspaces!",
		features: [
            "Added option to set New Tab button under the last open tab",
			"Disabled support for Kyber KEM by default",
            "Added color picker to generate gradient themes",
            "Added option to give individual workspaces a gradient theme",
			"The amount of maximum web panels is now a preference in about:config"
		],
		fixes: [
			{
				description: "Closing the last pinned tab causes a new tab to open",
                issue: 2249
			},
			{
				description: "Fixed moving workspace to end of list and auto disable workspace reordering mode",
                issue: 2209
			},
			{
				description: "Fixed split view sliders not showing unless reordering mode is enabled",
				issue: 2269
			},
			{
				description: "Fixed malformed XUL for some themes, not showing on the preferences page",
			},
			{
				description: "Fixed keyboard shortcuts for 'Shift + [N]' not working",
			},
			{
				description: 'Fixed Sidebar "Expands Tabs on Hover" option randomly resets to "Don\'t Expand Tabs by Default"',
				issue: 2156,
			},
				
		],
		breakingChanges: [
			"Removed Show Expand Button option from settings",
		],
		themeChanges: [
			"The variable '--zen-main-browser-backgrond' will now contain the generated gradient",
			"Added the 'unread' attribute for background tabs that haven't been accessed yet"
		]
	},
	{
		version: "1.0.1-a.14",
		date: "27/10/2024",
		image: false,
		workflowId: 32129331813,
		extra:
			"This release is a small patch to fix some issues that were introduced in the previous release. Thanks everyone for the quick feedback!",
		fixes: [
			{
				description: "Fixed gradient generator not allowing closing the last color",
			},
			{
				description: "Fixed the gradient generator not saving the texture if it's 0"
			},
			{
				description: "Fixed transparent colors when not having any color selected",
			},
			{
				description: "Fixed sidebar webpanels being in a darker contrast",
			}
		],
		features: [
			"Added a confirmation dialog when the gradient generator has successfully saved the gradient",
		],
	},
].reverse();

export function releaseNoteIsAlpha(note: ReleaseNote) {
	"use client";
	return note.version.includes("-a.");
}
