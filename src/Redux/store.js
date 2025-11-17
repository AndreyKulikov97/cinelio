import { configureStore } from "@reduxjs/toolkit";
import movies from './slices/moviesSlice';
import favorites from './slices/favoriteSlice'

const store = configureStore({
	reducer: {
		movies,
		favorites
	},
})

export default store; 