 
//    STRUCTURE of this js document:
//        1. Interaction with HTML
//        2. A few global variables
//        3. Function definitions


// 1. Interaction with HTML

document.addEventListener('DOMContentLoaded', () => {

    // Update parameters
    // Forms that accept a positive integer
    document.querySelectorAll('form').forEach( function(form) {
        form.onsubmit = function() {
            // Each form has only one input
            var intValue = parseInt(form.elements[0].value); 

            // Validate that input is a positive integer
            if (intValue && intValue > 0) {
                session.global[form.id] = intValue;
                
                console.log('Update: ',form.id, intValue);
                console.log(session);
            }
            return false;
        };
    });

    // Select forms (drop-down)
    document.querySelectorAll('select').forEach( function(select) {
        select.onchange = function() {
            session.global[this.id] = this.value;
            console.log('Update: ', this.id, this.value);
            reset();
            console.log(session);

            return false;
        }; 
    });
    // Change language to german
    document.querySelector('#deButton').onclick = function() {
        document.querySelectorAll('.lang').forEach( function(obj) {
            obj.innerHTML = dict[obj.id]['de'];
        });
        document.querySelectorAll('.langValue').forEach( function(obj) {
            obj.value = dict[obj.id]['de'];
        });
        document.querySelector('#enButton').classList.remove('disabled');
        this.classList.add('disabled');
    }
    // Change language to english
    document.querySelector('#enButton').onclick = function() {
        document.querySelectorAll('.lang').forEach( function(obj) {
            obj.innerHTML = dict[obj.id]['en'];  
        });
        document.querySelectorAll('.langValue').forEach( function(obj) {
            obj.value = dict[obj.id]['en'];
        });
        document.querySelector('#deButton').classList.remove('disabled');
        this.classList.add('disabled');
    }

    // Handle changes to the session
    document.querySelector('#defaultSlowStart').onclick = function() {
        
        createDefaultSegment();
        displaySession();
    };

    document.querySelector('#reset').onclick = function () {
        reset();
    }
    
    
});



// 2. A few global variables and constants


// The session object is a protocol of all messages send and received by either Alice or Bob.
// rtd unit is milliseconds, transmission rate unit is kByte/s
var dict = {
    "text0": {
        "en": "TCP-Congestion-Control",
        "de": "TCP Staukontrolle",
    },
    "text1": {
        "en": "TCP version:",
        "de": "TCP Version:",
    },
    "text2": {
        "en": "Choose a user:",
        "de": "Wähle einen Nutzer:",
    },
    "text3": {
        "en": "Round Trip Delay in ms:",
        "de": "Round Trip Delay in ms:",
    },
    "text4": {
        "en": "Transmission Rate in kByte/s:",
        "de": "Übertragungsrate in kByte/s:",
    },
    "text5": {
        "en": "Slow Down Factor:",
        "de": "Verlangsamungsfaktor:",
    },
    "text6": {
        "en": "Time Axis Zoom:",
        "de": "Zeitachse Zoom:",
    },
    "text7": {
        "en": "times",
        "de": "Mal",
    }
    
};

var default_settings = {
    "global": {
        "user": "bob",
        "state": "LISTEN1",
        "transmissionRate": 100,
        "rtd": 100,
        "tcpVersion": "reno",
        "yUnit": 1,
        "slowDownFactor": 100,
    }
};
var session = structuredClone(default_settings);

// The packet number of the next packet to be send
var next = 1;

// Position of sequence diagram within viewBox(default=1000x1000)
const X_LEFT_LINE = 0;
const X_RIGHT_LINE = 1000;
const Y_MARGIN = 50;


// 3. Function definitions 

// Display all segments in the sequence diagram
function displaySession() {
    for(segment in session) {
        pktNumber = parseInt(segment);   
        if (pktNumber) {
            sendPacket(pktNumber);
        }
    }
}

function reset() {
    deleteSegments();
    resetDisplay();
}

function deleteSegments() {

    // Delete everything but the settings
    session = {
        "global": session["global"],
    }
    // Reset the tcp state too
    session.global["state"] = "LISTEN1";
    next = 1;
}

function resetDisplay() {
    document.querySelector('#segments').innerHTML = '';
}


