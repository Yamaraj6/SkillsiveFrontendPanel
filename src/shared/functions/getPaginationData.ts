import { ArrowDirection } from 'shared/enums';
import { IPagination } from 'shared/interfaces/IBaseFilterModel';

const getPaginationData = (direction: string, { Skip, Take }: IPagination): IPagination => {
	const itemsPerPage = direction === ArrowDirection.NEXT ? Take : -Take;

	return {
		Skip: Skip + itemsPerPage,
		Take
	};
};

export default getPaginationData;
