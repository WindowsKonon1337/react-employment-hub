export interface NotificationProps {
	title: string;
	applySettings?: {
		appyTitle: string;
		handleApply: () => void;
	};
	resetSettings?: {
		resetTitle: string;
		handleReset: () => void;
	};
	className?: string;
}
