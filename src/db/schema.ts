import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  nick: text('nick'),
  created: text('created'),
  pinUrl: text('pinUrl'),
  pinAnchor: text('pinAnchor'),
  fullBodyPin: text('fullBodyPin'),
  url: text('url'),
  id: text('id').primaryKey(),
  countryCode: text('countryCode'),

  brLevel: integer('brLevel'),
  brDivision: integer('brDivision'),

  progressXp: integer('progressXp'),
  progressLevel: integer('progressLevel'),
  progressLevelxp: integer('progressLevelxp'),
  progressNextlevel: integer('progressNextlevel'),
  progressNextlevelxp: integer('progressNextlevelxp'),
  progressTitleId: integer('progressTitleId'),
  progressTitleTierid: integer('progressTitleTierid'),

  competitiveElo_deprecated: real('competitiveElo_deprecated'),
  competitiveRating_deprecated: integer('competitiveRating_deprecated'),
  competitiveLastratingchange_deprecated: integer(
    'competitiveLastratingchange_deprecated'
  ),
  competitiveDivisionType_deprecated: integer(
    'competitiveDivisionType_deprecated'
  ),
  competitiveDivisionStartrating_deprecated: integer(
    'competitiveDivisionStartrating_deprecated'
  ),
  competitiveDivisionEndrating_deprecated: integer(
    'competitiveDivisionEndrating_deprecated'
  ),
  competitiveOnleaderboard_deprecated: integer(
    'competitiveOnleaderboard_deprecated'
  ),

  lastNameChange: text('lastNameChange'),
  lastNickOrCountryChange: text('lastNickOrCountryChange'),
  isBanned: integer('isBanned'),
  chatBan: integer('chatBan'),
  nameChangeAvailableAt: text('nameChangeAvailableAt'),
  avatarFullbodypath: text('avatarFullbodypath'),
  isBotUser: integer('isBotUser'),
  suspendedUntil: text('suspendedUntil'),

  clubTag: text('clubTag'),
  clubClubid: text('clubClubid'),

  rankedTeamDuelsStandardNumgamesplayed: integer(
    'rankedTeamDuelsStandardNumgamesplayed'
  ),
  rankedTeamDuelsStandardNumwins: integer('rankedTeamDuelsStandardNumwins'),
  rankedTeamDuelsStandardWinratio: real('rankedTeamDuelsStandardWinratio'),

  rankedTeamDuelsNoMoveNumgamesplayed: integer(
    'rankedTeamDuelsNoMoveNumgamesplayed'
  ),
  rankedTeamDuelsNoMoveNumwins: integer('rankedTeamDuelsNoMoveNumwins'),
  rankedTeamDuelsNoMoveWinratio: real('rankedTeamDuelsNoMoveWinratio'),

  rankedTeamDuelsNmpzNumgamesplayed: integer(
    'rankedTeamDuelsNmpzNumgamesplayed'
  ),
  rankedTeamDuelsNmpzNumwins: integer('rankedTeamDuelsNmpzNumwins'),
  rankedTeamDuelsNmpzWinratio: real('rankedTeamDuelsNmpzWinratio'),

  rankedTeamDuelsTotalNumgamesplayed: integer(
    'rankedTeamDuelsTotalNumgamesplayed'
  ),
  rankedTeamDuelsTotalNumwins: integer('rankedTeamDuelsTotalNumwins'),
  rankedTeamDuelsTotalWinratio: real('rankedTeamDuelsTotalWinratio'),

  battleRoyaleDistanceNumgamesplayed: integer(
    'battleRoyaleDistanceNumgamesplayed'
  ),
  battleRoyaleDistanceAvgposition: real('battleRoyaleDistanceAvgposition'),
  battleRoyaleDistanceNumwins: integer('battleRoyaleDistanceNumwins'),
  battleRoyaleDistanceWinratio: real('battleRoyaleDistanceWinratio'),
  battleRoyaleDistanceAvgguessdistance: real(
    'battleRoyaleDistanceAvgguessdistance'
  ),
  battleRoyaleDistanceNumguesses: integer('battleRoyaleDistanceNumguesses'),

  battleRoyaleCountryNumgamesplayed: integer(
    'battleRoyaleCountryNumgamesplayed'
  ),
  battleRoyaleCountryAvgposition: real('battleRoyaleCountryAvgposition'),
  battleRoyaleCountryNumwins: integer('battleRoyaleCountryNumwins'),
  battleRoyaleCountryWinratio: real('battleRoyaleCountryWinratio'),
  battleRoyaleCountryNumguesses: integer('battleRoyaleCountryNumguesses'),
  battleRoyaleCountryAvgcorrectguesses: real(
    'battleRoyaleCountryAvgcorrectguesses'
  ),

  battleRoyaleMedalsMedalcountgold: integer('battleRoyaleMedalsMedalcountgold'),
  battleRoyaleMedalsMedalcountsilver: integer(
    'battleRoyaleMedalsMedalcountsilver'
  ),
  battleRoyaleMedalsMedalcountbronze: integer(
    'battleRoyaleMedalsMedalcountbronze'
  ),

  competitiveCityStreaksNumgamesplayed: integer(
    'competitiveCityStreaksNumgamesplayed'
  ),
  competitiveCityStreaksAvgposition: real('competitiveCityStreaksAvgposition'),
  competitiveCityStreaksNumwins: integer('competitiveCityStreaksNumwins'),
  competitiveCityStreaksWinratio: real('competitiveCityStreaksWinratio'),
  competitiveCityStreaksNumguesses: integer('competitiveCityStreaksNumguesses'),
  competitiveCityStreaksAvgcorrectguesses: real(
    'competitiveCityStreaksAvgcorrectguesses'
  ),

  competitiveStreaksMedalsMedalcountgold: integer(
    'competitiveStreaksMedalsMedalcountgold'
  ),
  competitiveStreaksMedalsMedalcountsilver: integer(
    'competitiveStreaksMedalsMedalcountsilver'
  ),
  competitiveStreaksMedalsMedalcountbronze: integer(
    'competitiveStreaksMedalsMedalcountbronze'
  ),

  duelsNumgamesplayed: integer('duelsNumgamesplayed'),
  duelsAvgposition: real('duelsAvgposition'),
  duelsNumwins: integer('duelsNumwins'),
  duelsWinratio: real('duelsWinratio'),
  duelsAvgguessdistance: real('duelsAvgguessdistance'),
  duelsNumguesses: integer('duelsNumguesses'),
  duelsNumflawlesswins: integer('duelsNumflawlesswins'),

  duelsNoMoveNumgamesplayed: integer('duelsNoMoveNumgamesplayed'),
  duelsNoMoveAvgposition: real('duelsNoMoveAvgposition'),
  duelsNoMoveNumwins: integer('duelsNoMoveNumwins'),
  duelsNoMoveWinratio: real('duelsNoMoveWinratio'),
  duelsNoMoveAvgguessdistance: real('duelsNoMoveAvgguessdistance'),
  duelsNoMoveNumguesses: integer('duelsNoMoveNumguesses'),
  duelsNoMoveNumflawlesswins: integer('duelsNoMoveNumflawlesswins'),

  duelsNmpzNumgamesplayed: integer('duelsNmpzNumgamesplayed'),
  duelsNmpzAvgposition: real('duelsNmpzAvgposition'),
  duelsNmpzNumwins: integer('duelsNmpzNumwins'),
  duelsNmpzWinratio: real('duelsNmpzWinratio'),
  duelsNmpzAvgguessdistance: real('duelsNmpzAvgguessdistance'),
  duelsNmpzNumguesses: integer('duelsNmpzNumguesses'),
  duelsNmpzNumflawlesswins: integer('duelsNmpzNumflawlesswins'),

  duelsTotalNumgamesplayed: integer('duelsTotalNumgamesplayed'),
  duelsTotalAvgposition: real('duelsTotalAvgposition'),
  duelsTotalNumwins: integer('duelsTotalNumwins'),
  duelsTotalWinratio: real('duelsTotalWinratio'),
  duelsTotalAvgguessdistance: real('duelsTotalAvgguessdistance'),
  duelsTotalNumguesses: integer('duelsTotalNumguesses'),
  duelsTotalNumflawlesswins: integer('duelsTotalNumflawlesswins'),

  duelsMedalsMedalcountgold: integer('duelsMedalsMedalcountgold'),
  duelsMedalsMedalcountsilver: integer('duelsMedalsMedalcountsilver'),
  duelsMedalsMedalcountbronze: integer('duelsMedalsMedalcountbronze'),

  lifeTimeXpProgressionCurrentlevelLevel: integer(
    'lifeTimeXpProgressionCurrentlevelLevel'
  ),
  lifeTimeXpProgressionCurrenttitleName: text(
    'lifeTimeXpProgressionCurrenttitleName'
  ),

  teamDuelsNumgamesplayed: integer('teamDuelsNumgamesplayed'),
  teamDuelsNumwins: integer('teamDuelsNumwins'),
  teamDuelsWinratio: real('teamDuelsWinratio'),

  perfectRounds: integer('perfectRounds'),

  divisionNumber: integer('divisionNumber'),
  divisionName: text('divisionName'),
  rating: integer('rating'),
  tier: integer('tier'),

  gameModeRatingsNomoveduels: real('gameModeRatingsNomoveduels'),
  gameModeRatingsNmpzduels: real('gameModeRatingsNmpzduels'),

  guessedFirstRate: real('guessedFirstRate'),
  winStreak: integer('winStreak'),

  divisionNumberBest: integer('divisionNumberBest'),
  divisionPositionBest: integer('divisionPositionBest'),
  divisionNameBest: text('divisionNameBest'),
  divisionTierBest: integer('divisionTierBest'),

  steamUserType: text('steamUserType'),

  gameModeRatingsStandardduels: real('gameModeRatingsStandardduels'),
  positionDuelsLeaderboard: integer('positionDuelsLeaderboard'),

  ratingPast14Days: integer('ratingPast14Days'),
  duelsTotalNumgamesplayedPast14Days: integer(
    'duelsTotalNumgamesplayedPast14Days'
  ),
  datesPast14Days: text('datesPast14Days'),

  current_time: text('current_time')
});
