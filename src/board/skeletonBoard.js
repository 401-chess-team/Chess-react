let wp = { color: 'white' };
let bp = { color: 'black' };

let skeletonBoard = [
  [
    { ...wp },
    { ...wp },
    { ...wp },
    { ...wp },
    { ...wp },
    { ...wp },
    { ...wp },
    { ...wp }
  ],
  [
    { ...wp },
    { ...wp },
    { ...wp },
    { ...wp },
    { ...wp },
    { ...wp },
    { ...wp },
    { ...wp }
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    { ...bp },
    { ...bp },
    { ...bp },
    { ...bp },
    { ...bp },
    { ...bp },
    { ...bp },
    { ...bp }
  ],
  [
    { ...bp },
    { ...bp },
    { ...bp },
    { ...bp },
    { ...bp },
    { ...bp },
    { ...bp },
    { ...bp }
  ]
];

export default skeletonBoard;
