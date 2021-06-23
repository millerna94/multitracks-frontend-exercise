import { useEffect, useState } from 'react';
import { CartItem, getCartItems, getSavedForLater } from '../providers/cartProvider';
import './MainContent.scss';
import { MyCart } from './MyCart/MyCart';
import { OrderSummary } from './OrderSummary';
import { SavedForLater } from './SavedForLater/SavedForLater';

export function MainContent() {
  const [myCartLoading, setMyCartLoading] = useState<boolean>(true);
  const [myCartItems, setMyCart] = useState<CartItem[]>([{}, {}] as CartItem[]);

  useEffect(() => {
    getCartItems().then(items => {
      setMyCart(items);
      setMyCartLoading(false);
    });
  }, []);

  const [savedForLaterLoading, setSavedForLaterLoading] = useState<boolean>(true);
  const [savedForLater, setSavedForLater] = useState<CartItem[]>([{}, {}, {}] as CartItem[]);

  useEffect(() => {
    getSavedForLater().then(items => {
      setSavedForLater(items);
      setSavedForLaterLoading(false)
    });
  }, []);

  const handleSaveForLater = (item: CartItem) => {
    setMyCart(myCartItems.filter(t => t.id !== item.id));
    setSavedForLater([...savedForLater, item]);
  }

  const handleAddToCart = (item: CartItem) => {
    setSavedForLater(savedForLater.filter(s => s.id !== item.id));
    setMyCart([...myCartItems, item]);
  }

  return <div className="main-content">
    <MyCart items={myCartItems} handleSaveForLater={handleSaveForLater} isLoading={myCartLoading} />
    <SavedForLater items={savedForLater} handleAddToCart={handleAddToCart} isLoading={savedForLaterLoading} />
    <OrderSummary isLoading={myCartLoading && savedForLaterLoading} />
  </div>
}