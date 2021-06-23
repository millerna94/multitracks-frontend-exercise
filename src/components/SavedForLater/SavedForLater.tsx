import { CartItem } from '../../providers/cartProvider';
import './SavedForLater.scss';
import { SavedForLaterItem } from './SavedForLaterItem';

export interface SavedForLaterProps {
  handleAddToCart: (item: CartItem) => void;
  isLoading: boolean;
  items: CartItem[];
}

export function SavedForLater({ handleAddToCart, items, isLoading }: SavedForLaterProps) {
  return <div className="saved-for-later">
    <h2>Saved for Later</h2>
    <ul>
      {items.map((item, index) => <SavedForLaterItem key={index} item={item} isLoading={isLoading} handleAddToCart={handleAddToCart} />)}
    </ul>
  </div>
}