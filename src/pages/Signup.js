import React from 'react';

import SignIn1 from '../components/sign-in/SignIn1';

const meta = {};

export default function Signup() {
  return (
    <React.Fragment>
      <SignIn1
        content={{
          brand: {
            text: '',
            image: '/images/arrow-logo.png',
            width: '40',
          },
          header:
            '\u05d9\u05e6\u05d9\u05e8\u05ea \u05d7\u05e9\u05d1\u05d5\u05df \u05d7\u05d3\u05e9',
          terms:
            '\u05db\u05dc\u05dc\u05d9 \u05d4\u05d0\u05ea\u05e8 \u05de\u05d5\u05e1\u05db\u05de\u05d9\u05dd \u05e2\u05dc\u05d9',
          '01_primary-action': '\u05d4\u05e8\u05e9\u05de\u05d4',
          '01_secondary-action':
            '\u05d9\u05e9 \u05dc\u05da \u05db\u05d1\u05e8 \u05d7\u05e9\u05d1\u05d5\u05df? \u05d4\u05ea\u05d7\u05d1\u05e8\u05d5\u05ea',
        }}
      />
    </React.Fragment>
  );
}

