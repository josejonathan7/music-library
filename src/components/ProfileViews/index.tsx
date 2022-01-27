import React from 'react';
import style from './style.module.scss';
import viewOne from '../../assets/view1.jpg';
import viewTwo from '../../assets/view2.jpg';
import viewThre from '../../assets/view3.jpg';

export function ProfileViews () {


	return (
		<div className={style.container}>
			<h2>Profile Views</h2>

			<div className={style.profileBodyContainer}>
				<div className={style.profileContainer}>
					<div className={style.imageTextContainer}>
						<img src={viewOne}  />
						<div className={style.textContainer}>
							<p>Jenny Villa</p>
							<p>1 day ago</p>
						</div>
					</div>
					<p>4 albums</p>
				</div>

				<div className={style.profileContainer}>
					<div className={style.imageTextContainer}>
						<img src={viewTwo}  />
						<div className={style.textContainer}>
							<p>Aquila</p>
							<p>3 days ago</p>
						</div>
					</div>
					<p>2 albums</p>
				</div>

				<div className={style.profileContainer}>
					<div className={style.imageTextContainer}>
						<img src={viewThre}  />
						<div className={style.textContainer}>
							<p>This is War</p>
							<p>2 week ago</p>
						</div>
					</div>
					<p>5 albums</p>
				</div>
			</div>
		</div>
	);
}
