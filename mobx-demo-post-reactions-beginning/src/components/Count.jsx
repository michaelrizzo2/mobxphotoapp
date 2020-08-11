import React,{useContent} from "react";
import {StoreContent } from "../main"

export default function Count()
{
    const store=useContent(StoreContent)
    return useObserver(()=>(
        <div className="row reactions-count" >
            <div className="col-sm" align="left">
                <i className="fa fa-thumbs-up" />{store.likesCount}
            </div>
            <div className="col-sm" align="right">
                {store.getCommentsCount} comments
        </div>
        </div>
    ))
}