import React from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import { Menu, FeaturedPlaylist, ProfileViews, Tracks } from '../../components';
import style from './style.module.scss';


export default function Home () {


	return (
		<div className={style.body}>
			<Menu />

			<div className={style.container}>
				<div className={style.inputTextContainer} >
					<BiSearchAlt size={30} style={{color: '#808080', opacity: 0.9}} />
					<input type="text" placeholder="Search artist, playlist or track" />
				</div>

				<FeaturedPlaylist />

				<div className={style.viewsTracksContainer}>
					<ProfileViews />

					<Tracks />
				</div>

			</div>

		</div>
	);
}
