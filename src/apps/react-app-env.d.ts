/// <reference types="react-scripts" />

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	error: Error | null;
	errorInfo: ErrorInfo | null;
}

interface StickyNavbarProps {
	navbarHumbugger: React.RefObject<SVGSVGElement>;
	toggleMobileNavigation: () => void;
	onSearchBtnClick: (
		evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => void;
}

interface SearchPopupProps {
	formInputRef: React.RefObject<HTMLInputElement>;
	searchBoxRef: React.RefObject<HTMLDivElement>;
	searchFormRef: React.RefObject<HTMLFormElement>;
	submitBtnRef: React.RefObject<HTMLButtonElement>;
}

interface MobileNavbarProps {
	menuRef: React.RefObject<HTMLDivElement>;
	navbarHumbuggerRef: React.RefObject<SVGSVGElement>;
	toggleMobileNavigation: () => void;
	onSearchBtnClick: (
		evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => void;
}

interface SingleLinkWithMenu {
	path: IntrinsicAttributes & LinkProps & RefAttributes<HTMLAnchorElement>;
	title: String;
}
interface LinkWithMenuProps {
	title: String;
	path: IntrinsicAttributes & LinkProps & RefAttributes<HTMLAnchorElement>;
	items: SingleLinkWithMenu[];
}
