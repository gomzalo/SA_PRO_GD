const chai = require('chai');
const expect = chai.expect;
const request = chai.request;
const { response } = require('express');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
const jsons = require('./testJSON');

const url = app;

describe('****** Empleado Tests ******', () => {

    it('GET DTs Transferidos', (done) => {
        chai.request(url)
            .get("/technical-director-transfer")
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    
    it('POST Transferir DT', (done) => {
        chai.request(url)
            .post("/technical-director-transfer")
            .send(jsons.dt)
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(401);
                done();
            });
    });

});