import React from 'react';
import style from './style.module.scss';
import track1 from '../../assets/track1.jpg';
import track2 from '../../assets/track2.jpg';
import track3 from '../../assets/track3.jpg';
import track4 from '../../assets/track4.jpg';
import track5 from '../../assets/track5.jpg';
import track6 from '../../assets/track6.jpg';
import track7 from '../../assets/track7.jpg';

export function Tracks () {

	return(
		<div className={style.container}>
			<h2>Tracks</h2>

			<div className={style.trackBodyContainer}>

				<div className={style.trackContainer}>

					<img src={track1} />

					<div className={style.textContainer}>
						<p>Mahara Bon</p>
						<p>Sexy in Paris</p>
					</div>


				</div>

				<div className={style.trackContainer}>

					<img src={track2} />

					<div className={style.textContainer}>
						<p>Donna</p>
						<p>Pseudo-life</p>
					</div>


				</div>

				<div className={style.trackContainer}>

					<img src={track3} />

					<div className={style.textContainer}>
						<p>Avven</p>
						<p>Magic</p>
					</div>


				</div>

				<div className={style.trackContainer}>

					<img src={track4} />

					<div className={style.textContainer}>
						<p>Cony</p>
						<p>Livining</p>
					</div>


				</div>

				<div className={style.trackContainer}>

					<img src={track5} />

					<div className={style.textContainer}>
						<p>track 5</p>
						<p>album 5</p>
					</div>


				</div>

				<div className={style.trackContainer}>

					<img src={track6} />

					<div className={style.textContainer}>
						<p>track 6</p>
						<p>alnum 6</p>
					</div>


				</div>

				<div className={style.trackContainer}>

					<img src={track7} />

					<div className={style.textContainer}>
						<p>track 7</p>
						<p>alnum 7</p>
					</div>


				</div>

			</div>
		</div>
	);
}
