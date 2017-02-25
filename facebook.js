function menuDisplay () {
	alert( "Welcome to Hell!");
}



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~ 
BEGIN TEST MATERIAL 
Courtney Gee

*/

/*
var DisplayMenu = {};

var time;
var dayOfWeek; 
var menu;

DisplayMenu['setStartTime'] = function setStartTime(beginTime){
	var aTime; 

	if (aTime >= 0 && aTime <= 1440) {
		this.aTime = beginTime;
	}
} 
/* END setStartTime */

/* BEGIN getStartTime */
/*
DisplayMenu['getStartTime'] = function getStartTime() {
	return this.beginTime; 
}


DisplayMenu['setEndTime'] = function setEndTime(time){
	var aTime; 

	if (aTime >= 0 && aTime <= 1440) {
		this.aTime = time;
	}
} 
/* END setEndTime */

/* BEGIN getEndTime */
/*
DisplayMenu['getEndTime'] = function getEndTime() {
	return this.time; 
}

DisplayMenu['daysOfWeekOpen'] = [1, 2, 3, 4, 5, 6, 7];

*/

var startTime = {
    time = 0,

    get beginTime() {
        return this.time;
    },
    set beginTime (aTime) {
		this.time = aTime;

        if ( aTime >= 0 && aTime <=1440 ) {
        	this.time = aTime;
    	}

    	else {
    		this.time = 0;
    	} /* end else */
    }
}



var green = "green"

/*
var startTime = {
    time: 0;
};

Object.defineProperty(startTime, 'begin', {
    get: function() {
        return time;
    },

    set: function(aTime) {
    	this.time = aTime;

    	/*
        if ( aTime >= 0 && aTime <=1440 ) {
        	this.time = aTime;
    	}

    	else {
    		this.time = 0;
    	} /* end else */
    
    /*} /* end set */
/*});

var endTime = {
    time: 0;
};

Object.defineProperty(timeOfDay, 'endTime' , {
    get: function() {
        return time;
    },

    set: function(bTime) {
        if ( aTime >= 0 && aTime <=1440 ) {
        	this.time = aTime;
    	}

    	else {
    		this.time = "try again";
    	} /* end else */
    /*} /* end set */	

/*});


/*
function Name(first, last) {
    this.first = first;
    this.last = last;
}

Name.prototype = {
    get fullName() {
        return this.first + " " + this.last;
    },

    set fullName(name) {
        var names = name.split(" ");
        this.first = names[0];
        this.last = names[1];
    }
};
*/


/*
function setStartTime(time) {
	var aTime; 

	if (aTime >= 0 && aTime <= 1440) {
		aTime.this = time;
	}
}

function getStartTime() {
	return time; 
}
*/
