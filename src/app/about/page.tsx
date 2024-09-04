"use client";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { releaseNoteIsAlpha, releaseNotes } from "@/lib/release-notes";
import Link from "next/link";
import Markdown from 'react-markdown'
import '../privacy-policy/markdown.css';

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div id="policy" className="min-h-screen py-42 flex mx-auto my-52 p-10 lg:p-0 w-full lg:w-1/3 flex-col">
        <Markdown>
          {`
# Main Developer Team

* [**Mauro Baladés**](https://github.com/mauro-balades): Creator, Main Developer, and a funny guy.
* **Oscar Gonzalez**: Site Reliability Engineer (SRE) and code signing.
* [**Onno**](https://www.onnno.nl/index.html): logo designer.
* [**Jafeth Garro**](https://iamjafeth.com/): Documentation writer.
* **Peter Jung**: general contributor and AUR maintainer.
* [**Gunir**](https://github.com/gunir): Active contributor.
* [**n7itro**](https://github.com/n7itro): Active contributor.
* [**Canoa**](https://thatcanoa.org/) Active contributor.

# Many more contributors

![Contributors](https://contributors-img.web.app/image?repo=zen-browser/desktop)

---

![Contributors](https://contributors-img.web.app/image?repo=zen-browser/www)
`}
</Markdown>
      </div>
    </main>
  )
}
