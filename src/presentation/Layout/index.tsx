import type React from "react";
import { useState } from "react";
import { Sidebar } from "../containers/Sidebar";
import { Header } from "../containers/Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
	const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

	return (
		<div>
            <Header onClickCart={() => setSidebarIsOpen(true)}/>
            {sidebarIsOpen && (
                <Sidebar onClose={() => setSidebarIsOpen(false)}/>
            )}
			<main>{children}</main>
		</div>
	);
};
