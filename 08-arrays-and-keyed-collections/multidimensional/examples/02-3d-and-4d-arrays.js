const array3D = [ // cube
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];

const array4D = [ // hypercube
    [
        [
            [1, 2],
            [3, 4]
        ],
        [
            [5, 6],
            [7, 8]
        ]
    ],
    [
        [
            [9, 10],
            [11, 12]
        ],
        [
            [13, 14],
            [15, 16]
        ]
    ]
];

console.log(array3D[1][0][1]); // 6
console.log(array4D[0][1][1][0]); // 7
