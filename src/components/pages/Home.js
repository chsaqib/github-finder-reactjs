import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';

export default function Home() {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
}
