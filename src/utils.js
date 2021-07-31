export const random = (max, min = 0, precision = 0) => (
  ( precision > 0 )
    ? parseFloat(
        ( Math.random() * ( max - min ) + min )
          .toPrecision(precision)
      )
    : Math.floor(Math.random() * Math.floor(max - min) + min)
);


export const range = (from, size) => (
  size > 0
    ? [...Array(size).keys()].map(i => i + from)
    : [...Array(Math.abs(size)).keys()].map(i => i + from + size)
);

