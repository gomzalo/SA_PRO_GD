const chai = require('chai');
const expect = chai.expect;
const request = chai.request;
const chaiHttp = require('chai-http');
const usuario = require('../api/controllers/administrative_controller');

describe('Testing email', () =>{
    it('Email valido', () =>{
        expect(usuario.validar_email('prueba.unitaria@ayd2.com')).to.be.true;
    });

    it('Email invalido', () =>{
        expect(usuario.validar_email('email@111.222.333.444444\\')).to.be.false;
    });
});

describe('Testing password', () =>{
    it('Correcta', () => {
        expect(usuario.validar_pass('Hola1234','Hola1234')).to.be.true;
    });

    it('Incorrecta', () => {
        expect(usuario.validar_pass('Hola123','Hola124')).to.be.false;
    });

    it('Tamaño mayor', () => {
        expect(usuario.validar_pass('Hola123','Hola1234')).to.be.false;
    });

    it('Tamaño menor', () => {
        expect(usuario.validar_pass('Hola123','Hola12')).to.be.false;
    });
});