const chai = require('chai');
const expect = chai.expect;
const request = chai.request;
const { response } = require('express');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);

const url = app;

describe('****** Jugador Tests ******', () => {

    it('GET Jugador', (done) => {
        chai.request(url)
            .get("/player")
            .end(function (err, res) {
                // console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    
    it('POST Crear jugador', (done) => {
        chai.request(url)
            .post("/player")
            .send({
                name: "Serresiete",
                lastname: "Bichin",
                birth_date: "1998-10-10",
                id_nationality: 2,
                position: 2,
                status: 2,
                photo: "cual foto xd"
            })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(401);
                done();
            });
    });

});