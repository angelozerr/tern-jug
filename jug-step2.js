(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    return mod(require.main.require("../lib/infer"), require.main.require("../lib/tern"));
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("jug", function(server, options) {

    return {
      defs : defs
    };
  });
  
  var defs = {
	"!name": "jug",
	"JUG": {
	 "Talk": {
	   "!type": "fn(author: string, topic: string)",
	   "prototype": {
	     "author": "string",
	     "topic": "string"
	   }
	 },
	 "Event": {
	   "!type": "fn(name: string, when: +Date)",
	   "prototype": {
	     "name": "string",
	     "when" : "+Date"
	   }
	 }
	}
  }

});