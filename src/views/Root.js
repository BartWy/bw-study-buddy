import React from 'react';
import { Wrapper } from './Root.styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate';
import Dashboard from 'views/Dashboard';
import FormField from '../components/moleculs/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { useError } from '../hooks/useError';
import ErrorMessage from '../components/moleculs/ErrorMesage/ErrorMessage';
import Notes from './Notes';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group" />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

const UnauthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(auth.signIn)}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <FormField
        label="login"
        name="login"
        id="login"
        {...register('login', { required: true })}
      />
      {errors.login && <span>Login is required</span>}
      <FormField
        label="password"
        name="password"
        id="password"
        type="password"
        {...register('password', { required: true })}
      />
      {errors.password && <span>Password is required</span>}
      <Button type="submit">Sign in</Button>
    </form>
  );
};

const Root = () => {
  const auth = useAuth();
  const { error } = useError();

  return (
    <>
      {error ? <ErrorMessage /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;
