import React from 'react';
import style from './style.module.scss';
import play1 from '../../assets/playlist1.jpg';
import play2 from '../../assets/playlist2.jpg';
import play3 from '../../assets/playlist3.jpg';
import play4 from '../../assets/playlist4.jpg';

export function FeaturedPlaylist () {

	return (
		<div className={style.container}>

			<h1>Featured Playlist</h1>

			<div className={style.slidesContainer}>

				<div className={style.slide} >
					<img src={play1} />
					<div>
						<p>Only Stardust</p>
						<p>24 tracks</p>
					</div>

				</div>

				<div className={style.slide}>
					<img src={play2} />
					<div>
						<p>Mike Vella</p>
						<p>12 tracks</p>
					</div>
				</div>

				<div className={style.slide}>
					<img src={play3} />
					<div>
						<p>The best singles s2</p>
						<p>163 tracks</p>
					</div>
				</div>

				<div className={style.slide}>
					<img src={play4} />
					<div>
						<p>Indie</p>
						<p>138 tracks</p>
					</div>

				</div>
			</div>

		</div>
	);
}
