import React from 'react';
import { users } from '../../../data/users';
import UsersListItem from '../../moleculs/UsersListItem/UsersListItem';
import PropTypes from 'prop-types';
import { Wrapper } from './UsersList.styles';

const UsersList = () => (
  <Wrapper>
    <ul>
      {users.map((userData, i) => (
        <UsersListItem index={i} userData={userData} />
      ))}
    </ul>
  </Wrapper>
);

UsersList.propTypes = {};
export default UsersList;
