export const sectionsConfig = {
  gameDev: { id: 'game-dev', name: 'Game Dev', color: 'cyan-300' },
  webDev: { id: 'web-dev', name: 'Web Dev', color: 'yellow-300' },
  uiUx: { id: 'ui-ux', name: 'UI/UX Designer', color: 'red-300' },
  video: { id: 'video-editor', name: 'Video Editor', color: 'green-300' },
  /*
    mystery: { id: 'mystery', name: '???', color: 'purple-300' },
  */
  contacts: { id: 'contacts', name: 'Contact', color: 'orange-300' },
}

// Un tableau simple pour boucler dans la NavbarItem
export const navLinks = Object.values(sectionsConfig)
