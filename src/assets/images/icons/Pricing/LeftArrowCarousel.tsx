import cx from 'classnames';
import styles from './CarouselArrows.module.scss';

interface IArrowCarousel {
	className?: string;
	style?: any;
	onClick?: () => void;
}

function LeftArrowCarousel({ className, style, onClick }: IArrowCarousel) {
	return (
		<svg
			className={cx(className, styles.previous)}
			onClick={onClick}
			xmlns='http://www.w3.org/2000/svg'
			width='28'
			height='28.001'
			viewBox='0 0 28 28.001'
		>
			<defs>
				<style>{`.lac{fill:rgba(167,180,203,0.4);}, ${style}`}</style>
			</defs>
			<g transform='translate(-19.999 -590.38)'>
				<path
					className='lac'
					d='M-10827.413-1220.645l-11.96-11.96a2,2,0,0,1-.614-1.224v0c0-.013,0-.026,0-.04s0-.01,0-.015a.283.283,0,0,1,0-.029c0-.01,0-.021,0-.031s0-.01,0-.015a1.993,1.993,0,0,1,.522-1.452l11-12a2,2,0,0,1,2.826-.122,2,2,0,0,1,.123,2.827l-7.929,8.649H-10814a2,2,0,0,1,2,2,2,2,0,0,1-2,2h-19.172l8.586,8.586a2,2,0,0,1,0,2.829,1.994,1.994,0,0,1-1.413.586A1.994,1.994,0,0,1-10827.413-1220.645Z'
					transform='translate(10860 1838.44)'
				/>
			</g>
		</svg>
	);
}

export default LeftArrowCarousel;
