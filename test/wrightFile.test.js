(function () {
  'use strict';

  var chai = require('chai'),
      expect = chai.expect,
      sinon = require('sinon');
  
  chai.use(require('sinon-chai'));
  
  var wrightFile = require('../');
  
  describe('wrightFile', function() {
    it('should be defined', function() {
      expect(wrightFile).to.be.defined;
    });
    
    it('should be a function', function() {
      expect(wrightFile).to.be.a('function');
    });
    
    describe('wrightFile', function() {
      /*var filename = '/good/file.txt',
          data = 'dogs',
          options = {
            overwrite: true
          },
          callback = sinon.spy();
      
      before(function() {
        sinon.stub(wrightFile);
        wrightFile
          .withArgs('/good/file.txt', 'dogs', sinon.matchers.func)
          .callsArgWithAsync(2, null);
        wrightFile
          .withArgs('/evil/file.txt', 'cats', sinon.matchers.func)
          .callsArgWithAsync(2, new Error('writeFile error!'));
      });

      beforeEach(function () {
        callback.reset();
      });
      
      it('should write a file', function(done) {
        wrightFile(filename, data, callback);
        
        expect(callback).to.have.been.calledOnce().and.calledWith();
        done();
      });
      
      it('should overwrite a file', function(done) {
        wrightFile(filename, data, options, callback);
        
        expect(callback).to.have.been.calledOnce().and.calledWith();
        done();
      });
      
      after(function() {
        wrightFile.restore();
      });*/
    });
  });
})();
