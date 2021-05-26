import { useWindowWidth } from '@react-hook/window-size';
import { Table as AntTable, Dropdown, Menu } from 'antd';
import { ColumnType, SorterResult } from 'antd/lib/table/interface';
import { useTranslation } from 'react-i18next';
import { ColumnDirection, FilterDirectionType } from 'shared/enums';
import { ITable } from 'shared/interfaces/ITable';
import styles from './Table.module.scss';

interface ITableConstrains {
	id: number;
	[key: string]: any;
}

interface IColumnType<T> extends ColumnType<T> {
	sortParam: number;
}

export interface ISorterResult<T> extends SorterResult<T> {
	column: IColumnType<T>;
}

function Table<T extends ITableConstrains>({
	data,
	columns,
	handleTableChange,
	breakWidth,
	rowCheck,
	actions,
	rowClick,
	children
}: ITable<T>) {
	const { t } = useTranslation(['app']);
	const currentWidth = useWindowWidth();

	const menu = (record: T): JSX.Element => (
		<Menu>
			{actions?.map((action, id) => (
				<Menu.Item onClick={() => action.method(record)} key={id}>
					{action.component}
				</Menu.Item>
			))}
		</Menu>
	);

	const dropdown = (record: T): JSX.Element => (
		<Dropdown overlay={menu(record)}>
			<a className={styles.dropdown}>
				<img src={require('assets/images/icons/dots.svg')} alt='dots' />
			</a>
		</Dropdown>
	);

	return (
		<div className={styles.box}>
			{currentWidth > breakWidth ? (
				<AntTable
					columns={[
						...columns,
						...(actions
							? [
									{
										title: t('actions'),
										dataIndex: 'actions',
										key: 'actions',
										render: (_, record: T) => dropdown(record)
									}
							  ]
							: [])
					]}
					rowKey={record => record.id}
					dataSource={data}
					pagination={false}
					onRow={record => {
						return {
							onClick: event => {
								rowClick(record);
							}
						};
					}}
					onChange={(_, __, sort: ISorterResult<T>) =>
						handleTableChange({
							SortParameter: sort.column?.sortParam,
							FilterDirection:
								sort.order === ColumnDirection.ASCEND ? FilterDirectionType.ASCENDING : FilterDirectionType.DESCENDING
						})
					}
					rowSelection={
						rowCheck && {
							onChange: (selectedKeys: number[]) => rowCheck(selectedKeys)
						}
					}
				/>
			) : (
				children
				// children({
				// 	data: data,
				// 	columns: columns,
				// 	rowCheck,
				// 	dropdown: actions && ((record: T) => dropdown(record))
				// })
			)}
		</div>
	);
}

Table.defaultProps = {
	rowCheck: null,
	actions: null,
	handleTableChange: () => {
		return;
	},
	children: <></>,
	breakWidth: 1000,
	rowClick: () => {
		return;
	}
};

export default Table;
