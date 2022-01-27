import React from 'react';
import style from './style.module.scss';
import Dany from '../../assets/profile.jpg';
import {BsNewspaper, MdOutlinePublic, GiLoveSong, FaCcDiscover, AiOutlineDashboard, BiMessageSquareDetail, IoIosNotificationsOutline, RiAccountCircleLine, AiOutlineSetting } from 'react-icons/all';

export function Menu() {


	return (
		<div className={style.menuBody}>

			<div className={style.profileContainer}>
				<img src={Dany} className={style.profileContainerImage} />
				<div className={style.profileContainerText}>
					<h3>Dany Schudler</h3>
					<div className={style.iconsDivText}>
						<p>edit profile</p>
						<AiOutlineSetting />
					</div>

				</div>
			</div>


			<div className={style.iconsContainer}>
				<div className={style.iconsDivText}>
					<MdOutlinePublic size={20} />
					<p>	Overview</p>
				</div>

				<div className={style.iconsDivText} >
					<BsNewspaper size={20} />
					<p>News</p>
				</div>

				<div className={style.iconsDivText} >
					<GiLoveSong size={20} />
					<p>Playlists</p>
				</div>

				<div className={style.iconsDivText} >
					<FaCcDiscover size={20} />
					<p>Discover</p>
				</div>
			</div>

			<div className={style.iconsContainer}>
				<div className={style.iconsDivText} >
					<AiOutlineDashboard size={20} />
					<p>Dashboard</p>
				</div>

				<div className={style.iconsDivText} >
					<BiMessageSquareDetail size={20} />
					<p>Messages</p>
				</div>

				<div className={style.iconsDivText} >
					<IoIosNotificationsOutline size={20} />
					<p>Notifications</p>
				</div>

				<div className={style.iconsDivText} >
					<RiAccountCircleLine size={20} />
					<p>Account</p>
				</div>
			</div>


		</div>
	);
}
