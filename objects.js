var playlist = {Slowdive: 'Alison'
}

function updatePlaylist(playlist, artist, song){
  var newPlaylist = Object.assign({}, playlist, {[artist]: song})
  return newPlaylist
}

playlist = updatePlaylist(playlist, 'My Bloody Valentine', 'Sometimes')
playlist = updatePlaylist(playlist, 'Phil Ochs', "Here")
console.log(playlist)