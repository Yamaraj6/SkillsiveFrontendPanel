import { IClient, Language, ResourceFileDto } from '../client';

export interface IGetAllCoursesResponse {
	courses: ICourse[];
	totalCount: number;
}

export interface ICourseLanguage {
	id: string;
	courseId: string;
	languageId: string;
	language: ILanguage;
	isDefault: boolean;
}

export interface ICourse {
	id: string;
	tag: string;
	clientAuthor: IClient;
	createDate: string;
	categoryName: string;
	courseName: string;
	courseNameTranslationId: string;
	courseDescription: string;
	courseDescriptionTranslationId: string;
	completionCost: number;
	estimatedCompletionTime: number;
	oculusApplicationId: string;
	oculusApplicationSecret: string;
	media: IMedia[];
	resourceFiles: ResourceFileDto[];
	iconUrl: string;
	detailIconsUrl: string;
	disabled: boolean;
	courseLanguages: ICourseLanguage[];
	defaultLanguage: string;
	androidPackageName: string;
	courseCategories: ICourseCategory[];
	size: number;
	courseType: CourseType;
	releaseDate: string;
	version: string;
	isAnyPersonalization: boolean;
	sideQuestUrl: string;
	sideQuestAppId: number;
}

export interface ILanguage {
	id: string;
	languageType: Language;
	isoCode: string;
	displayName: string;
}

export enum CourseType {
	NONE = 0,
	VR = 1,
	AR = 2
}

export interface ICourseCategory {
	id: string;
	name: string;
}

export interface IMedia {
	url: string;
	mediaType: MediaType;
}

export enum MediaType {
	IMAGE = 1,
	VIDEO = 2
}