function createDefaultSegment() {
    if (session.global['state'] == 'ESTABLISHED') {

    } else {
        var newStart = next==1 ? 0 : session[next-1].end;
        var newEnd = newStart + 0.5*session.global.rtd;
        switch (session.global['state']) {
            case 'LISTEN1':
                session[next] = {
                    "direction": 'incoming',
                    "flags": {"SYN": true, "ACK": false, "FIN": false, "RST": false},
                    "len": 0,
                    "start": newStart,
                    "end": newEnd,
                    "relative_seq": 0,
                    "len": 0,
                    "ack": 0,
                    "congestion_window": 0,
                    "phase": {"slow_start": true, "congestion_avoidance": false, "fast_recovery": false},
                    };
                session.global.state = 'LISTEN2';
                
                console.log(session);
                next++;
                break;
            case 'LISTEN2':
                session[next] = {
                    "direction": 'outgoing',
                    "flags": {"SYN": true, "ACK": true, "FIN": false, "RST": false},
                    "len": 0,
                    "start": newStart,
                    "end": newEnd,
                    "relative_seq": 0,
                    "ack": 1,
                    "congestion_window": 0,
                    "phase": {"slow_start": true, "congestion_avoidance": false, "fast_recovery": false},
                    };
                session.global.state = 'SYN_RECIEVED';
                // Update information pannel
                document.querySelector('#state').innerHTML = 'SYN_REVIECED';
                // The SYN-Flag raises the seqNr by one
                document.querySelector('#seq').innerHTML = 1;
                document.querySelector('#unacked').innerHTML = parseInt(document.querySelector('#unacked').innerHTML)+ 1;
                console.log(session);
                console.log(next);
                next++;
                break;

            case 'SYN_RECIEVED':
                console.log("A");
                session[next] = {
                    "direction": 'incoming',
                    "flags": {"SYN": false, "ACK": true, "FIN": false, "RST": false},
                    "len": 0,
                    "start": newStart,
                    "end": newEnd,
                    "relative_seq": 1,
                    "len": 0,
                    "ack": 1,
                    "congestion_window": 0,
                    "phase": {"slow_start": true, "congestion_avoidance": false, "fast_recovery": false},
                    };
                // Update information pannel
                document.querySelector('#state').innerHTML = 'ESTABLISHED';
                document.querySelector('#unacked').innerHTML = parseInt(document.querySelector('#unacked').innerHTML) - 1;
                document.querySelector('#cwnd').innerHTML = parseInt(document.querySelector('#cwnd').innerHTML) + 1;

                next++;
                console.log(session);
                break;
        }
    }

}

// Add segment to session
function addSlowStartDefault() {

}

// Display packet in the sequence diagram without animation 
function sendPacket(pktNumber) {

    // Find out x-Axis starting point of packet
    // User can be either Alice or Bob and packet can be either incoming or outgoing
    var xStart;
    var xEnd;
    if (session.global['user'] == 'alice') {
        if (session[pktNumber].direction == 'incoming') {
            xStart = X_RIGHT_LINE;
            xEnd = X_LEFT_LINE;
        } else {
            xStart = X_LEFT_LINE;
            xEnd = X_RIGHT_LINE;
        }
    }
    // User is Bob (right side)
    else {
        if (session[pktNumber].direction == 'incoming') {
            xStart = X_LEFT_LINE;
            xEnd = X_RIGHT_LINE;
        } else {
            xStart = X_RIGHT_LINE;
            xEnd = X_LEFT_LINE;
        }
    }

    // Calculate the y-Axis starting point of packet
    var yFirstByteStart = session.global.yUnit * session[pktNumber].start + Y_MARGIN;
    

    // Calculate the width of the packet
    // The width is equal to the length divided by the transmission rate
    // If the length is zero (as in the case of an ACK) then create a width of 1 y-axis unit
    var packetWidth;
    if (session[pktNumber].len == 0) {
        packetWidth = session.global.yUnit;
    } else {
        packetWidth = session.global.yUnit * (session[pktNumber].len / session.global.transmissionRate);
    }
    // Calculate y-Axis position of first Byte arrival at reciever side
    var yFirstByteEnd = yFirstByteStart + session.global.yUnit * session.global.rtd / 2;

    // Calculate y-Axis position of last Byte arrival at reciever side
    
    var yLastByteEnd = session.global.yUnit*session[pktNumber].end + Y_MARGIN;
    // Calculate y-Axis position of last Byte exit
    var yLastByteStart = yFirstByteStart + session.global.yUnit*(session[pktNumber].len / session.global.transmissionRate); 

    const newPacket = document.createElementNS("http://www.w3.org/2000/svg", "path");
    newPacket.classList.add('segment');
    newPacket.setAttribute('d',
        'M' + xStart + ' ' + yFirstByteStart + 
        'L' + xEnd + ' ' + yFirstByteEnd +
        'L' + xEnd + ' ' + yLastByteEnd +
        'L' + xStart + ' ' + yLastByteStart + 
        'Z' 
    );
    
    document.querySelector('#segments').append(newPacket);
}




























































