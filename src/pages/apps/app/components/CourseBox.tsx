import PublicLayout from 'layouts/PublicLayout';
import styles from '../App.module.scss';

function CourseBox() {
	return (
		<>
			<div className={styles['right-box__box']}>
				<div className={styles['right-box__box-header']}>
					<img src={require('assets/images/icons/Device/CourseIcon.webp')} />

					<h2>BLS COVID - 19</h2>
				</div>

				<div className={styles['right-box__border']}></div>

				<div className={styles['right-box__box-body']}>
					<h2>Skills</h2>

					<div className={styles['right-box__box-body-content']}>
						<ul>
							<li>
								<img src={require('assets/images/icons/Skills/Fire_Extinguisher.svg')} alt={'emblem icon'} />

								<p>Obsługa Gaśnicy</p>
							</li>

							<li>
								<img src={require('assets/images/icons/Skills/Fire_Extinguisher.svg')} alt={'emblem icon'} />

								<p>Zachowanie podczas pożaru</p>
							</li>

							<li>
								<img src={require('assets/images/icons/Skills/Fire_Extinguisher.svg')} alt={'emblem icon'} />

								<p>Obsługa Gaśnicy</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

CourseBox.Layout = PublicLayout;

export default CourseBox;
