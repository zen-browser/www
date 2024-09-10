import { ReleaseNote, releaseNotes } from "@/lib/release-notes";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CheckCheckIcon, StarIcon } from "lucide-react";
import StickyBox from "react-sticky-box";

import moment from "moment";
import { Accordion, AccordionItem } from "@radix-ui/react-accordion";
import { AccordionContent, AccordionTrigger } from "./ui/accordion";
import { ny } from "@/lib/utils";

export default function ReleaseNoteElement({ data }: { data: ReleaseNote }) {
  const splitDate = data.date.split("/");
  return (
    <section className={ny("flex flex-col lg:flex-row border-t relative", data.version == releaseNotes[0].version ? "mt-24 pt-24" : "pt-36 mt-36")} id={data.version}>
      <StickyBox className="mb-6 lg:mb-0 mt-1 mr-24 ml-10 text-muted-foreground text-xs min-w-52 h-fit" offsetTop={120}>
        {moment({
          year: parseInt(splitDate[2]),
          month: parseInt(splitDate[1]) - 1,
          day: parseInt(splitDate[0]),
        }).format('MMMM Do, YYYY')}
      </StickyBox>
      <div className="px-5 md:px-10 md:px-0 md:pr-32">
        <h1 className="text-3xl font-bold">
          Release notes for {data.version} 🎉
        </h1>
        <p className="text-md mt-4 text-muted-foreground">
          If you encounter any issues, please report them on{" "}
          <a
            href="https://github.com/zen-browser/desktop/issues/"
            className="text-underline text-blue-500"
          >
            the issues page
          </a>
          . Thanks everyone for your feedback! ❤️
        </p>
        {data.extra && (
          <p
            className="text-md text-muted-foreground mt-8"
            dangerouslySetInnerHTML={{
              __html: data.extra.replace(/(\n)/g, "<br />"),
            }}
          ></p>
        )}
        <Accordion type="single" collapsible className="mt-8">
          {data.breakingChanges && (
            <AccordionItem value="breaking-changes" title="Breaking Changes">
              <AccordionTrigger>
                <div className="flex items-center">
                  <ExclamationTriangleIcon className="text-red-500 mr-2 mt-1 size-5 opacity-50" />
                  <span className="ml-2">Breaking Changes</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="ml-6" style={{ listStyleType: "initial" }}>
                  {data.breakingChanges.map((change) => (
                    <li key={change} className="mt-4 text-md text-muted-foreground">
                      <span className="ml-1">
                        {change}
                      </span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            )
          }
          {data.fixes && (
            <AccordionItem value="fixes" title="Fixes">
              <AccordionTrigger>
                <div className="flex items-center">
                  <CheckCheckIcon className="mr-2 mt-1 size-5 opacity-50" />
                  <span className="ml-2">Fixes</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="ml-6" style={{ listStyleType: "initial" }}>
                  {data.fixes.map((fix) => (
                    <li key={fix.description} className="mt-4 text-md text-muted-foreground">
                      <span className="ml-1">
                        {fix.description}
                      </span>
                      {fix.issue && (
                        <a
                          href={`https://github.com/zen-browser/desktop/issues/${fix.issue}`}
                          className="text-blue-500 ml-1 text-underline"
                        >
                          #{fix.issue}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          )}
          {data.features && (
            <AccordionItem value="features" title="Features">
              <AccordionTrigger>
                <div className="flex items-center">
                  <StarIcon className="text-yellow-700 mr-2 mt-1 size-5 opacity-50" />
                  <span className="ml-2">Features</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="ml-6" style={{ listStyleType: "initial" }}>
                  {data.features.map((feature) => (
                    <li key={feature} className="mt-4 text-md text-muted-foreground">
                      <span className="ml-1">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </div>
    </section>
  );
}
