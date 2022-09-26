import React, { useEffect, useState } from "react";
import { addToDb, getStoredCard } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

import "./Shop.css";
const Shop = () => {
	const [products, setProducts] = useState([]);
	const asyncWayDataLoad = async () => {
		const url = "products.json";
		const res = await fetch(url);
		const data = await res.json();
		setProducts(data);
	};
	useEffect(() => {
		asyncWayDataLoad();
	}, []);

	useEffect(() => {
		const storedCart = getStoredCard();
		const saveCart = [];
		for (const id in storedCart) {
			const findProduct = products.find(product => product.id === id);
			if (findProduct) {
				const quantity = storedCart[id];
				findProduct.quantity = quantity;
				saveCart.push(findProduct);
				console.log(findProduct);
			}
		}
		setCart(saveCart);
	}, [products]);

	const [cart, setCart] = useState([]);
	const addToCart = selectProduct => {
		let newCart = [];
		const exist = cart.find(product => product.id === selectProduct.id);
		if (!exist) {
			selectProduct.quantity = 1;
			newCart = [...cart, selectProduct];
		} else {
			const rest = cart.filter(product => product.id !== selectProduct.id);
			exist.quantity = exist.quantity + 1;
			newCart = [...rest, exist];
		}
		setCart(newCart);
		addToDb(selectProduct.id);
	};
	return (
		<div className="shop-container">
			<div className="products-container">
				{products.map(product => (
					<Product
						addToCart={addToCart}
						key={product.id}
						product={product}></Product>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
