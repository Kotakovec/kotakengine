module.exports = {
  packagerConfig: {
    icon: './assets/icon',
    name: 'KotakEngine'
  },
  rebuildConfig: {},
  makers: [
    // Windows (.exe)
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        setupIcon: './assets/icon.ico',
      },
    },
    // Ubuntu / Pop!_OS (.deb)
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
    // Fedora (.rpm)
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          icon: './assets/icon.png'
        }
      },
    },
    // Arch Linux a univerzální Linux (.AppImage)
    {
      name: '@electron-forge/maker-appimage',
      config: {
        options: {
          icon: './assets/icon.png'
        }
      },
    },
   // macOS (.dmg)
    {
      name: '@electron-forge/maker-dmg',
      config: {
        // Tento řádek jsme upravili, aby nehledal .icns, pokud ho nemáš
        name: 'KotakEngine'
      },
    }
  ],
};

