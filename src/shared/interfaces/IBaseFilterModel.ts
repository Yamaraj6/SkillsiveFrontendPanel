export interface IPagination {
	Skip?: number;
	Take?: number;
}

export interface IPageDataRequest extends IPagination {
	CreateDateFrom?: Date;
	CreateDateTo?: Date;
	SearchId?: number | undefined;
	SearchValue?: string | undefined;
}

export interface IPageDataResponse<TData> {
	Collection: TData[];
	Total: number;
}
