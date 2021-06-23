import chartProductType from '../../assets/svgs/chart-product-type.svg';
import close from '../../assets/svgs/close.svg';
import wavProductType from '../../assets/svgs/wav-product-type.svg';
import { CartItem, ProductType } from "../../providers/cartProvider";

export interface CartItemProps {
  item?: CartItem;
  isLoading?: boolean;
  handleSaveForLater: (item: CartItem) => void;
}

export function MyCartItem(props: CartItemProps) {
  const item = props.item ?? {} as CartItem;
  const productType = mapProductType(item.productType);
  const loadingClass = !!props.isLoading ? "loading" : '';

  return <li key={item.id}>
    <div className="row">
      <div className="product-info">
        <div className={`album-artwork ${loadingClass}`}>
          <img src={item.albumArtwork} />
        </div>
        <div className="song-title-and-artist">
          <span className={`song-title ${loadingClass}`}>
            {item.songTitle}
          </span>
          <span className={`artist ${loadingClass}`}>
            {item.artist}
          </span>
        </div>
        <div className="close-icon">
          <img src={close} />
        </div>
      </div>
      <div className={`product-type ${loadingClass}`}>
        <img src={productType.icon} />
        {productType.type}
      </div>
      <div className={`credits ${loadingClass}`}>
        {item.credits} Credits
      </div>
    </div>
    <div className="remove-or-save">
      <div className="desktop">
        <span>Remove</span>|<span onClick={() => props.handleSaveForLater(item)}>Save for later</span>
      </div>
      <div className="mobile">
        <button onClick={() => props.handleSaveForLater(item)}>Save For Later</button>
      </div>
    </div>
  </li>
}

const mapProductType = (productType: ProductType): { icon: string, type: string } => {
  return productType === ProductType.WAV ?
    {
      icon: wavProductType,
      type: 'MultiTrack WAV'
    } :
    {
      icon: chartProductType,
      type: 'Chart'
    }
}