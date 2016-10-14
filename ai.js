var t = new Array(24);

function ai() {
  var id = Math.floor(Math.random() * 24);
  t[id] ? ai() : move(id, 'ai');
}

function checkEnd() {
  if (t[0]=='ai' && t[1]=='ai' && t[2]=='ai' && t[3]=='ai' && t[4]=='ai' || t[0]=='player' && t[1]=='player' && t[2]=='player' && t[3]=='player'  && t[4]=='player')  return true;
  if (t[5]=='ai' && t[6]=='ai' && t[7]=='ai' && t[8]=='ai' && t[9]=='ai' || t[5]=='player' && t[6]=='player' && t[7]=='player' && t[8]=='player' && t[9]=='player')  return true;
  if (t[10]=='ai' && t[11]=='ai' && t[12]=='ai' && t[13]=='ai' && t[14]=='ai' || t[10]=='player' && t[11]=='player' && t[12]=='player' && t[13]=='player' && t[14]=='player')  return true;
  if (t[15]=='ai' && t[16]=='ai' && t[17]=='ai' && t[18]=='ai' && t[19]=='ai' || t[15]=='player' && t[16]=='player' && t[17]=='player' && t[18]=='player' && t[19]=='player')  return true;
  if (t[20]=='ai' && t[21]=='ai' && t[22]=='ai' && t[23]=='ai' && t[24]=='ai' || t[20]=='player' && t[21]=='player' && t[22]=='player' && t[23]=='player' && t[24]=='player')  return true;
  if (t[0]=='ai' && t[6]=='ai' && t[12]=='ai' && t[18]=='ai' && t[24]=='ai' || t[0]=='player' && t[6]=='player' && t[12]=='player' && t[18]=='player' && t[24]=='player')  return true;//диагональ
  if (t[0]=='ai' && t[5]=='ai' && t[10]=='ai' && t[15]=='ai' && t[20]=='ai' || t[0]=='player' && t[5]=='player' && t[10]=='player' && t[15]=='player'  && t[20]=='player')  return true;
  if (t[1]=='ai' && t[6]=='ai' && t[11]=='ai' && t[16]=='ai' && t[21]=='ai' || t[1]=='player' && t[6]=='player' && t[11]=='player' && t[16]=='player' && t[21]=='player')  return true;
  if (t[2]=='ai' && t[7]=='ai' && t[12]=='ai' && t[17]=='ai' && t[22]=='ai' || t[2]=='player' && t[7]=='player' && t[12]=='player' && t[17]=='player' && t[22]=='player')  return true;
  if (t[3]=='ai' && t[8]=='ai' && t[13]=='ai' && t[18]=='ai' && t[23]=='ai' || t[3]=='player' && t[8]=='player' && t[14]=='player' && t[18]=='player' && t[23]=='player')  return true;
  if (t[4]=='ai' && t[9]=='ai' && t[14]=='ai' && t[19]=='ai' && t[24]=='ai' || t[4]=='player' && t[9]=='player' && t[14]=='player' && t[19]=='player' && t[24]=='player')  return true;
  if (t[4]=='ai' && t[4]=='ai' && t[6]=='ai' && t[6]=='ai' && t[6]=='ai' || t[2]=='player' && t[4]=='player' && t[6]=='player' && t[4]=='player' && t[4]=='player')  return true;//диагональ
  if(t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8] && t[9] && t[10] && t[11] && t[12] && t[13] && t[14] && t[15] && t[16] && t[17] && t[18] && t[19] && t[20] && t[21] && t[22] && t[23] && t[24]) return true;
}

function move(id, role) {
  if(t[id]) return false;
  t[id] = role;
  document.getElementById(id).className = 'cell ' + role;
  !checkEnd() ? (role == 'player') ? ai() : null : reset()
}

function reset() {
  alert("Игра окончена!");
  location.reload();
}
