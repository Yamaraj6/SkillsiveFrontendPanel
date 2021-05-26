export interface ICourseRequest {
	filter: ICourseFilterModel;
	pageSize: number;
	pageNumber: number;
}

export interface ICourseFilterModel {
	courseName: string;
	authorName: string;
	category: string;
	allowDisabled: boolean;
}
