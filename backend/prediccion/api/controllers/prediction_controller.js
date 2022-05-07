const employee_model = require('../models/prediction_model');
const { analyseResults, calculateProbabilities } = require('soccer-predictor');
const { map } = require('../../app');

module.exports = {
  get_prediccion: async function(req, res) {
    employee_model.get_prediccion(req.con, req.body, async function(err, rows){
      if(err){
        res.status(400).send({
          status: 400,
          data: [],
          msj: 'Error al predecir el partido.',
          error: err.toString()
        });
      } else {
        console.log(rows);
        if(rows.length > 0){
          var prediccion = predecir(rows);
          res.status(200).send({
            status: 200,
            data: prediccion,
            msj: 'Partido predecido exitosamente.'
          });
        } else {
          res.status(400).send({
            status: 400,
            data: [],
            msj: 'No se encontraron resultados.'
          });
        }
      }
    });  
  },
  
  get_player_transfers: function(req, res)   {
    employee_model.get_player_transfers(req.con, req.query, function(err, rows){
      console.log(req.query);
      if(err){
        res.status(400).send({
          status: 400,
          data: [],
          msj: 'Error al obtener el log de transferencias.',
          error: err.toString()
        });
      } else {
        res.status(200).send({
          status: 200,
          data: rows,
          msj: 'Log de transferencias obtenido con éxito.'
        });
      }
    });
  },
  dt_transfer: async function(req, res) {
    employee_model.dt_transfer(req.con, req.body, async function(err, rows){
      if(err){
        res.status(400).send({
          status: 400,
          data: [],
          msj: 'Error al transferir director técnico.',
          error: err.toString()
        });
      } else {
        console.log(rows.length)
        res.status(200).send({
          status: 200,
          data: rows,
          msj: 'Director técnico transferido con éxito.'
        });
      }
    });  
  },
}
//---------------------------------------------------
// ---------------  OTHER   -------------------------
//---------------------------------------------------
// ||||||||||||||||||||   ENVIAR CORREO   ||||||||||||||||||||
function predecir(results, callback) {
    
  // Some basic example data
  // const results_sample = [
  //   { homeTeam: 'Team A', awayTeam: 'Team B', homeGoals: 1, awayGoals: 0 },
  //   { homeTeam: 'Team B', awayTeam: 'Team C', homeGoals: 2, awayGoals: 1 },
  //   { homeTeam: 'Team C', awayTeam: 'Team A', homeGoals: 1, awayGoals: 3 }
  // ]

  // Function to map match data to soccer-predictor data
  function getMatchDetails (match) {
    return {
        homeTeamName: match.homeTeam,
        awayTeamName: match.awayTeam,
        homeGoals: match.homeGoals,
        awayGoals: match.awayGoals
    }
  }

  
  // Parse results into an array of teams with calculated stats
  const teams = analyseResults(results, getMatchDetails)

  // Use calculateProbabilities to calculate the chance of
  // various outcomes of a match between two teams
  const probabilities = calculateProbabilities(teams[0], teams[1])

  var resultado = {"homeTeam": probabilities.result.home, "awayTeam": probabilities.result.away, "homeGoals": 0, "awayGoals": 0};

  console.log(probabilities.result) // Probability of a home win, away win or draw
  if (probabilities.result.home >= 0.5){
    resultado.homeGoals = genRandom(6);
  } else {
    resultado.homeGoals = genRandom(2);
  }
  if (probabilities.result.away >= 0.5){
    resultado.awayGoals = genRandom(6);
  } else {
    resultado.awayGoals = genRandom(2);
  }
  // {
  //   home: 0.657541673613264,
  //   draw: 0.252533180170396,
  //   away: 0.089924594462736
  // }
  return resultado;
  // console.log(probabilities.scores[1][0]) // Probability of a 1-0 result
  // // 0.2300324502673927

  // console.log(probabilities.over['2.5']) // Probability of over 2.5 goals
  // // 0.2895346409101279

  // console.log(probabilities.btts.yes) // Probability of both teams to score
  // // 0.2429353553660894
}

function genRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}