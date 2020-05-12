import React, { FunctionComponent } from 'react'
import { useStore } from '../../hooks';
import { observer } from 'mobx-react';
import { FriendListItem } from '.';
import { TFriendListProps, TFriend } from '../../types';

const FriendList: FunctionComponent<TFriendListProps> =
  observer(({
    title,
    friends: friendsFromProp,
    isSingle = false,
    isFavorite = false
  }) => {
    const { friendStore } = useStore();
    const friends: TFriend[] = friendsFromProp || friendStore.getFilteredFriends({ isSingle, isFavorite })
    return (
      <div className="FriendList">
        {title && title}
        {friends.map((friend, i) => <FriendListItem key={i} friend={friend} />)}
      </div>
    )
  })

export default FriendList
