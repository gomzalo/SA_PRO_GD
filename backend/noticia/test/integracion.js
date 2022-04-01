const chai = require('chai');
const expect = chai.expect;
const request = chai.request;
const { response } = require('express');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);

const url = app;

describe('****** Noticia tests ******', () => {

    it('GET Noticia', (done) => {
        chai.request(url)
            .get("/post")
            .end(function (err, res) {
                // console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    
    it('POST Crear noticia', (done) => {
        chai.request(url)
            .post("/post")
            .send({
                "id_team": 2,
                "id_user": 3,
                "title": "string",
                "description": "string",
                "date": "string"
            })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(401);
                done();
            });
    });

});