import {EventEmitter} from "fbemitter";

export default class CustomEmitter {
	constructor() {
		this.listener = new EventEmitter();
	}

	addListener(label, callback) {
		this.listener.addListener(label, callback);
	}

	emitter(label, ...args){
		this.listener.emit(label, ...args);
	}
}