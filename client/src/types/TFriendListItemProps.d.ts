import { TFriend } from '.';
import { HTMLAttributes } from 'react';

type TFriendListItemProps = {
  friend: TFriend
} & HTMLAttributes<HTMLDivElement>

export default TFriendListItemProps;