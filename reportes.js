var Cclick = 0;
var Bclick = 0;
var Aclick = 0;
var ADclick = 0;

var disableButtonC = (e) => {
    console.log("va");
    if(Cclick==0){
        $('#BBtn').prop('disabled', true);
        $('#ABtn').prop('disabled', true);
        $('#ADBtn').prop('disabled', true);
        Cclick++;
    }
    else{
        $('#BBtn').prop('disabled', false);
        $('#ABtn').prop('disabled', false);
        $('#ADBtn').prop('disabled', false);
        Cclick--;
    }
};
var disableButtonB = (e) => {
    console.log("va");
    if(Bclick==0){
        $('#CBtn').prop('disabled', true);
        $('#ABtn').prop('disabled', true);
        $('#ADBtn').prop('disabled', true);
        Bclick++;
    }
    else{
        $('#CBtn').prop('disabled', false);
        $('#ABtn').prop('disabled', false);
        $('#ADBtn').prop('disabled', false);
        Bclick--;
    }
};
var disableButtonA = (e) => {
    console.log("va");
    if(Aclick==0){
        $('#BBtn').prop('disabled', true);
        $('#CBtn').prop('disabled', true);
        $('#ADBtn').prop('disabled', true);
        Aclick++;
    }
    else{
        $('#BBtn').prop('disabled', false);
        $('#CBtn').prop('disabled', false);
        $('#ADBtn').prop('disabled', false);
        Aclick--;
    }
};
var disableButtonAD = (e) => {
    console.log("va");
    if(ADclick==0){
        $('#BBtn').prop('disabled', true);
        $('#ABtn').prop('disabled', true);
        $('#CBtn').prop('disabled', true);
        ADclick++;
    }
    else{
        $('#BBtn').prop('disabled', false);
        $('#ABtn').prop('disabled', false);
        $('#CBtn').prop('disabled', false);
        ADclick--;
    }
};


$(document).on('click', '#CBtn', disableButtonC);
$(document).on('click', '#BBtn', disableButtonB);
$(document).on('click', '#ABtn', disableButtonA);
$(document).on('click', '#ADBtn', disableButtonAD);