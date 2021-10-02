import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from '../../moleculs/UsersListItem/UsersListItem';
import { StyledList } from './StudentsList.styles';
import { UserShape } from 'types';
import { Title } from 'components/atoms/Title/Title';
import { useParams } from 'react-router-dom';
import { useStudents } from '../../../hooks/useStudents';

const UsersList = () => {
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
