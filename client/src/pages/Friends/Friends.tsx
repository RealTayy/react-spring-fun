import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { FriendList } from '../../components/FriendList'

const Friends: FunctionComponent<RouteComponentProps> = () => {
  return (
    <div className="Friends">
      <FriendList
        title="All friends"
      />
      <FriendList
        title="Single friends"
        isSingle
      />
      <FriendList
        title="Favorite friends"
        isFavorite
      />
      <FriendList
        title="Single & Favorite Friends"
        isSingle
        isFavorite
      />
    </div>
  )
}

export default Friends
