import React from 'react';

import { Browser } from './styles';

const Repository = ({ route }) => {
  const repository = route.params.repository;

  return <Browser source={{ uri: repository.html_url }} />;
};

export default Repository;
