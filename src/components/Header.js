import Kite from '../assets/aerolab-logo.svg';
import Hero from '../assets/header-x1.png';
import GetCoins from './Modals/GetCoinsModal';
import History from './Modals/HistoryModal';
import FiltersContainer from './FiltersContainer';

const Header = () => {
	return (
		<>
			<div className="header">
				<div className="header_info_container">
					<img src={Kite} alt="aerolab-logo" />
					<GetCoins />
					<History />
				</div>
				<div className="header_hero_container">
					<img className="header_hero_img" src={Hero} alt="hero img" />
					<div className="header_hero_text">Electronics</div>
				</div>
			</div>
			<FiltersContainer />
		</>
	);
};

export default Header;
