const chai = require('chai');
const expect = chai.expect;
const request = chai.request;
const { response } = require('express');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
const jsons = require('./testJSON');

const url = app;

describe('****** Estadio Tests ******', () => {

    it('GET Estadio', (done) => {
        chai.request(url)
            .get("/stadium")
            .end(function (err, res) {
                // console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    
    it('POST Crear estadio', (done) => {
        chai.request(url)
            .post("/stadium")
            .send(jsons.estadio)
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(401);
                done();
            });
    });

});