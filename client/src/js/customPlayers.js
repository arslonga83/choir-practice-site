import Plyr from 'plyr';

function initializePlayers() {
  return Plyr.setup('.custom-player', {
    speed: {
    selected: 1,
    options: [0.5, 0.75, 1]
    },
    disableContextMenu: false,
  });
}

export { initializePlayers }