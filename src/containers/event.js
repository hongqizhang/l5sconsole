
   
import {H5sEvent} from '../assets/js/h5sevent.js'
import store from '@/store'
let gEvent=[];
var e1=undefined;
function EventCB(event, userdata)
{
    var msgevent = JSON.parse(event);
    let timeitem={
            Token: msgevent.strDevToken,
            Type: msgevent.type,
            UUID:msgevent.strUUID,
            Time:msgevent.strTime,
            Detail:event
        };
    gEvent=msgevent;
    console.log("*******",gEvent,msgevent)
}
function events(){
    console.log("*******1")
    if(store.state.token==null){
        return false;
    }
    var conf1 = {
        protocol: window.location.protocol, //http: or https:
        host:store.state.WSROOT, //localhost:8080
        rootpath:'/', // '/'
        callback: EventCB, 
        userdata: null, // user data
        session: store.state.token //session got from login
    };
    
    console.log("*******2",conf1)
    e1 = new H5sEvent(conf1);
    e1.connect();
}
events();
export default{gEvent}