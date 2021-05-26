import { ICourse, ICourseCategory } from 'services/api/apiModels/courses/courses';
import types from './types';
import { IAction } from 'shared/interfaces';

export interface ICoursesState {
	filtered_courses?: ICourse[];
	courses?: ICourse[];
	categories?: ICourseCategory[];
}

const initialState: ICoursesState = {};

function coursesReducer(state: ICoursesState = initialState, action: IAction) {
	switch (action.type) {
		case types.POST_CALLS.FILTERED_COURSES.SUCCESS:
			return { ...state, filtered_courses: action.payload };
		case types.GET_CALLS.CATEGORIES.SUCCESS:
			return { ...state, categories: action.payload };
		case types.GET_CALLS.ALL_COURSES.SUCCESS:
			return { ...state, courses: action.payload };
		default:
			return state;
	}
}

export default coursesReducer;
