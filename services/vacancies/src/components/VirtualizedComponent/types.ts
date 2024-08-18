import { CustomContainerVirtualizedProps } from "./components";

export enum TypeOfVirtualized {
	/**
	 * Тип виртуализации - в зависимости от него, определяет на чей скролл обращаем внимание
	 * @default window
	 */
	"window" = "window",
	"customContainer" = '"customContainer"',
}

export interface VirtualizedData {
	elemntsLenght: number;
	elementhsHeight: number;
	/**
	 * Набор данных для передачи в компонент рендера
	 */
	items: any[];
	/**
	 * Компонент который необходимо отрендерить
	 */
	ComponentForRender: any;
	/**
	 * Объект дополнительных параметром, которые должны быть переданы компоненту
	 */
	customProps?: (index: number) => any;
}

type VirtualizedComponentType =
	| GenericData<TypeOfVirtualized.window, VirtualizedData>
	| GenericData<TypeOfVirtualized.customContainer, CustomContainerVirtualizedProps>;

export interface VirtualizedComponentProps {
	settings: VirtualizedComponentType;
}
