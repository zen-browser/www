import React from "react";

const layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start">
			{children}
		</main>
	);
};

export default layout;
