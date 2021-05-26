import { ICourse, ICourseCategory } from 'services/api/apiModels/courses/courses';
import types from './types';

export const setFilteredCourses = (data: ICourse) => ({
	type: types.POST_CALLS.FILTERED_COURSES.SUCCESS,
	payload: data
});

export const setCourses = (data: ICourse[]) => ({
	type: types.GET_CALLS.ALL_COURSES.SUCCESS,
	payload: data
});

export const setCategories = (data: ICourseCategory[]) => ({
	type: types.GET_CALLS.CATEGORIES.SUCCESS,
	payload: data
});
