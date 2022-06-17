import { useContext, useState } from "react";
import { createContext } from "react";

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    isLike: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1655319492860-9efedabbea98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    isLike: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1655317175238-b59bf8eb0469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    isLike: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1638913974023-cef988e81629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    isLike: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1655389158869-d772ffb51dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    isLike: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1655395340958-1c2a24c9742a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=432&q=80",
    isLike: false,
  },
];

const GalleryContext = createContext();
function GalleryProvider(props) {
  const [photos, setPhotos] = useState(fakeData);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  function toggleFavorite(photoId) {
    const updateArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isLike: !photo.isLike };
      }
      return photo;
    });
    setPhotos(updateArray);
  }

  const value = {
    photos,
    cartItems,
    favoriteList,
    setPhotos,
    setCartItems,
    setFavoriteList,
    toggleFavorite,
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a GalleryProvider");
  return context;
}
export { GalleryProvider, useGallery };
