const chai = require('chai');
const expect = chai.expect;
const request = chai.request;
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);

const url = app;

describe('Usuarios', () => {
    it('GET todos los usuarios', (done) => {
        chai.request(url)
            .get("/getusers")
            .end(function (err, res) {
                // console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });

    it('GET por nickname', (done) => {
        chai.request(url)
            .get("/getbynickname/riqu10")
            .end(function (err, res) {
                // console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });

    it('POST editar', (done) => {
        chai.request(url)
            .post("/edituser")
            .send({
                id: 1,
                nickname: "riqu10",
                nombre: "prueba funcional",
                correo: "functest@gmail.com",
                fecha_nac : "1980-10-25",
                contrasenia: "TestFunc1234",
                telefono: '54549984'
            })
            .end((err, res) => {
                // console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});