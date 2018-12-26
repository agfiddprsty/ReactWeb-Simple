const {defaults} = require('jest-config');
module.exports = {
  // . . . 
  moduleFileExtension: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  // . . .
};