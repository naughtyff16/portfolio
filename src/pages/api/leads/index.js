import axios from "axios";
const qs = require("qs");
var nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECURE == "true" ? true : false,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    let params = req.body;
    if (params.name == "" || params.name.length < 2) {
      res.status(400).json({
        error: true,
        message: "Name should be atleast 3 characters long",
      });
    } else if (params.email == "" || !validateEmail(params.email)) {
      res.status(400).json({ error: true, message: "Enter valid email" });
    } else if (params.phone == "" || !validatePhone(params.phone)) {
      res.status(400).json({ error: true, message: "Enter valid mobile" });
    } else {
      try {
        console.log("I am here");
        // let response1 = await add_lead_to_db(params);
        let response = await sendEmail(params);
        console.log("resss", response);
        res.status(200).json({ error: false, mailer: response });
      } catch (e) {
        console.log(e);
        res.status(400).json({ error: true, message: "Something went wrong" });
      }
    }
  } else {
    res.status(400).json({ error: true, message: "Method not supported" });
  }
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePhone = (phone) => {
  return String(phone).match(
    /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/
  );
};

// const add_lead_to_db = async (qdata) => {
//   var options = { day: "2-digit", month: "2-digit", year: "numeric" };
//   try {
//     let config = {
//       method: "post",
//       maxBodyLength: Infinity,
//       url: `https://felixa.co.in/api/bcb/PushLead.aspx?key=f34l89x@b78&cn=${encodeURIComponent(
//         qdata.name
//       )}&mn=${qdata.phone}&isd=${encodeURIComponent(
//         new Date().toLocaleDateString("en-US", options)
//       )}&eid=${encodeURIComponent(qdata.email)}&pro=${encodeURIComponent(
//         qdata.page
//       )}&cty=chennai}`,
//       headers: {},
//     };
//     console.log("DataDDDDD", config);
//     let res = await axios(config);
//     console.log("Result", res.data);
//     return res.data;
//   } catch (error) {
//     console.log("Error  in add_db", error);
//     throw error;
//   }
// };

const sendEmail = async (data, file) => {
  const info = await transporter.sendMail({
    from: "Cloud Rudra Media Lead Alert <no-reply@vkss.tech>",
    headers: {
      "Reply-To": data.email,
    },
    to: "sourabh@vkss.tech",
    bcc: "sourabh@vkss.tech",
    subject: "Cloud Rudra Media website has new lead",
    html: `<p>Hello, </p><p> New Lead Generated from Cloud Rudra Media website. </p><p> Here are the details- </p><p> Name: <strong>${data.name} </strong></p><p> Email - <strong>${data.email}</strong> </p><p> Phone Number - <strong>${data.phone}</strong> </p> <p> Company - <strong>${data.company}</strong> </p><p> Message - ${data.message}</p><p>Regards </p><p>-- Cloud Rudra Media Web Team</p>`,
  });
  return info;
};
