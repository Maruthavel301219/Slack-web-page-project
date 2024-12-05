import {legacy_createStore as createstore} from 'redux';
import Cartreducer from './reducers/reducer';

const store = createstore(Cartreducer);

export default store;