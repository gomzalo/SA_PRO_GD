const chai = require('chai');
const expect = chai.expect;
const request = chai.request;
const { response } = require('express');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
const jsons = require('./testJSON');

const url = app;

describe('****** Competicion Tests ******', () => {

    it('GET Competicion', (done) => {
        chai.request(url)
            .get("/competition/")
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    
    it('POST Crear competicion', (done) => {
        chai.request(url)
            .post("/competition")
            .send(jsons.competicion)
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(401);
                done();
            });
    });

});