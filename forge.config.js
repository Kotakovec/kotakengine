module.exports = {
  packagerConfig: {
    icon: './assets/icon' 
  },
  rebuildConfig: {},
  makers: [
    // Instalátor pro Windows (.exe)
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'KotakEngine',
        setupIcon: './assets/icon.ico',
        iconUrl: 'https://raw.githubusercontent.com/kotakovec/kotakengine/main/assets/icon.ico'
      },
    },
    // Instalátor pro Linux (Debian/Ubuntu - .deb)
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: './assets/icon.png' // Linux používá .png
        }
      }
    },
    // Instalátor pro Linux (Fedora/RedHat - .rpm)
    {
      name: '@electron-forge/maker-rpm',
      config: {}
    },
    // Verze pro Mac (jen pokud bys to dělal na Macu)
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    }
  ],
};