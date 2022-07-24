import React from 'react';

import SignIn2 from '../components/sign-in/SignIn2';

const meta = {};

export default function Signin() {
  return (
    <React.Fragment>
      <SignIn2
        content={{
          brand: {
            text: '',
            image: '/images/arrow-logo.png',
            width: '40',
          },
          '02_header': '\u05d4\u05ea\u05d7\u05d1\u05e8\u05d5\u05ea',
          '02_primary-action': '\u05d4\u05ea\u05d7\u05d1\u05e8\u05d5\u05ea',
          '02_secondary-action':
            '\u05d0\u05d9\u05df \u05dc\u05da \u05e2\u05d3\u05d9\u05df \u05d7\u05e9\u05d1\u05d5\u05df?',
          '02_tertiary-action':
            '\u05e9\u05db\u05d7\u05ea \u05e1\u05d9\u05e1\u05de\u05d0?',
        }}
      />
    </React.Fragment>
  );
}

