var playlist = {Slowdive: 'Alison'
}

function updatePlaylist(playlist, artist, song){
  var newPlaylist = Object.assign({}, playlist, {[artist]: song})
  return newPlaylist
}

playlist = updatePlaylist(playlist, 'My Bloody Valentine')
console.log(playlist)