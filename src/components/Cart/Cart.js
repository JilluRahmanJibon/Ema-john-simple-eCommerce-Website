import {
	faArrowRightLong,
	faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";
const Cart = ({ cart }) => {
	let total = 0;
	let shipping = 0;
	let quantity = 0;

	for (const product of cart) {
		quantity = quantity + product.quantity;
		total = total + product.price * quantity;
		shipping = shipping + product.shipping;
	}
	const tax = (total * 0.1).toFixed(2);
	const grandTotal = total + shipping + parseFloat(tax);
	return (
		<div className="cart">
			<h2 className="order-summay">Product Summary</h2>
			<p>Selected Items: {quantity}</p>
			<p>Total Price: ${total}</p>
			<p>Total Shipping Charge: ${shipping}</p>
			<p>Tax: ${tax}</p>
			<h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
			<div className="clear-review-btn">
				<button className="clear-cart">
					<p>
						Clear Cart{" "}
						<FontAwesomeIcon
							className="icon-clear-or-revie"
							icon={faTrashCan}></FontAwesomeIcon>{" "}
					</p>
				</button>
				<button className="review-order">
					<p>
						Review Order{" "}
						<FontAwesomeIcon
							className="icon-clear-or-revie"
							icon={faArrowRightLong}></FontAwesomeIcon>
					</p>
				</button>
			</div>
		</div>
	);
};

export default Cart;
