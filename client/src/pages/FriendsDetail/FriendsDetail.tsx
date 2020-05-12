import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { TFriendsDetailParams } from '../../types';

const FriendsDetail: FunctionComponent<RouteComponentProps<TFriendsDetailParams>> = ({ match }) => {
  return (
    <div className="FriendsDetail">
      I am FriendsDetail Component [id:{match.params.id}]
    </div>
  )
}

export default FriendsDetail
