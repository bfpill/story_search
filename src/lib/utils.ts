import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const DummyBook = {
  "title": "Whistles and Wheels: A Train Tale",
  "category": "Science",
  "pages": [

    {
      "pageNum": 1,
      "text": "In Whistleville, trains weren't just a mode of transport; they were beloved members of the community.",
      "images": [
        "Whistleville Station",
        "Happy Train"
      ],
      "background_image": "https://storage.googleapis.com/baggetters-38a7c.appspot.com/7e829a68-7616-4f6b-aa3c-fe228c050c1e",
      "background_image_query": "Countryside Tracks"
    },
    {
      "pageNum": 2,
      "text": "Benny, a bright blue engine, loved racing down the tracks, breezing past mountains and meadows.",
      "images": [
        "Benny the Engine",
        "Mountains and Meadows"
      ],
      "background_image": "https://storage.googleapis.com/baggetters-38a7c.appspot.com/53ed3459-feb1-47fc-8382-cdc87bcdddaf",
      "background_image_query": "Countryside Tracks"
    },
    {
      "pageNum": 3,
      "text": "He knew every twist and turn, thanks to the steel rails guiding his wheels, a brilliant invention enhancing travel.",
      "images": [
        "Steel Rails",
        "Twists and Turns"
      ],
      "background_image": "https://storage.googleapis.com/baggetters-38a7c.appspot.com/3125bed6-395e-41a7-a3aa-d34a289fa5bc",
      "background_image_query": "Steel Rails"
    },
    {
      "pageNum": 4,
      "text": "One day, Benny set a record, cheered on by townsfolk, embodying the spirit of Whistleville's train heritage.",
      "images": [
        "Record Setting Day",
        "Cheering Townsfolk"
      ],
      "background_image": "https://storage.googleapis.com/baggetters-38a7c.appspot.com/dab51f7a-4a61-4ee8-a98d-9352b5205f57",
      "background_image_query": "Steel Rails"
    }
  ],
  "color": "fushsia",
  "complementaryColor": "Azure"
}

export const dummy_user_id = "dummy"
export const dummy_search = "trains"

import image1 from '../assets/book_covers/img1.jpg';
import image3 from '../assets/book_covers/img3.jpg';

import image5 from '../assets/book_covers/img5.jpg';
import image6 from '../assets/book_covers/img6.jpg';

export const getRandomColor = () => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`;

export const getRandomCover = () => {
  const images = [image1, image3, image5, image6];
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  return randomImage
}