interface ISvgProps {
	className?: string;
}

export function ThumbUp({ className }: ISvgProps) {
	return (
		<svg viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
			<path
				opacity='0.6'
				fillRule='evenodd'
				clipRule='evenodd'
				d='M15 7H19C19.5523 7 20 7.44772 20 8V17C20 17.5523 19.5523 18 19 18H15V7Z'
				fill='#B3F1D2'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M14 7C10.2 7 10 2.8 10 2C10 0.89543 9.10458 0 8.00001 0C6.89544 0 6.00001 0.89543 6.00001 2C5.99938 3.73806 6.41061 5.45154 7.20001 7H1.30001C0.973538 6.98484 0.660256 7.13016 0.460987 7.38921C0.261718 7.64826 0.201611 7.98834 0.300011 8.3L2.80001 17.3C2.93576 17.7333 3.34641 18.0208 3.80001 18H15V7H14Z'
			/>
		</svg>
	);
}
