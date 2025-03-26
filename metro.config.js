const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  
  config.resolver.alias = {
    '@': path.resolve(__dirname, 'src'),
  };

  return config;
})(); 