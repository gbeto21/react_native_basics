import * as FileSystem from 'expo-file-system';

import { insertPlace, fetchPlaces } from '../helpers/db';
import ENV from '../env'

export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACES = 'SET_PLACES'


export const addPlace = (title, image, location) => {
  return async dispatch => {
    // console.log('Image sent> ');
    // console.log(image);

    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${ENV.googleApiKey}`)

    if (!response.ok) {
      throw new Error('Something went wrong fetching the address from google.')
    }

    const resData = await response.json()
    if (!resData.results) {
      throw new Error('Something went wrong fetching the address in the response.')
    }

    //const address = resData.results[0].fromatted_address
    const address = 'DEFAULT_ADDRESS'
    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath
      });
      const dbResult = await insertPlace(
        title,
        newPath,
        address,
        location.lat,
        location.lng
      );
      console.log(dbResult);
      dispatch({
        type: ADD_PLACE,
        placeData:
        {
          id: dbResult.insertId,
          title: title,
          image: newPath,
          address: address,
          coords: {
            lat: location.lat,
            lng: location.lng
          }
        }
      });

    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadPlaces = () => {
  return async dispatch => {
    try {
      const dbResult = await fetchPlaces()
      dispatch({ type: SET_PLACES, places: dbResult.rows._array })
    } catch (error) {
      throw err
    }
  }
}
