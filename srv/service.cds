using {SendMail  as u } from '../db/service';

service srvmail @(path : 'api'){
    entity SendMail as projection on u ;
    action mailNow() returns {
        status : String
    };
}