// Display packet in the sequence diagram with animation 
function send_packet_advanced(session) {

    /*  Find out x-Axis starting point of packet
        User can be either Alice or Bob and packet can be either isIncoming or outgoing 
    */
    var xStart;
    if (session.global[user] == 'alice') {
        if (session[pktNumber].direction == 'incoming') {
            xStart = X_RIGHT_LINE;
        } else {
            xStart = X_LEFT_LINE;
        }
    }
    else {
        if (session[pktNumber].direction == 'incoming') {
            xStart = X_LEFT_LINE;
        } else {
            xStart = X_RIGHT_LINE;
        }
    }

    // Calculate the y-Axis starting point of packet
    var yFirstByteStart = session.global.yUnit * session[pktNumber].start + Y_MARGIN;

    // Calculate the width of the packet
    // The width is equal to the length divided by the transmission rate
    // If the length is zero (as in the case of an ACK) then create a width of 10s
    var packetWidth;
    if (session[pktNumber].len == 0) {
        packetWidth = 1;
    } else {
        packetWidth = session.global.yUnit * session[pktNumber].len / session.global.transmissionRate;
    }


    // Calculate y-Axis position of first Byte arrival at reciever side
    var yFirstByteEnd = yFirstByteStart + session.global.yUnit * session.global.rtd / 2

    console.log('yFirstByteEnd', yFirstByteEnd);

    // Calculate y-Axis position of last Byte arrival at reciever side
    var yLastByteEnd = yFirstByteEnd + packetWidth; 

    console.log('yLastByteEnd', yLastByteEnd);

    // Calculate y-Axis position of last Byte exit
    var yLastByteStart = yFirstByteStart + packetWidth; 

    console.log('yLastByteStart', yLastByteStart);

    console.log('xStart', xStart);
    console.log('yFirstByteStart', yFirstByteStart);
    

    // Calculate total delay for animation (=time of arrival of last Byte - time of exit of first Byte)
    // This is equal to transmission delay plus 0.5*Round Trip Delay
    // We divide by 1000 to convert milliseconds to seconds
    // Currently I ignore the transmission delay
    var totalDelay = 1/1000 * session.global.slowDownFactor * 
        0.5*session.global.rtd;

    console.log('totalDelay', totalDelay);


    // New strategy: packet is a parallelogram

    // Calculate "propagation rate" defined as 0.5*RoundTripTime divided distance between left line and right line of sequence diagram (1000 viewBox units)
    var propagationSpeed = 1000 /(0.5*session.global.rtd);

    console.log('propagationSpeed', propagationSpeed);

    // Calculate the x-Axis protution = transmission delay times propagationSpeed
    var xAxisProtution = (session[pktNumber].len / session.global.transmissionRate)
        * propagationSpeed;

    console.log('xAxisProtution', xAxisProtution);


    // Calculate y-Axis protution = transmission delay times unitToMilliSecondRelation
    var yAxisProtution = (session[pktNumber].len / session.global.transmissionRate)
        * session.global.yUnit;

    console.log('yAxisProtution', yAxisProtution);

    // The translation parameters
    var xAxisTranslation = X_RIGHT_LINE-X_LEFT_LINE + xAxisProtution;
    var yAxisTranslation = 0.5*session.global.rtd*session.global.yUnit + yAxisProtution;

    console.log('xAxisTranslation',xAxisTranslation);
    console.log('yAxisTranslation', yAxisTranslation);

    // Parallelogram points 1 to 4  from upper left, upper right, lower right and finally lower left
    var p1 = (xStart - xAxisTranslation) + ' ' + (yFirstByteStart - yAxisTranslation);
    var p2 = (xAxisFirstByteArrival - xAxisTranslation + xAxisProtution) + ' ' + (yFirstByteEnd + yAxisProtution - yAxisTranslation);
    var p3 = (xAxisLastByteArrival - xAxisTranslation) + ' ' + (yLastByteEnd - yAxisTranslation)
    var p4 = (xAxisLastByteExit - xAxisTranslation) + ' ' + (yLastByteStart - yAxisTranslation)

    console.log('p1', p1);
    console.log('p2', p2);
    console.log('p3', p3);
    console.log('p4', p4);
    
    


    const newParallelogram = document.createElementNS("http://www.w3.org/2000/svg", "path");
    newParallelogram.classList.add('packet');
    //newParallelogram.setAttribute('transform', 'translate(' + xAxisTranslation + ', ' + yAxisTranslation + ')');
    newParallelogram.setAttribute('d',
        'M' + p1 +
        'L' + p2 +
        'L' + p3 +
        'L' + p4 +
        
        'Z' 
    );

    newParallelogram.innerHTML =  '<animateTransform attributeName="transform" from="0 0" attributeType="XML"  fill="freeze"' +
    'to="' + xAxisTranslation + ' ' + yAxisTranslation +
    '" dur="' + totalDelay + '" />';
    document.querySelector('#segments').append(newParallelogram);
}


