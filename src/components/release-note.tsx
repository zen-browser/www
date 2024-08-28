import { ReleaseNote } from "@/lib/release-notes";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CheckCheckIcon, StarIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
export default function ReleaseNoteElement({ data }: { data: ReleaseNote }) {
  return (
    <div className="flex flex-col mt-52 mb-24">
      <div className="mx-auto w-full px-10 md:px-0 lg:w-2/3">
        <h1 className="text-4xl font-bold">
          Release notes for {data.version} 🎉
        </h1>
        <p className="text-sm mt-1 font-bold text-muted-foreground">
          {data.date}
        </p>
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
            className="text-md mt-8"
            dangerouslySetInnerHTML={{
              __html: data.extra.replace(/(\n)/g, "<br />"),
            }}
          ></p>
        )}
        {data.breakingChanges && (
          <>
            <h2 className="text-2xl font-bold mt-8 flex items-center">
              <ExclamationTriangleIcon className="w-6 h-6 mr-4" />
              Breaking changes
            </h2>
            <p className="text-md mt-4">
              The following changes may break existing functionality:
            </p>
            <ul className="list-disc list-inside mt-2">
              {data.breakingChanges?.map((change, index) => (
                <li key={index} className="mt-1 text-muted-foreground">
                  {change}
                </li>
              ))}
            </ul>
          </>
        )}
        {data.features && (
          <>
            <h2 className="text-2xl font-bold mt-8 flex items-center">
              <StarIcon className="w-6 h-6 mr-4" />
              Features
            </h2>
            <p className="text-md mt-2">
              The following features have been added:
            </p>
            <ul className="list-disc list-inside mt-4">
              {data.features?.map((feature, index) => (
                <li key={index} className="text-md mt-1 text-muted-foreground">
                  {feature}
                </li>
              ))}
            </ul>
          </>
        )}
        {data.fixes && (
          <>
            <h2 className="text-2xl flex items-center font-bold mt-8">
              <CheckCheckIcon className="w-6 h-6 mr-4" />
              Fixes
            </h2>
            <p className="text-md mt-2">
              The following issues have been fixed:
            </p>
            <ul className="list-disc list-inside mt-2">
              {data.fixes?.map((fix, index) => (
                <li key={index} className="mt-1 text-muted-foreground">
                  {fix.description}
                  {fix.issue && (
                    <a
                      href={`https://github.com/zen-browser/desktop/issues/${fix.issue}`}
                      target="_blank"
                      className="ml-1 text-blue-500"
                    >
                      issue #{fix.issue}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <a href="/download">
          <Button className="mt-12 w-fit mx-auto">Download Zen now!</Button>
        </a>
      </div>
    </div>
  );
}
