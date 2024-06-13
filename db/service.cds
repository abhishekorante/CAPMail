entity SendMail {
  key ID          : UUID;
  to       : String(100);
  fromEmail          : String(100);
  subject       : String(100);
  text           : String(100);
}