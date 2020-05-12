import { observable, action, computed } from 'mobx';
import { computedFn } from "mobx-utils"
import { TFriend, TGetFilteredFriendsParams } from '../types';
import { RootStore } from '.';

class FriendStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable
  friends: TFriend[] = [];

  @action
  makeFriend = ({
    name,
    isFavorite = false,
    isSingle = false
  }: TFriend) => {
    console.log(this)
    const oldFriend = this.friends.find(friend => friend.name === name)
    if (oldFriend) {
      oldFriend.isFavorite = isFavorite
      oldFriend.isSingle = isSingle
    } else {
      this.friends.push({ name, isFavorite, isSingle })
    }
  }

  getFilteredFriends = computedFn(function getFilteredFriends(
    this: FriendStore,
    {
      isSingle = false,
      isFavorite = false,
    }: TGetFilteredFriendsParams) {
    return this.friends.filter(friend => {
      if (isSingle && !friend.isSingle) return false;
      if (isFavorite && !friend.isFavorite) return false;
      return true
    })
  })


  @computed
  get singleFriends() {
    return this.friends.filter(friend => friend.isSingle)
  }

  @computed
  get favoriteFriends() {
    return this.friends.filter(friend => friend.isFavorite);
  }
}

export default FriendStore;
