export enum Direction {
  Horizontal,
  Vertical
}

export enum Color {
  NotSet,
  Blue,
  Red
}

export interface ILine {
  direction: Direction
  id: string // v-2-4 means vertical-row:2-columns:4
  color: Color
}

// example:
// ._._._.
// | | | |
// ._._._.
// | | | |
// ._._._.

// (row 1):
// ._._._.
// | | | |

// (row 2):
// ._._._.
// | | | |

// (row 3):
// ._._._.
