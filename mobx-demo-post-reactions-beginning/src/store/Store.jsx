import { observable,action, computed } from "mobx";

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

    @computed getCommentsCount()
    {
        return this.comments.length;
    }
}

const storeInstance = new Store()
export default storeInstance;

