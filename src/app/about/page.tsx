"use client";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { releaseNoteIsAlpha, releaseNotes } from "@/lib/release-notes";
import Link from "next/link";
import Markdown from "react-markdown";
import "../privacy-policy/markdown.css";

export default function PrivacyPolicy() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start">
			<div
				id="policy"
				className="py-42 mx-auto my-52 flex min-h-screen w-full flex-col p-10 lg:w-1/3 lg:p-0"
			>
				<Markdown>
					{`
# Main Developer Team

* [**Mauro Baladés**](https://github.com/mauro-balades): Creator, Main Developer, and a funny guy.
* **Oscar Gonzalez**: Site Reliability Engineer (SRE) and code signing.
* [**Onno**](https://www.onnno.nl/index.html): logo designer.
* [**Jafeth Garro**](https://iamjafeth.com/): Documentation writer.
* **Peter Jung**: general contributor and AUR maintainer.
* [**Bryan Galdámez**](https://josuegalre.netlify.app/): Huge contributor on theme functionalities
* [**Gunir**](https://github.com/gunir): Active contributor.
* [**n7itro**](https://github.com/n7itro): Active contributor.
* [**Canoa**](https://thatcanoa.org/) Active contributor, and very active in issue handling
* [**Jan Heres**](https://janheres.eu/): Active contributor and helps with MacOS builds.

# Many more contributors

![Contributors](https://contributors-img.web.app/image?repo=zen-browser/desktop)

---

![Contributors](https://contributors-img.web.app/image?repo=zen-browser/www)
`}
				</Markdown>
			</div>
		</main>
	);
}
