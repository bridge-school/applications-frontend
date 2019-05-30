import React from 'react';
import PageTitle from '../components/PageTitle';
import { Link } from 'react-router-dom';

export default function NotFound({ location }) {
  return (
    <div>
      <PageTitle title="Page Not Found" />
      <p>
        No page for <code>{location.pathname}</code> exists.
      </p>
      <Link to="/">See current applications</Link>
    </div>
  );
}
