import type React from "react";
import { Fragment, type ReactNode } from "react";

interface LayoutMainProps {
	children: ReactNode;
}

export const LayoutMain: React.FC<LayoutMainProps> = ({ children }) => {
	return (
		<Fragment>
			<div>{children}</div>
		</Fragment>
	);
};
