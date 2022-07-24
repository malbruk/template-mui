import React from 'react';

import VerticalNav4 from '../components/vertical-navs/VerticalNav4';

const meta = {};

export default function Sidebar() {
  return (
    <React.Fragment>
      <VerticalNav4
        content={{
          brand: {
            text: '',
            image: '/images/.png',
            width: '120',
          },
          link1: '\u05d3\u05d1\u05e8\u05d9\u05dd',
          link2: '\u05e9\u05d9\u05d7\u05d5\u05ea',
          link3: '\u05ea\u05de\u05d9\u05db\u05d4',
          link4: '\u05d7\u05e9\u05d1\u05d5\u05df',
        }}
        bucketMain={null}
      />
    </React.Fragment>
  );
}

