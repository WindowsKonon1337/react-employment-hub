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
	 * название для объекта обертки, в которую требуется класть данные для элемента массива
	 */
	nameWrapperForData?: string;
	/**
	 * Объект дополнительных параметром, которые должны быть переданы компоненту
	 */
	customProps?: (index: number) => any;
}

type VirtualizedComponentType =
	// @ts-ignore
	| GenericData<TypeOfVirtualized.window, VirtualizedData>
	// @ts-ignore
	| GenericData<TypeOfVirtualized.customContainer, CustomContainerVirtualizedProps>;

export interface VirtualizedComponentProps {
	settings: VirtualizedComponentType;
}
