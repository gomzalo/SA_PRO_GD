const chai = require('chai');
const expect = chai.expect;
const request = chai.request;
const { response } = require('express');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);

const url = app;

describe('****** Tecnico tests ******', () => {

    it('GET Tecnico', (done) => {
        chai.request(url)
            .get("/technical-director")
            .end(function (err, res) {
                // console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    
    it('POST Tecnico', (done) => {
        chai.request(url)
            .post("/technical-director")
            .send({
                "name": "string",
                "lastname": "string",
                "birth_date": "string",
                "status": 2,
                "photo": "string base64",
                "id_country": 154
            })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(401);
                done();
            });
    });

});