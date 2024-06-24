using {SendMail  as u } from '../db/service';

service srvmail @(path : 'api'){
    entity SendMail as projection on u ;
    // function mailNow(to: String(100), fromEmail: String(100), subject: String(100), text: String(100)) returns {
    //     status : String
    // };
    action mailNow(to: String(100), fromEmail: String(100), subject: String(100), text: String(100)) returns {
        status : String
    };
}