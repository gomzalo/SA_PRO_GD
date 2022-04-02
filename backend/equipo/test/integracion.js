const chai = require('chai');
const expect = chai.expect;
const request = chai.request;
const { response } = require('express');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
const jsons = require('./testJSON');

const url = app;

describe('****** Equipo Tests ******', () => {

    it('GET Equipo', (done) => {
        chai.request(url)
            .get("/team")
            .end(function (err, res) {
                // console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    
    it('POST Crear equipo', (done) => {
        chai.request(url)
            .post("/team")
            .send(jsons.equipo)
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(401);
                done();
            });
    });

});