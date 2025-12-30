module.exports = {
  packagerConfig: {
    icon: './assets/icon',
    name: 'KotakEngine'
  },
  rebuildConfig: {},
  makers: [
    // Instalátor pro Linux (Debian/Ubuntu - .deb)
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: './assets/icon.png', // Ujisti se, že tenhle soubor máš v assets
          maintainer: 'Jakub',
          homepage: 'https://kotakengine.cz'
        }
      }
    },
    // Instalátor pro Linux (Fedora/RedHat - .rpm)
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          icon: './assets/icon.png'
        }
      }
    }
  ],
};