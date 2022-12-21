import EventEmitter from "eventemitter3";
import anime from "animejs";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.init();
    this.emit(Application.events.READY);
  }
  init() {
    let elements = document.querySelector('.article');
    this.on('click', ()=>{ 
    anime({
      targets: elements,
      translateX: 250,
      direction: 'alternate',
      loop: 2,
      easing: 'spring(2, 70, 15, 5)'
    })
  })
    
  }
}
