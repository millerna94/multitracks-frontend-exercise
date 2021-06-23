import chartProductType from '../../assets/svgs/chart-product-type.svg';
import close from '../../assets/svgs/close.svg';
import wavProductType from '../../assets/svgs/wav-product-type.svg';
import { CartItem, ProductType } from "../../providers/cartProvider";


export interface SavedForLaterItemProps {
  item?: CartItem;
  isLoading?: boolean;
  handleAddToCart: (item: CartItem) => void;
}

export function SavedForLaterItem(props: SavedForLaterItemProps) {
  const item = props.item ?? {} as CartItem;
  const productType = mapProductType(item.productType);
  const loadingClass = !!props.isLoading ? "loading" : '';

  return <li>
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
      <div className={`remove-or-add ${loadingClass}`}>
        <span>Remove</span>
        <button onClick={() => props.handleAddToCart(item)}>Add To Cart</button>
      </div>
    </div>
  </li >
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