var devfest = require('./data/devfest-2015')
module.exports = {
listerLesPresentateurs:function() {
  return devfest.speakers;
},

listerToutesLesSessions:function() {
  return devfest.sessions;
},

trouverUneSession: function(idSession) {
  return devfest.sessions.filter(function(session) {
    return session.id == idSession;
  })
},

listerTopPresentateurs:function() {
  return devfest.speakers.filter(function(sp) {
    return sp.topspeaker == true;
  })
}
}
