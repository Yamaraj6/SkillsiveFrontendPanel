import ISvgProps from 'shared/interfaces/ISvgProps';

function SearchEmblem({ className }: ISvgProps) {
	return (
		<svg className={className} width='19.169' height='19.586' viewBox='0 0 19.169 19.586'>
			<defs>
				<style>.{'SearchEmblema{fill:rgba(60,156,222,0.6);opacity:0.404;}.SearchEmblemb{fill:#3c9cde;}'}</style>
			</defs>
			<g transform='translate(-5.415 -5)'>
				<circle className='SearchEmblema' cx='8' cy='8' r='8' transform='translate(7 5)' />
				<path
					className='SearchEmblemb'
					d='M20,24.586a1,1,0,0,1-.606-.2L19.3,24.3l-3.4-3.4a8.286,8.286,0,0,0,5.943-3.653L22,17l2.3,2.3a1,1,0,0,1,.081,1.307L24.3,20.7l-3.6,3.6A1,1,0,0,1,20,24.586Zm-10,0a1,1,0,0,1-.607-.2L9.3,24.3,5.7,20.7a1,1,0,0,1-.081-1.306L5.7,19.3,8,17a8.283,8.283,0,0,0,5.81,3.86l.29.04-3.4,3.4A1,1,0,0,1,10,24.586Zm2.727-7.525a.51.51,0,0,1-.394-.192.487.487,0,0,1-.094-.42l.5-2.226a.5.5,0,0,0-.153-.482l-1.674-1.508a.5.5,0,0,1,.292-.869l2.15-.181a.5.5,0,0,0,.423-.315l.812-2.051a.5.5,0,0,1,.93,0l.812,2.051a.5.5,0,0,0,.423.315l2.149.181a.5.5,0,0,1,.292.869l-1.674,1.508a.5.5,0,0,0-.153.482l.5,2.226a.488.488,0,0,1-.094.42.51.51,0,0,1-.394.192.5.5,0,0,1-.27-.081l-1.792-1.151a.5.5,0,0,0-.54,0L13,16.98A.5.5,0,0,1,12.727,17.061Z'
				/>
			</g>
		</svg>
	);
}

export default SearchEmblem;
