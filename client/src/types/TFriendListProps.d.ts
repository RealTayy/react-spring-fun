import { TFriend } from '.';
import { HTMLAttributes } from 'react';

type TFriendListProps = {
  title?: string,
  friends?: TFriend[],
  isSingle?: boolean,
  isFavorite?: boolean
} & HTMLAttributes<HTMLDivElement>

export default TFriendListProps;