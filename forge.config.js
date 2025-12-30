module.exports = {
  packagerConfig: {
    icon: './assets/icon',
    name: 'KotakEngine'
  },
  rebuildConfig: {},
  makers: [
    // Windows
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        setupIcon: './assets/icon.ico',
      },
    },
    // Linux - Debian/Ubuntu
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: './assets/icon.png',
          maintainer: 'Jakub Kotoul',
          homepage: 'https://kotakovec.github.io/kotakengine/'
        }
      },
    },
    // Linux - Fedora/RedHat
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          icon: './assets/icon.png'
        }
      },
    },
    // Linux - Arch a univerzální (AppImage)
    {
      name: '@electron-forge/maker-appimage',
      config: {
        options: {
          icon: './assets/icon.png'
        }
      },
    }
  ],
};
