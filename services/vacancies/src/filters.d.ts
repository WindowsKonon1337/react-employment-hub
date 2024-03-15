declare type GenericData<T, D, A = unknown> = {
	type: T;
	data: D;
} & A;
