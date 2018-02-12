import { StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { Home } from '../../src/home';

describe('home', () => {
  let component;

  beforeEach(() => {
    component = StageComponent
      .withResources('home')
      .inView('<home></home>');
  });

  it('says Lorem Ipsum', done => {
    component.create(bootstrap).then(() => {
      const messageElement = document.querySelector('.home-message');
      expect(messageElement.innerHTML).toBe('Lorem Ipsum');
      done();
    }).catch(e => { console.log(e.toString()) });
  });

  afterEach(() => {
    component.dispose();
  });
});
