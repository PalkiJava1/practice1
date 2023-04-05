import { createStore } from 'redux'
import checkreducer from './redux/reducers/Reducer';

const store = createStore(
    checkreducer
);

export default store;