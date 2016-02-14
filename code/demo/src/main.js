import React from 'react';
import { render } from 'react-dom';
import Icon from 'react-fontawesome';
import { bindActionCreators, combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import imageData from './data/images.json';
import styles from './styles.scss';

// Reducers
const INITIAL_STATE = {
  images: imageData,
  favorites: [],
};

function flipFavorited(image) {
  return { ...image, favorited: !image.favorited };
}

function imageReducer(state = {}, action) {
  switch (action.type) {
    case 'FAVORITE_IMAGE':
    case 'UNFAVORITE_IMAGE':
      if (state.id === action.image.id) {
        return flipFavorited(state);
      }
      return state;

    case 'EDIT_IMAGE':
      if (state.id === action.id) {
        return { ...state, editing: true };
      }
      return state;

    case 'STOP_EDIT_IMAGE':
      if (state.id === action.id) {
        return { ...state, editing: false };
      }
      return state;

    case 'SET_IMAGE_TEXT':
      if (state.id === action.id) {
        return { ...state, text: action.text };
      }
      return state;
    
    default:
      return state;
  }
}

function imageListReducer(state = imageData, action) {
  return state.map(image => imageReducer(image, action));
}

function favoritesReducer(state = [], action) {
  switch (action.type) {
    case 'FAVORITE_IMAGE':
      return state.concat(action.image);

    case 'UNFAVORITE_IMAGE':
      return state.filter(image => image.id !== action.image.id);

    case 'SET_IMAGE_TEXT':
      return state.map(image => {
        if (image.id === action.id) {
          return { ...image, text: action.text };
        }
        return image;
      });
    
    default:
      return state;
  }
}

const reducer = combineReducers({
  images: imageListReducer,
  favorites: favoritesReducer,
});

// Actions
const favoriteImage = (image) => ({ image, type: 'FAVORITE_IMAGE' });
const unfavoriteImage = (image) => ({ image, type: 'UNFAVORITE_IMAGE' });
const editImage = (id) => ({ id, type: 'EDIT_IMAGE' });
const setImageText = (id, text) => ({ id, text, type: 'SET_IMAGE_TEXT' });
const stopEditImage = (id) => ({ id, type: 'STOP_EDIT_IMAGE' });

// Store
const store = createStore(reducer);

const FavoritedImage = ({ src, text }) => (
  <div className={styles.favoritedImage}>
    <img src={src}/>
    <p>{text}</p>
  </div>
);

const FavoritedImages = ({ favorites }) => (
  <div className={styles.favoritedImages}>
    <h1>Favorites: {favorites.length}</h1>
    <ul>
      {favorites.map(image => (
        <li key={image.id}>
          <FavoritedImage {...image}/>
        </li>
      ))}
    </ul>
  </div>
);

const ImageListItem = ({
  id, src, text, editing, favorited,
  onEdit, onFavorite, onUnfavorite, onChangeText, onStopEdit,
}) => (
  <div className={styles.imageListItem}>
    <img src={src}/>

    {editing ?
      <p>
        <input
          type="text"
          value={text}
          onChange={e => onChangeText(id, e.target.value)}
          onKeyUp={e => {
            if (e.which === 13) {
              onStopEdit(id);
            }
          }}
        />
      </p> :

      <p onDoubleClick={onEdit}>{text}</p>
    }

    <button onClick={favorited ? onUnfavorite : onFavorite}>
      <Icon name={favorited ? 'star' : 'star-o'}/>
      {favorited ? ' Unfavorite' : ' Favorite'}
    </button>
  </div>
);

const ImageList = ({
  images, onFavoriteImage, onUnfavoriteImage, onEditImage, onChangeImageText,
  onStopEditImage,
}) => (
  <div>
    <h1>Images</h1>

    {images.map(image => (
      <ImageListItem
        key={image.id}
        {...image}
        onFavorite={() => onFavoriteImage(image)}
        onUnfavorite={() => onUnfavoriteImage(image)}
        onEdit={() => onEditImage(image.id)}
        onChangeText={onChangeImageText}
        onStopEdit={onStopEditImage}
      />
    ))}
  </div>
);

const ConnectedImageList = connect(
  null,
  mapDispatchToProps
)(ImageList);

const ImageGallery = ({ images }) => (
  <div>
    <ConnectedImageList images={images}/>
  </div>
);

const App = ({ images, favorites }) => (
  <div>
    <div className={styles.column}>
      <ImageGallery images={images}/>
    </div>
    <div className={styles.column}>
      <FavoritedImages favorites={favorites}/>
    </div>
  </div>
);

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onFavoriteImage: favoriteImage,
    onUnfavoriteImage: unfavoriteImage,
    onEditImage: editImage,
    onChangeImageText: setImageText,
    onStopEditImage: stopEditImage,
  }, dispatch);
}

const ConnectedApp = connect(
  mapStateToProps
)(App);

render(
  <Provider store={store}>
    <ConnectedApp/>
  </Provider>,
  document.getElementById('container')
);
