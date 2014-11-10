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
  
  /**
   * Return the id parameter of JUG.Factory.create method.
	 
	 Ex : JUG.Factory.create('event') return 'event'
	 
   */
  function getParamId(argNodes) {
	  if (argNodes && argNodes[0] && argNodes[0].type == 'Literal') return argNodes[0].value; 
  }
  
  infer.registerFunction("jug_create", function(_self, args, argNodes) {
	 var cx = infer.cx(), defs = cx.definitions["jug"];
	 var paramId = getParamId(argNodes);
	 switch(paramId) {
       case 'talk':
		 return new infer.Obj(defs["Talk"].props.prototype);
	   case 'event':
		 return new infer.Obj(defs["Event"].props.prototype);
	   default:
		 return infer.ANull;
	 }
  });
  
  var defs = {
	"!name": "jug",
	"!define": {
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
	},
	"JUG": {	 
	 "Factory": {
		"create" :{
		  "!type" : "fn(id: string) -> !custom:jug_create"
		}
	  }
	}
  }

});