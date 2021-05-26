import { ICourse } from 'services/api/apiModels/courses/courses';
import { IStoreState } from '../index';

export const getCourses = ({ courses }: IStoreState) => {
	return courses?.courses;
};

export const getCourseById = (courseId: string) => ({ courses }: IStoreState) => courses?.courses?.find(course => course.id === courseId);
