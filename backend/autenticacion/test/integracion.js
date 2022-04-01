const chai = require('chai');
const expect = chai.expect;
const request = chai.request;
const { response } = require('express');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
const jsons = require('./testJSON');

const url = app;

describe('****** Auth Tests ******', () => {

    it('POST Temporal password', (done) => {
        chai.request(url)
            .post("/auth/reset-password")
            .send(jsons.reset)
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(400);
                done();
            });
    });

    it('GET Validar cuenta', (done) => {
        chai.request(url)
            .get("/auth/?id=3")
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(400);
                done();
            });
    });

    it('POST Login', (done) => {
        chai.request(url)
            .post("/auth/")
            .send(jsons.login)
            .end((err, res) => {
                console.log(res.body)
                expect(res).to.have.status(400);
                done();
            });
    });
});