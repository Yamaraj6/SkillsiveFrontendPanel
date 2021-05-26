import { ColumnsType } from 'antd/es/table';
import { FilterDirectionType } from 'shared/enums';

export interface ITable<T> {
	data: T[];
	columns: ColumnsType<T>;
	rowCheck?: (rowIds: number[]) => void;
	actions?: IMenuAction<T>[];
	handleTableChange: (sorter: ISortable) => void;
	breakWidth?: number;
	rowClick?: (record: T) => void;
	children({ data, columns, rowCheck, dropdown }: IMobileTable<T>);
}

export interface IMenuAction<T> {
	component: string | JSX.Element;
	method: (() => void) | ((record: T) => void);
}

export interface IMobileTable<T> extends Partial<ITable<T>> {
	dropdown?: (record: T) => JSX.Element;
	mobileBodyClassName?: string;
	mobileHeadClassName?: string;
}

export interface ISortable {
	SortParameter: number;
	FilterDirection: FilterDirectionType;
}
