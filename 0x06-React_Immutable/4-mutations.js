import { Map } from 'immutable';

const map = new Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

const map2 = map.merge({ 2: 'Benjamin', 4: 'Oliver' });

module.exports = { map, map2 };
