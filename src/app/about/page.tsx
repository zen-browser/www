"use client";

import Markdown from "react-markdown";
import "../privacy-policy/markdown.css";

export default function PrivacyPolicy() {
	return (
		<div
			id="policy"
			className="py-42 mx-auto my-52 flex min-h-screen w-full flex-col p-10 lg:w-1/3 lg:p-0"
		>
			<Markdown>
				{`
# Main Developer Team

These are the most active developers in the project. Awesome people that make Zen Browser possible, the order is not important, all of them are a big part of the project.

* [**Mauro Baladés**](https://github.com/mr-cheff): Creator, Main Developer, and a funny guy.
* **Oscar Gonzalez**: Site Reliability Engineer (SRE) and code signing.
* [**Jan Heres**](https://janheres.eu/): Active contributor and helps with MacOS builds, known as \`mr. macos\`.
* [**BrhmDev**](https://github.com/BrhmDev): Active contributor with great contributions, known as \`mr. black magic\`.
* [**Canoa**](https://thatcanoa.org/) Active contributor, and very active in issue handling and website management, known as \`mr. site & benchmarker\`.
* [**kristijanribaric**](https://github.com/kristijanribaric): Active contributor, known as \`mr. workspaces\`.
* [**n7itro**](https://github.com/n7itro): Active contributor and release notes writer, known as \`mr. discord\`. (Also discord moderator, but who would want to be that?)
* [**Bryan Galdámez**](https://josuegalre.netlify.app/): Huge contributor on theme functionalities, known as \`mr. themes\`.
* [**Jafeth Garro**](https://iamjafeth.com/): Documentation writer, known as \`mr. docs\`.
* [**Larvey**](https://github.com/LarveyOfficial/): AUR maintainer, known as \`mr. AUR manager\`.
* [**Gunir**](https://github.com/gunir): Helps a lot with firefox's configuration and knowledge, known as \`mr. optimizations\`.

> These contributors have a "mr." nickname because it resembles their main contributions to the project, and it's a fun way to recognize them.

# Many more contributors! 🎉

*These are the desktop contributors:*
![Contributors](https://contributors-img.web.app/image?repo=zen-browser/desktop)

*These are the site contributors:*
![Contributors](https://contributors-img.web.app/image?repo=zen-browser/www)
`}
			</Markdown>
		</div>
	);
}
