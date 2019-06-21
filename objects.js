var playlist = {Slowdive: 'Alison'
}

function updatePlaylist(playlist, artist, song){
  var newPlaylist = Object.assign({}, playlist, {[artist]: song})
  return newPlaylist
}

console.log(playlist)