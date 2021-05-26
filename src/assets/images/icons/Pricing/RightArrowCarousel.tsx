import cx from 'classnames';
import styles from './CarouselArrows.module.scss';

interface IArrowCarousel {
	className?: string;
	style?: any;
	onClick?: () => void;
}

function RightArrowCarousel({ className, style, onClick }: IArrowCarousel) {
	return (
		<svg
			className={cx(className, styles.next)}
			onClick={onClick}
			xmlns='http://www.w3.org/2000/svg'
			width='28'
			height='28'
			viewBox='0 0 28 28'
		>
			<defs>
				<style>{'.racA{fill:rgba(167,180,203,0.6);}.racBS{fill:#0f171e;}'}</style>
			</defs>
			<g transform='translate(-327 -590.38)'>
				<rect className='racA' width='4' height='28' rx='2' transform='translate(327 606.38) rotate(-90)' />
				<path
					className='racB'
					d='M19.414-31.414a2,2,0,0,0-2.828,0,2,2,0,0,0,0,2.828l12,12a2,2,0,0,0,2.766.06l12-11a2,2,0,0,0,.123-2.826,2,2,0,0,0-2.826-.123L30.06-20.768Z'
					transform='translate(371 634.38) rotate(-90)'
				/>
			</g>
		</svg>
	);
}

export default RightArrowCarousel;
