var playlist = {
  oasis: "wonderwall"
}
function updatePlaylist(playlist, aristName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}
var playlist = {artistName: "Random"}
function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  playlist
}
