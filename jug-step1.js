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
	  "!define": {
	    "point": {
	      "x": "number",
	      "y": "number"
	    }
	  },
	  "MyConstructor": {
	    "!type": "fn(arg: string)",
	    "staticFunction": "fn() -> bool",
	    "prototype": {
	      "property": "[number]",
	      "clone": "fn() -> +MyConstructor",
	      "getPoint": "fn(i: number) -> point"
	    }
	  },
	  "someOtherGlobal": "string"
  }

});