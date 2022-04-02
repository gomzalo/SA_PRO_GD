const chai = require('chai');
const expect = chai.expect;
const request = chai.request;
const { response } = require('express');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);

const url = app;

describe('****** Partido tests ******', () => {

    it('GET Partido', (done) => {
        chai.request(url)
            .get("/match")
            .end(function (err, res) {
                // console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    
    it('POST Partido', (done) => {
        chai.request(url)
            .post("/match")
            .send({
                "game_date": "2022-03-01",
                "attendees": 56988,
                "result_local": 5,
                "result_visiting": 1,
                "status": 1,
                "id_stadium": 2,
                "id_team_local": 8,
                "id_team_visiting": 3,
                "id_competition": 2
            })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(401);
                done();
            });
    });

});