'use strict';

const lab = exports.lab = require('lab').script();
const expect = require('code').expect;

const wadofgum = require('wadofgum');
const wadofgumKeyMap = require('../index');
const WKM = wadofgum.mixin(wadofgumKeyMap);

lab.experiment('test wadofgum-keymap', () => {

  lab.test('map and reversemap', (done) => {
    const TestModel = new WKM({
      keyMap: {
        inkey: 'outkey',
        inkey2: 'outkey2'
      }
    });

    const myobj = {
      inkey: 'hi',
      inkey2: 'bye',
      okay: 1
    }

    const mappedobj = TestModel.mapTo(myobj);
    expect(mappedobj.outkey).to.equal('hi');
    expect(mappedobj.outkey2).to.equal('bye');
    expect(mappedobj.okay).to.equal(1);

    const revobj = TestModel.mapFrom(mappedobj);
    expect(revobj.inkey).to.equal('hi');
    expect(revobj.inkey2).to.equal('bye');
    expect(revobj.okay).to.equal(1);

    done();
  });

  lab.test('map and reversemap on unsetup', (done) => {
    const TestModel = new WKM({
    });

    const myobj = {
      inkey: 'hi',
      inkey2: 'bye',
      okay: 1
    }
    
    const mappedobj = TestModel.mapTo(myobj);
    expect(mappedobj.inkey).to.equal('hi');
    expect(mappedobj.inkey2).to.equal('bye');
    expect(mappedobj.okay).to.equal(1);
    
    const revobj = TestModel.mapFrom(mappedobj);
    expect(revobj.inkey).to.equal('hi');
    expect(revobj.inkey2).to.equal('bye');
    expect(revobj.okay).to.equal(1);

    done();
  });

  lab.test('test mapping of array', (done) => {

    const TestModel = new WKM({
      keyMap: {
        inkey: 'outkey',
        inkey2: 'outkey2'
      }
    });

    const myobj = ['inkey', 'inkey2', 'okay'];
    
    const mappedobj = TestModel.mapTo(myobj);
    expect(mappedobj[0]).to.equal('outkey');
    expect(mappedobj[1]).to.equal('outkey2');
    expect(mappedobj[2]).to.equal('okay');

    done();
  });
});
