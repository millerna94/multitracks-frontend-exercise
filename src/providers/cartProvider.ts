import bethelMusic from '../assets/pngs/bethel-music-album-artwork.png';
import elevationWorship from '../assets/pngs/elevation-worship-album-artwork.png';
import hillsongWorship from '../assets/pngs/hillsong-worship-album-artwork.png';
import kariJobe from '../assets/pngs/kari-jobe-album-artwork.png';
import philWhickham from '../assets/pngs/phil-whickham-album-artwork.png';

export enum ProductType {
  WAV,
  Chart
}

export interface CartItem {
  id: number;
  songTitle: string;
  artist: string;
  productType: ProductType;
  credits: number;
  albumArtwork: string;
}

let myCartItems: CartItem[] = [{
  id: 1,
  songTitle: 'Graves Into Gardens',
  artist: 'Elevation Worship',
  productType: ProductType.WAV,
  credits: 39,
  albumArtwork: elevationWorship
},
{
  id: 2,
  songTitle: 'Goodness of God',
  artist: 'Bethel Music',
  productType: ProductType.Chart,
  credits: 2,
  albumArtwork: bethelMusic
}];

let savedForLaterItems: CartItem[] = [{
  id: 3,
  songTitle: 'Forever (Live Version)',
  artist: 'Kari Jobe',
  productType: ProductType.WAV,
  credits: 25,
  albumArtwork: kariJobe
},
{
  id: 4,
  songTitle: 'In God We Trust',
  artist: 'Hillson Worship',
  productType: ProductType.WAV,
  credits: 5,
  albumArtwork: hillsongWorship
}, {
  id: 5,
  songTitle: 'This is Amazing Grace',
  artist: 'Phil Whickham',
  productType: ProductType.WAV,
  credits: 15,
  albumArtwork: philWhickham
}];

export function getCartItems(): Promise<CartItem[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(myCartItems);
    }, 2500);
  });
}

export function removeFromMyCart(id: number): void {
  myCartItems = myCartItems.filter(item => item.id !== id);
}

export function addToMyCart(item: CartItem): void {
  myCartItems = [...myCartItems, item];
}

export function getSavedForLater(): Promise<CartItem[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(savedForLaterItems);
    }, 2500);
  });
}

export function removeFromSavedforLater(id: number): void {
  savedForLaterItems = savedForLaterItems.filter(item => item.id !== id);
}

export function addToSavedForLater(item: CartItem): void {
  savedForLaterItems = [...savedForLaterItems, item];
}