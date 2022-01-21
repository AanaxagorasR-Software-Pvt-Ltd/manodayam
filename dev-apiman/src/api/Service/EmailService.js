const nodemailer = require("nodemailer");
const env = require('../../config')

class EmailService {

  constructor() {
    this.configure();
  }

  configure() {

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: `yogitanegi888`,
        pass: `mirabunny1998`
      }
    });
  }
  async sendEmailToDoctor(email, details) {
    try {
      let info = await this.transporter.sendMail({
        to: email,
        from: "yogitanegi888@gmail.com",
        subject: 'Your appointment has been booked.',
        html: `
                    

        <html lang="en" style="box-sizing: border-box;font-family: sans-serif;line-height: 1.15;-webkit-text-size-adjust: 100%;-webkit-tap-highlight-color: transparent;">

        <head style="box-sizing: border-box;">
          <meta charset="UTF-8" style="box-sizing: border-box;">
          <meta http-equiv="X-UA-Compatible" content="IE=edge" style="box-sizing: border-box;">
          <meta name="viewport" content="width=device-width, initial-scale=1.0" style="box-sizing: border-box;">
          
          <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous" style="box-sizing: border-box;"></script>
            

          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous" style="box-sizing: border-box;"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous" style="box-sizing: border-box;"></script>
          <title style="box-sizing: border-box;">Document</title>
        </head>
        
        <body style="box-sizing: border-box;margin: 0;font-family: -apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,Arial,&quot;Noto Sans&quot;,&quot;Liberation Sans&quot;,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;;font-size: 1rem;font-weight: 400;line-height: 1.5;color: #212529;text-align: left;background-color: #fff;min-width: 992px!important;">
        
          
          <div class="card" style="width: 24rem;box-sizing: border-box;position: relative;display: flex;-ms-flex-direction: column;flex-direction: column;min-width: 0;word-wrap: break-word;background-color: #fff;background-clip: border-box;border: 1px solid rgba(0,0,0,.125);border-radius: .25rem;">
            <img src="https://i.imgur.com/AHmU15k.jpg" class="card-img-top" style="width: 100%;height: auto;box-sizing: border-box;vertical-align: middle;border-style: none;page-break-inside: avoid;-ms-flex-negative: 0;flex-shrink: 0;border-top-left-radius: calc(.25rem - 1px);border-top-right-radius: calc(.25rem - 1px);" alt="...">
            <div class="card-body" style="box-sizing: border-box;-ms-flex: 1 1 auto;flex: 1 1 auto;min-height: 1px;padding: 1.25rem;">
              <h5 class="card-title" style="box-sizing: border-box;margin-top: 0;margin-bottom: .75rem;font-weight: 500;line-height: 1.2;font-size: 1.25rem;">Vedio meeting</h5>
              <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;">congratulations Your appointment has been schedule on
              <strong style="box-sizing: border-box;font-weight: bolder;">${details.schedule} </strong>. I hope you will be able to accept our invitation to attend this important session. your patient name <strong style="box-sizing: border-box;font-weight: bolder;">${details.name} </strong> Disorder <strong style="box-sizing: border-box;font-weight: bolder;">${details.disorder}</strong>
                ${details.email}</p>
               
                                
            </div>
          </div>
        </body>
        
        </html>
                   
                `




      })

    } catch (err) {
      console.log(err);

    }





  }

  async sendEmailToPatient(email, details) {


    let info = await this.transporter.sendMail({
      to: email,
      from: `yogitanegi888@gmai.com`,
      subject: 'Your appointment has been booked.',
      // alternatives: [{ contentType: "text/html" }],
      html: `
      <html lang="en" style="box-sizing: border-box;font-family: sans-serif;line-height: 1.15;-webkit-text-size-adjust: 100%;-webkit-tap-highlight-color: transparent;">

      <head style="box-sizing: border-box;">
      <meta charset="UTF-8" style="box-sizing: border-box;">
      <meta http-equiv="X-UA-Compatible" content="IE=edge" style="box-sizing: border-box;">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" style="box-sizing: border-box;">
      
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous" style="box-sizing: border-box;"></script>
        
    
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous" style="box-sizing: border-box;"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous" style="box-sizing: border-box;"></script>
      <title style="box-sizing: border-box;">Document</title>
    </head>
    
    <body style="box-sizing: border-box;margin: 0;font-family: -apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,Arial,&quot;Noto Sans&quot;,&quot;Liberation Sans&quot;,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;;font-size: 1rem;font-weight: 400;line-height: 1.5;color: #212529;text-align: left;background-color: #fff;min-width: 992px!important;">
    
      
      <div class="card" style="width: 24rem;box-sizing: border-box;position: relative;display: flex;-ms-flex-direction: column;flex-direction: column;min-width: 0;word-wrap: break-word;background-color: #fff;background-clip: border-box;border: 1px solid rgba(0,0,0,.125);border-radius: .25rem;">
        <img src="https://i.imgur.com/AHmU15k.jpg" class="card-img-top" style="width: 100%;height: auto;box-sizing: border-box;vertical-align: middle;border-style: none;page-break-inside: avoid;-ms-flex-negative: 0;flex-shrink: 0;border-top-left-radius: calc(.25rem - 1px);border-top-right-radius: calc(.25rem - 1px);" alt="...">
        <div class="card-body" style="box-sizing: border-box;-ms-flex: 1 1 auto;flex: 1 1 auto;min-height: 1px;padding: 1.25rem;">
          <h5 class="card-title" style="box-sizing: border-box;margin-top: 0;margin-bottom: .75rem;font-weight: 500;line-height: 1.2;font-size: 1.25rem;">Vedio meeting</h5>
          <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;">congratulations Your appointment has been schedule on
          <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.schedule}</strong> . I hope you will be able to accept our invitation to attend this important session. Please
            confirm your participation by
            filling the on-line registration form available at:
            <strong style="box-sizing: border-box;font-weight: bolder;">http://localhost:3006/manodayam</strong>. If you
            have any questions or require further information, please do not hesitate to contact Doctor <strong style="box-sizing: border-box;font-weight: bolder;">${details.name}</strong>
           <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.email}</strong>  
            please vist this link and in meeting <strong style="box-sizing: border-box;font-weight: bolder;">http://localhost:3006/manodayam/profile</strong></p>
          
        </div>
      </div>
    </body>
    
    </html>
                   
                `
    }); console.log(info);


  }
  async sendEmailToDoctorbooked(email, details) {
    try {
      let info = await this.transporter.sendMail({
        to: email,
        from: "yogitanegi888@gmail.com",
        subject: 'Your appointment has been booked.',
        html: `
                    
        <html lang="en" style="box-sizing: border-box;font-family: sans-serif;line-height: 1.15;-webkit-text-size-adjust: 100%;-webkit-tap-highlight-color: transparent;">

        <head style="box-sizing: border-box;">
          <meta charset="UTF-8" style="box-sizing: border-box;">
          <meta http-equiv="X-UA-Compatible" content="IE=edge" style="box-sizing: border-box;">
          <meta name="viewport" content="width=device-width, initial-scale=1.0" style="box-sizing: border-box;">
          
          <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous" style="box-sizing: border-box;"></script>
            

          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous" style="box-sizing: border-box;"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous" style="box-sizing: border-box;"></script>
          <title style="box-sizing: border-box;">Document</title>
        </head>

        <body style="box-sizing: border-box;margin: 0;font-family: -apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,Arial,&quot;Noto Sans&quot;,&quot;Liberation Sans&quot;,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;;font-size: 1rem;font-weight: 400;line-height: 1.5;color: #212529;text-align: left;background-color: #fff;min-width: 992px!important;">


          <div class="card" style="width: 24rem;box-sizing: border-box;position: relative;display: flex;-ms-flex-direction: column;flex-direction: column;min-width: 0;word-wrap: break-word;background-color: #fff;background-clip: border-box;border: 1px solid rgba(0,0,0,.125);border-radius: .25rem;">
            <img src="https://i.imgur.com/AHmU15k.jpg" class="card-img-top" style="width: 100%;height: auto;box-sizing: border-box;vertical-align: middle;border-style: none;page-break-inside: avoid;-ms-flex-negative: 0;flex-shrink: 0;border-top-left-radius: calc(.25rem - 1px);border-top-right-radius: calc(.25rem - 1px);" alt="...">
            <div class="card-body" style="box-sizing: border-box;-ms-flex: 1 1 auto;flex: 1 1 auto;min-height: 1px;padding: 1.25rem;">
              <h5 class="card-title" style="box-sizing: border-box;margin-top: 0;margin-bottom: .75rem;font-weight: 500;line-height: 1.2;font-size: 1.25rem;">Vedio meeting</h5>
              <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;">congratulations Your appointment has been schedule on
              <strong style="box-sizing: border-box;font-weight: bolder;">${details.created} </strong>. I hope you will be able to accept our invitation to attend this important session. your patient name <strong style="box-sizing: border-box;font-weight: bolder;">${details.name} </strong> Disorder <strong style="box-sizing: border-box;font-weight: bolder;">${details.disorder}</strong>
                ${details.email}</p>
              <a href="${'http://localhost:5000/'+ details.room_no}" class="btn btn-primary" style="box-sizing: border-box;color: #fff;text-decoration: none;background-color: #007bff;display: inline-block;font-weight: 400;text-align: center;vertical-align: middle;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid transparent;padding: .375rem .75rem;font-size: 1rem;line-height: 1.5;border-radius: .25rem;transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;border-color: #007bff;">  <i class="fas fa-video" style="box-sizing: border-box;-moz-osx-font-smoothing: grayscale;-webkit-font-smoothing: antialiased;display: inline-block;font-style: normal;font-variant: normal;text-rendering: auto;line-height: 1;font-family: &quot;Font Awesome 5 Pro&quot;;font-weight: 900;"></i>join Meeting</a>
            </div>
          </div>
        </body>

        </html>

                   
                `




      })

    } catch (err) {
      console.log(err);

    }

  }
  async sendEmailToPatientbooked(email, details) {


    let info = await this.transporter.sendMail({
      to: email,
      from: `yogitanegi888@gmai.com`,
      subject: 'Your appointment has been booked.',
      // alternatives: [{ contentType: "text/html" }],
      html: `
           
      <html lang="en" style="box-sizing: border-box;font-family: sans-serif;line-height: 1.15;-webkit-text-size-adjust: 100%;-webkit-tap-highlight-color: transparent;">

      <head style="box-sizing: border-box;">
      <meta charset="UTF-8" style="box-sizing: border-box;">
      <meta http-equiv="X-UA-Compatible" content="IE=edge" style="box-sizing: border-box;">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" style="box-sizing: border-box;">
      
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous" style="box-sizing: border-box;"></script>
        
    
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous" style="box-sizing: border-box;"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous" style="box-sizing: border-box;"></script>
      <title style="box-sizing: border-box;">Document</title>
    </head>
    
    <body style="box-sizing: border-box;margin: 0;font-family: -apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,Arial,&quot;Noto Sans&quot;,&quot;Liberation Sans&quot;,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;,&quot;Noto Color Emoji&quot;;font-size: 1rem;font-weight: 400;line-height: 1.5;color: #212529;text-align: left;background-color: #fff;min-width: 992px!important;">
    
      
      <div class="card" style="width: 24rem;box-sizing: border-box;position: relative;display: flex;-ms-flex-direction: column;flex-direction: column;min-width: 0;word-wrap: break-word;background-color: #fff;background-clip: border-box;border: 1px solid rgba(0,0,0,.125);border-radius: .25rem;">
        <img src="https://i.imgur.com/AHmU15k.jpg" class="card-img-top" style="width: 100%;height: auto;box-sizing: border-box;vertical-align: middle;border-style: none;page-break-inside: avoid;-ms-flex-negative: 0;flex-shrink: 0;border-top-left-radius: calc(.25rem - 1px);border-top-right-radius: calc(.25rem - 1px);" alt="...">
        <div class="card-body" style="box-sizing: border-box;-ms-flex: 1 1 auto;flex: 1 1 auto;min-height: 1px;padding: 1.25rem;">
          <h5 class="card-title" style="box-sizing: border-box;margin-top: 0;margin-bottom: .75rem;font-weight: 500;line-height: 1.2;font-size: 1.25rem;">Vedio meeting</h5>
          <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;">congratulations Your appointment has been schedule on
          <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.created}</strong> . I hope you will be able to accept our invitation to attend this important session. Please
            confirm your participation by
            filling the on-line registration form available at:
            <strong style="box-sizing: border-box;font-weight: bolder;">http://localhost:3006/manodayam</strong>. If you
            have any questions or require further information, please do not hesitate to contact Docter <strong style="box-sizing: border-box;font-weight: bolder;">${details.name}</strong>
           <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.email}</strong>please vist this link and join meeting <strong style="box-sizing: border-box;font-weight: bolder;">http://localhost:3006/manodayam/profile</strong> </p>
         
        </div>
      </div>
    </body>
    
    </html>
                   
                `
    }); console.log(info);


  }

}
module.exports = new EmailService();



// <html lang="en">

// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
//     integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
//   <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
//     integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
//     crossorigin="anonymous"></script>
//     <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

//   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
//     integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
//     crossorigin="anonymous"></script>
//   <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"
//     integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2"
//     crossorigin="anonymous"></script>
//   <title>Document</title>
// </head>

// <body>


//   <div class="card" style="width: 24rem;">
//     <img src="docter.jpg" class="card-img-top" style="width: 100%; height: auto;" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">Vedio meeting</h5>
//       <p class="card-text font-italic text-info">congratulations Your appointment has been schedule on
//       <strong>${details.created} </strong>. I hope you will be able to accept our invitation to attend this important session. your patient name <strong>${details.name} </strong> Disorder <strong>${details.disorder}</strong>
//         ${details.email}</p>
//       <a href="${'http://localhost:5000'+ details.room_no}" class="btn btn-primary">  <i class="fas fa-video"></i>join Meeting</a>
//     </div>
//   </div>
// </body>

// </html>
