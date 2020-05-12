import React, { FunctionComponent } from 'react'
import { FormCreateFriend } from '../../components/Form';
import { RouteComponentProps } from 'react-router-dom';

const AddFriend: FunctionComponent<RouteComponentProps> = () => {
  return (
    <div className="AddFriend">
      <FormCreateFriend />
    </div>
  )
}

export default AddFriend
