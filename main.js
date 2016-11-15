$(funktion(){
   window.app ={
        Model: {},
		Collections: {},
		Views:{} 
	};
		
	window.template=function(id){
	    return_.template($('#'+id).html() )};
		
	};
	
	
	});