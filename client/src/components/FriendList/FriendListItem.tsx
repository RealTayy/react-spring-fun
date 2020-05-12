import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react';
import { TFriendListItemProps } from '../../types';

const FriendListItem: FunctionComponent<TFriendListItemProps> =
  observer(({
    friend
  }) => {
    const { name, isFavorite, isSingle } = friend;
    return (
      <div className="FriendListItem">
        {name} {isSingle && ' ♥ '} {isFavorite && ' ★ '}
      </div>
    )
  })

export default FriendListItem
