import React, { useState, MouseEvent, ChangeEvent, FunctionComponent, HTMLAttributes } from 'react'
import { useStore } from '../../hooks';
import { TFriend } from '../../types';
import { observer } from 'mobx-react';

const FormCreateFriend: FunctionComponent<HTMLAttributes<HTMLFormElement>> =
  observer(() => {
    const { friendStore } = useStore();

    const [friend, setFriend] = useState<TFriend>({
      name: '',
      isFavorite: false,
      isSingle: false
    })

    const handleOnSubmit = (
      e: MouseEvent<HTMLButtonElement>,
    ) => {
      e.preventDefault();
      friendStore.makeFriend(friend)
    }

    const handleOnChange = (
      e: ChangeEvent<HTMLInputElement>
    ) => {
      const { type, value, checked, name } = e.target;
      const input = type === 'text' ? value : checked;
      setFriend({ ...friend, [name]: input })
    }

    return (
      <form className="FormCreateFriend">
        Total friends: {friendStore.friends.length}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={friend.name}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Is Favorite:</label>
          <input
            type="checkbox"
            name="isFavorite"
            checked={friend.isFavorite}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Is Single:</label>
          <input
            type="checkbox"
            name="isSingle"
            checked={friend.isSingle}
            onChange={handleOnChange}
          />
        </div>
        <button
          onClick={handleOnSubmit}
        >
          Submit new friend
    </button>
      </form>
    )
  });

export default FormCreateFriend
