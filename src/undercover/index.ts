enum ROLES {
  undercover = 1,
  mrWhite,
  lovers,
  avenger,
}

enum ROLESNAMES {
  undercover = "Undercover",
  mrWhite = "Mr. White",
  lovers = "Les amoureux",
  avenger = "La vengeuse",
}

enum STEPS {
  start = 1,
  selectRoles,
  selectModes,
  selectNumberRoles,
  game,
  gameOver,
}

var Undercover = {
  players: [],
  scores: [],
  roles: [ROLES.undercover, ROLES.mrWhite],
  allRoles: [ROLES.undercover, ROLES.mrWhite, ROLES.lovers, ROLES.avenger],
  step: STEPS.start
}

module.exports = { Undercover, ROLES, ROLESNAMES, STEPS }
