import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import Track from './track';

/** importing our pages */
import Tracks from './tracks';

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
      <Track path="/track/:trackId" />
    </Router>
  );
}
