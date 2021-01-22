import RedeemModal from './Modals/RedeemModal';

function Product({ id, points, cost, img, category, name }) {
	return (
		<div key={id} className="item_container">
			<RedeemModal points={points} id={id} cost={cost} img={img} />
			<div className="item_img_container">
				<img className="item_img" src={img} alt="imagen del producto" />
			</div>
			<hr className="separator_item" />
			<div className="item_info">
				<div className="item_category">{category}</div>
				<div className="item_name">{name}</div>
			</div>
		</div>
	);
}

export default Product;
