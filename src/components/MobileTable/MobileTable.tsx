import { IMobileTable } from 'shared/interfaces/ITable';
import styles from './MobileTable.module.scss';
import { Checkbox, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { ColumnGroupType, ColumnType } from 'antd/lib/table';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';

function MobileTable<T>({ data, columns, rowCheck, dropdown, mobileBodyClassName, mobileHeadClassName }: IMobileTable<T>) {
	const { t } = useTranslation(['app']);
	const status = 'status';
	const [checkboxState, setCheckboxState] = useState<{ checkedBoxes: number[]; checkAll: boolean; indeterminate: boolean }>({
		checkedBoxes: [],
		checkAll: false,
		indeterminate: false
	});

	useEffect(() => {
		if (rowCheck && !_.isEmpty(checkboxState.checkedBoxes)) {
			rowCheck(checkboxState.checkedBoxes);
		}
	}, [checkboxState]);

	return (
		<div className={styles.table}>
			{rowCheck && (
				<Checkbox
					onChange={(e: CheckboxChangeEvent) =>
						setCheckboxState({
							checkedBoxes: e.target.checked ? data.map((x: T) => x['id']) : [],
							indeterminate: false,
							checkAll: e.target.checked
						})
					}
					indeterminate={checkboxState.indeterminate}
					checked={checkboxState.checkAll}
					className={styles['table__check-all']}
				>
					{t('checkAll')}
				</Checkbox>
			)}

			<Checkbox.Group value={checkboxState.checkedBoxes}>
				{data?.map((row: T, key: number) => (
					<div key={key}>
						<div className={styles['table__row']}>
							<div className={cx(styles.head, mobileHeadClassName)}>
								<div className={styles['head__left']}>
									{rowCheck && (
										<Checkbox
											className={styles.checkbox}
											value={row['id']}
											onChange={(e: CheckboxChangeEvent): void =>
												checkboxState.checkedBoxes.includes(e.target.value)
													? setCheckboxState({
															checkedBoxes: checkboxState.checkedBoxes.filter(
																(x: number) => x != e.target.value
															),
															indeterminate:
																!!(checkboxState.checkedBoxes.length - 1) &&
																checkboxState.checkedBoxes.length - 1 < data?.length,
															checkAll: false
													  })
													: setCheckboxState({
															checkedBoxes: [e.target.value, ...checkboxState.checkedBoxes],
															indeterminate:
																!!(checkboxState.checkedBoxes.length + 1) &&
																checkboxState.checkedBoxes.length + 1 < data?.length,
															checkAll: checkboxState.checkedBoxes.length + 1 === data?.length
													  })
											}
										/>
									)}

									<div className={columns[0]['mobileClassName']}>
										{columns[0].render ? columns[0].render(row[Object.keys(row)[0]], row, 1) : row[Object.keys(row)[0]]}
									</div>
								</div>

								<div className={styles['head__right']}>
									{row[`${status}`] && (
										<div className={cx(styles.status, `${columns.find(x => x.key === status)['mobileClassName']}`)}>
											{columns.find(x => x.key === status).render(row[`${status}`], row, 2)}
										</div>
									)}

									{dropdown && <div className={styles.dropdown}>{dropdown(row)}</div>}
								</div>
							</div>

							<div className={cx(styles.tbody, mobileBodyClassName)}>
								{columns
									?.slice(1)
									.filter((col: ColumnGroupType<T> | ColumnType<T>) => !(col.key === status))
									.map((col: ColumnGroupType<T> | ColumnType<T>, id: number) => (
										<Row key={id}>
											<Col span={6} className={styles['single-col']}>
												<span className={col['mobileClassName']}>{col.title}</span>
											</Col>

											<Col xs={18} className={styles['single-row']}>
												<span>
													{col.render
														? col.render(row[Object.keys(row)[id + 1]], row, id + 1)
														: row[Object.keys(row)[id + 1]]}
												</span>
											</Col>
										</Row>
									))}
							</div>
						</div>
					</div>
				))}
			</Checkbox.Group>
		</div>
	);
}

export default MobileTable;
