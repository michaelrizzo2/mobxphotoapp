import React, { useContext } from "react";
import { StoreContext } from '../main';
import { useObserver } from 'mobx-react';

const store=useContext(StoreContext)
export default function Buttons() {
    const store = useContext(StoreContext)
    return useObserver(
                <button type="button" className="btn btn-light align-top" onClick={() => store.updateCount()}><i className="fa fa-thumbs-o-up" />Like</button>
    );
}