import { observable,action } from "mobx";

class Store
{
    @observable likesCount=12

    @action updateCount()
    {
        this.likesCount++;
    }

    @observable comments = ["Wow", "awesome"]

    @action postCommment(comment)
    {
        this.comments.push(comment)
    }
}

const storeInstance = new Store()
export default storeInstance;

