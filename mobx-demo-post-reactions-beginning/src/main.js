import storeInstance from './store/Store'

export const StoreContext = React.createContext();

ReactDOM.render(
        <StoreContext.Provider value={storeInstance}>
            <Post />
        </StoreContext.Provider >
    , document.getElementById('app'));