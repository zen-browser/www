"use client";

import * as React from "react";

import { Button } from "./button";
import { CopyIcon } from "@radix-ui/react-icons";

import { useClipboard } from "@/lib/hooks";

const CopyButton = React.forwardRef<
	React.ElementRef<typeof Button>,
	React.ComponentPropsWithoutRef<typeof Button> & {
		valueToCopy: string;
	}
>(({ className, valueToCopy, ...props }, ref) => {
	const copyToClipboard = useClipboard(valueToCopy);

	return (
		<>
			<Button
				ref={ref}
				variant={"ghost"}
				size={"icon"}
				className={className}
				onClick={copyToClipboard}
				{...props}
			>
				<CopyIcon className="size-4" />
			</Button>
		</>
	);
});

export { CopyButton };
