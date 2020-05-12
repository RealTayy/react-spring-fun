import { useContext, createContext } from 'react';
import { RootStore } from '../stores';

const storeContext = createContext(new RootStore())

const useStore = () => useContext(storeContext);

export default useStore;