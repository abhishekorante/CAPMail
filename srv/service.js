const { sendMail } = require("@sap-cloud-sdk/mail-client");
module.exports = srv => {
  srv.on('mailNow', async (req) => {
    const { to, fromEmail, subject, text } = req.data;

    try {
      const mailConfig = {
        // from:"gideon.klein16@ethereal.email",
        // to: "abhishek@ornatets.com",
        // subject: "From Ornate Mail BTP",
        // text: "Thanks for Considering again",
        from:fromEmail,
        to:to,
        subject: subject,
        text:text,
      };
      sendMail({ destinationName: "SendMail" }, [mailConfig]);
      var retstatus = { status: "OK" };
      return retstatus;
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  })
  srv.after('CREATE', 'SendMail', async (user, req) => {
    const { to, fromEmail, subject, text } = user;

    try {
      const mailConfig = {
        from: fromEmail,
        to: to,
        subject: subject,
        text: text,
      };
      sendMail({ destinationName: "SendMail" }, [mailConfig]);
      var retstatus = { status: "OK" };
      return retstatus;
    } catch (error) {
      console.log(error);
    }
  });
}
// module.exports = cds.service.impl(async function (srv){
//   srv.on('mailNow', async (req) => {
//     const { to, fromEmail, subject, text } = req.data;

//     try {
//       const mailConfig = {
//         // from:"gideon.klein16@ethereal.email",
//         // to: "abhishek@ornatets.com",
//         // subject: "From Ornate Mail BTP",
//         // text: "Thanks for Considering again",
//         from:fromEmail,
//         to:to,
//         subject: subject,
//         text:text,
//       };
//       const predictApi = await cds.connect.to('SendMail');
//       sendMail({ destinationName: predictApi }, [mailConfig]);
//       var retstatus = { status: "OK" };
//       return retstatus;
//     } catch (error) {
//       console.error('Error sending email:', error);
//       throw new Error('Failed to send email');
//     }
//   })
//   srv.after('CREATE', 'SendMail', async (user, req) => {
//     const { to, fromEmail, subject, text } = user;

//     try {
//       const mailConfig = {
//         from: fromEmail,
//         to: to,
//         subject: subject,
//         text: text,
//       };
//       sendMail({ destinationName: "SendMail" }, [mailConfig]);
//       var retstatus = { status: "OK" };
//       return retstatus;
//     } catch (error) {
//       console.log(error);
//     }
//   });
// })