import {createStore} from 'redux'
import Vue from 'vue'
import Revue from 'revue'
import rootReducer from './root.js'


const reduxStore = createStore(rootReducer)
export const store = new Revue(Vue, reduxStore)
