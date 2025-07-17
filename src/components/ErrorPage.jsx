import React from 'react';
import { useRouteError } from 'react-router-dom';


function ErrorPage() {
    const error = useRouteError();
    console.log(error, 'error');
  return (
    <div>ErrorPage</div>
  )
}

export default ErrorPage;