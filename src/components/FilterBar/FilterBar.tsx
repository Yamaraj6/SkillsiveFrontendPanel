import styles from './FilterBar.module.scss';
import { useEffect, useState } from 'react';
import { Moment } from 'moment';
import { Button, Collapse } from 'antd';
import { useTranslation } from 'react-i18next';
import DateRangePicker from 'components/DateRangePicker/DateRangePicker';
import ArrowButton from 'components/ArrowButton/ArrowButton';
import { FilterIcon } from 'assets/images/icons/FilterIcon';
import { DeleteIcon } from 'assets/images/icons/DeleteIcon';
import cx from 'classnames';
import AutoComplete from 'components/Autocomplete';
import getPaginationData from 'shared/functions/getPaginationData';
import { IAutoCompleteRequestBase, IAutoCompleteValue } from 'shared/interfaces/IAutoComplete';
import SearchInput from 'components/SearchInput';
import { IPageDataRequest, IPagination } from 'shared/interfaces/IBaseFilterModel';
import CoursesSelect from 'components/utilities/CoursesSelect';
import PlanSelect from 'components/utilities/PlanSelector';
import DevicesSelect from 'components/utilities/DevicesSelector';

interface IFilterProps {
	take?: number;
	onChangeFilter: (filter: IPageDataRequest) => void;
	onSearch?: (autoCompleteData: IAutoCompleteRequestBase) => void;
	autoCompleteItems?: IAutoCompleteValue[];
	itemsTotal: number;
	withPaging?: boolean;
	withDatePicker?: boolean;
	withAutoComplete?: boolean;
	defaultDateRange?: [Moment, Moment];
	children?: React.ReactNode;
	className?: string;
	placeholder?: string;
	withSearch?: boolean;
	withCourses?: boolean;
	withPlans?: boolean;
	withDevices?: boolean;
}

const { Panel } = Collapse;

function FilterBar({
	take,
	onChangeFilter,
	onSearch,
	autoCompleteItems,
	itemsTotal,
	withPaging,
	withDatePicker,
	withAutoComplete,
	children,
	className,
	placeholder,
	withSearch,
	withCourses,
	withPlans,
	withDevices
}: IFilterProps) {
	const { t } = useTranslation(['filters', 'app']);
	const [isAdvancedFilterBarOpen, setIsAdvancedFilterBarOpen] = useState<boolean>(false);
	const ADVANCED_FILTERS = 'ADVANCED_FILTERS';
	const [searchValue, setSearchValue] = useState<string | number | null>();
	const [pagination, setPagination] = useState<IPagination>({ Skip: 0, Take: take });
	const [dateRange, setDateRange] = useState<{ startDate: Moment; endDate: Moment }>();

	const handlePagination = (direction: string): void => {
		const paginationData = getPaginationData(direction, pagination);

		setPagination(paginationData);
	};

	useEffect(() => {
		const search = withAutoComplete ? { SearchId: Number(searchValue) } : { SearchValue: searchValue?.toString() };

		onChangeFilter({
			...search,
			...pagination,
			CreateDateFrom: dateRange?.startDate?.toDate(),
			CreateDateTo: dateRange?.endDate?.toDate()
		});
	}, [searchValue, pagination, dateRange]);

	return (
		<Collapse ghost activeKey={isAdvancedFilterBarOpen && ADVANCED_FILTERS} className={cx(styles.container, className)}>
			<div
				className={cx(styles['filter-basic'], {
					[styles['filter-basic--without-date-picker']]: !withDatePicker,
					[styles['filter-basic--without-advance-filters']]: !children
				})}
			>
				{withSearch && (
					<div className={styles['filter-basic__search']}>
						{withAutoComplete ? (
							<AutoComplete
								className={styles.autocomplete}
								onSearch={(searchValueData: string) => onSearch({ ...pagination, Phrase: searchValueData })}
								autoCompleteItems={autoCompleteItems}
								placeholder={t('app:searchByProduct')}
								onChange={setSearchValue}
								isLightTheme={true}
								withIcon={true}
							/>
						) : (
							<SearchInput
								className={styles.search}
								placeholder={placeholder && t('searchBy', { placeholder: placeholder })}
								onChange={setSearchValue}
								isLightTheme={true}
							/>
						)}
					</div>
				)}
				{withPaging && (
					<div className={styles['filter-basic__paging']}>
						<ArrowButton direction='back' active={pagination.Skip > 0} handlePagination={handlePagination} />

						<ArrowButton
							direction='next'
							active={pagination.Skip + pagination.Take < itemsTotal}
							handlePagination={handlePagination}
						/>
					</div>
				)}

				{withCourses && (
					// RESIZE
					// https://stackoverflow.com/questions/43817118/how-to-get-the-width-of-a-react-elementk
					<div className={styles['filter-basic__filter-select']}>
						<CoursesSelect withSuffics={!withDatePicker} />
					</div>
				)}

				{withPlans && (
					<div className={styles['filter-basic__filter-select']}>
						<PlanSelect withSuffics={!withDatePicker} />
					</div>
				)}

				{withDevices && (
					<div className={styles['filter-basic__filter-select']}>
						<DevicesSelect withSuffics={!withDatePicker} />
					</div>
				)}

				{withDatePicker && (
					<div className={styles['filter-basic__date-picker']}>
						<DateRangePicker onDateChange={setDateRange} />
					</div>
				)}

				{children && (
					<div className={styles['filter-basic__more-options']}>
						<Button
							icon={isAdvancedFilterBarOpen ? <DeleteIcon /> : <FilterIcon />}
							className={styles['filter-basic__expand-btn']}
							onClick={() => setIsAdvancedFilterBarOpen(prev => !prev)}
							type={isAdvancedFilterBarOpen ? 'default' : 'primary'}
						>
							{t('advancedFilters')}
						</Button>
					</div>
				)}
			</div>

			<Panel key={ADVANCED_FILTERS} header={<></>} showArrow={false}>
				<div className={styles['filter-advance']}>{children}</div>
			</Panel>
		</Collapse>
	);
}

FilterBar.defaultProps = {
	take: 20,
	withDatePicker: true,
	withAutoComplete: true,
	withPaging: true,
	autoCompleteItems: [],
	children: null,
	className: '',
	withSearch: true
};

export default FilterBar;
