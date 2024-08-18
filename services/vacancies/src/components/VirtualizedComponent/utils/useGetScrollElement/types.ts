import { RefObject } from "react";

export interface useGetScrollElementParams<D> {
	refContainer: RefObject<D extends HTMLDivElement ? D : HTMLDivElement> | null;
}
