"use client";

import * as React from "react";

import { Button } from "./button";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";

import { useClipboard } from "@/lib/hooks";

const CopyButton = React.forwardRef<
	React.ElementRef<typeof Button>,
	React.ComponentPropsWithoutRef<typeof Button> & {
		valueToCopy: string;
	}
>(({ className, valueToCopy, ...props }, ref) => {
	const copyToClipboard = useClipboard(valueToCopy);

	const [showSuccessIcon, setShowSuccessIcon] = React.useState(false);

	const handleCopy = () => {
		copyToClipboard();
		setShowSuccessIcon(true);
	};

	React.useEffect(() => {
		let timeout: ReturnType<typeof setTimeout> | null = null;

		if (showSuccessIcon) {
			timeout = setTimeout(() => {
				setShowSuccessIcon(false);
			}, 5000);
		}

		return () => {
			if (timeout) {
				clearTimeout(timeout);
			}
		};
	}, [showSuccessIcon]);

	return (
		<>
			<Button
				ref={ref}
				variant={"ghost"}
				size={"icon"}
				className={className}
				onClick={handleCopy}
				{...props}
			>
				{showSuccessIcon ? (
					<CheckIcon className="size-5 text-green-500" />
				) : (
					<CopyIcon className="size-4" />
				)}
			</Button>
		</>
	);
});

export { CopyButton };
