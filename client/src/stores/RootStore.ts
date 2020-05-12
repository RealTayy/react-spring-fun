import { FriendStore } from ".";

class RootStore {
  friendStore: FriendStore;
  
    constructor() {
      this.friendStore = new FriendStore(this);
    }
}

export default RootStore;