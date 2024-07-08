declare type GenericData<T, D, A = unknown> = {
	type: T;
	data: D;
} & A;

declare type GenericAction<T extends string = "", P = unknown> = {
	type: T;
	payload: P;
};
