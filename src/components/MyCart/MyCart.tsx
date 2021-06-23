import arrowLeft from '../../assets/svgs/arrow-left.svg';
import { CartItem } from "../../providers/cartProvider";
import './MyCart.scss';
import { MyCartItem } from "./MyCartItem";

export interface MyCartProps {
  handleSaveForLater: (item: CartItem) => void;
  isLoading: boolean;
  items: CartItem[];
}

export function MyCart({ handleSaveForLater, items, isLoading }: MyCartProps) {
  return <div className="my-cart">
    <h1>My Cart</h1>
    <ul id="my-cart-list">
      {items.map((item, index) => <MyCartItem key={index} item={item} isLoading={isLoading} handleSaveForLater={handleSaveForLater} />)}
    </ul>
    <a className="continue-shopping">
      <img src={arrowLeft} />
      Continue shopping
    </a>
  </div>
}