const nodemailer = require("nodemailer");
const env = require("../../config");

class EmailService {
  constructor() {
    this.configure();
  }

  configure() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      service: "gmail",
      secure: false,
      auth: {
        user: `infomanodayamshakthi6`,
        pass: `Mano@321`,
      },
      tls: { rejectUnauthorized: false },
    });
  }
  // ------------------------------------------------------------------------Doctor and user mail---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  async sendEmailToDoctor(email, details) {
    try {
      let info = await this.transporter.sendMail({
        to: email,
        from: "infomanodayamshakthi6@gmail.com",
        subject: "Your appointment has been booked.",
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
              <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;"> Hello Doctor ! We Would  like to inform you that we have booked  your schedule  on 
              <strong style="box-sizing: border-box;font-weight: bolder;">${details.schedule} </strong>. please acknowledge this appointment !! your patient name  is <strong style="box-sizing: border-box;font-weight: bolder;">${details.name} </strong> and Problem statement  <strong style="box-sizing: border-box;font-weight: bolder;">${details.disorder}</strong>
                     
            </div>
          </div>
        </body>
        
        </html>
                   
                `,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async sendEmailToPatient(email, details) {
    let info = await this.transporter.sendMail({
      to: email,
      from: `infomanodayamshakthi6@gmail.com`,
      subject: "Your appointment has been booked.",
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
          <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;">Thanku  you for approaching  us @ Manodayam !! Would like to inform you  that you have a scheduled appointment with <strong style="box-sizing: border-box;font-weight: bolder;">${details.name}</strong> on 
          <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.schedule}</strong> Please confirm your acceptance via on-line registration available 
           
            <strong style="box-sizing: border-box;font-weight: bolder;">https://swarnratnaindia.com/</strong>. If you
            have any questions or queries before or after the session ,please feel free to  mail <strong style="box-sizing: border-box;font-weight: bolder;">${details.name}</strong>
           <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.email}</strong>  
            We Manodayam <strong style="box-sizing: border-box;font-weight: bolder;">https://swarnratnaindia.com/profile</strong> Wish you good health !! warm regards Team Manodayam </p>
          
        </div>
      </div>
    </body>
    
    </html>
                   
                `,
    });
    console.log(info);
  }
  async sendEmailToDoctorbooked(email, details) {
    try {
      let info = await this.transporter.sendMail({
        to: email,
        from: "infomanodayamshakthi6@gmail.com",
        subject: "Your appointment has been booked.",
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
              <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;"> Hello Doctor ! We Would  like to inform you that we have booked  your schedule  on 
              <strong style="box-sizing: border-box;font-weight: bolder;">${
                details.created
              } </strong>. please acknowledge this appointment !! your patient name  is  <strong style="box-sizing: border-box;font-weight: bolder;">${
          details.name
        } </strong> Disorder <strong style="box-sizing: border-box;font-weight: bolder;">${
          details.disorder
        }</strong>
                ${details.email}</p>
              <a href="${
                "https://confrecall.herokuapp.com/" + details.room_no
              }" class="btn btn-primary" style="box-sizing: border-box;color: #fff;text-decoration: none;background-color: #007bff;display: inline-block;font-weight: 400;text-align: center;vertical-align: middle;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid transparent;padding: .375rem .75rem;font-size: 1rem;line-height: 1.5;border-radius: .25rem;transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;border-color: #007bff;">  <i class="fas fa-video" style="box-sizing: border-box;-moz-osx-font-smoothing: grayscale;-webkit-font-smoothing: antialiased;display: inline-block;font-style: normal;font-variant: normal;text-rendering: auto;line-height: 1;font-family: &quot;Font Awesome 5 Pro&quot;;font-weight: 900;"></i>join Meeting</a>
            </div>
          </div>
        </body>

        </html> `,
      });
    } catch (err) {
      console.log(err);
    }
  }
  async sendEmailToPatientbooked(email, details) {
    let info = await this.transporter.sendMail({
      to: email,
      from: `infomanodayamshakthi6@gmail.com`,
      subject: "Your appointment has been booked.",
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
          <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;">Thanku  you for approaching  us @ Manodayam !! Would like to inform you  that you have a scheduled appointment with
          <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.created}</strong> .Please confirm your acceptance via on-line registration available 
 
            <strong style="box-sizing: border-box;font-weight: bolder;">https://swarnratnaindia.com/</strong>.
            If you have any questions or queries before or after the session ,please feel free to  mail   <strong style="box-sizing: border-box;font-weight: bolder;">${details.name}</strong>
           <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.email}</strong>please vist this link and join meeting <strong style="box-sizing: border-box;font-weight: bolder;">https://swarnratnaindia.com/profile</strong> </p>
         
        </div>
      </div>
    </body>
    
    </html>
                   
                `,
    });
    console.log(info);
  }
  // ---------------------------------------------------------------------Expert and user email --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  async sendEmailToUser(email, details) {
    console.log("sendEmailtoUser");
    let info = await this.transporter.sendMail({
      to: email,
      from: `infomanodayamshakthi6@gmail.com`,
      subject: "Your appointment has been booked.",
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
        <img src="https://imgur.com/FypMf7S" class="card-img-top" style="width: 100%;height: auto;box-sizing: border-box;vertical-align: middle;border-style: none;page-break-inside: avoid;-ms-flex-negative: 0;flex-shrink: 0;border-top-left-radius: calc(.25rem - 1px);border-top-right-radius: calc(.25rem - 1px);" alt="...">
        <div class="card-body" style="box-sizing: border-box;-ms-flex: 1 1 auto;flex: 1 1 auto;min-height: 1px;padding: 1.25rem;">
          <h5 class="card-title" style="box-sizing: border-box;margin-top: 0;margin-bottom: .75rem;font-weight: 500;line-height: 1.2;font-size: 1.25rem;">Vedio meeting</h5>
          <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;">Thanku  you for approaching  us @ Manodayam !! Would like to inform you  that you have a scheduled appointment with
          <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.date}</strong> .Please confirm your acceptance via on-line registration available 
 
            <strong style="box-sizing: border-box;font-weight: bolder;">https://swarnratnaindia.com/</strong>.
            If you have any questions or queries before or after the session ,pls feel free   <strong style="box-sizing: border-box;font-weight: bolder;">${details.name}</strong>   email 


           <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.email}</strong>
         
        </div>
      </div>
    </body>
    
    </html>
                   
                `,
    });
    console.log(info);
  }
  async sendEmailToExpert(email, details) {
    console.log("sendEmailToExpert");
    let info = await this.transporter.sendMail({
      to: email,
      from: `infomanodayamshakthi6@gmail.com`,
      subject: "Your appointment has been booked.",
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
        <img src="https://imgur.com/FypMf7S" class="card-img-top" style="width: 100%;height: auto;box-sizing: border-box;vertical-align: middle;border-style: none;page-break-inside: avoid;-ms-flex-negative: 0;flex-shrink: 0;border-top-left-radius: calc(.25rem - 1px);border-top-right-radius: calc(.25rem - 1px);" alt="...">
        <div class="card-body" style="box-sizing: border-box;-ms-flex: 1 1 auto;flex: 1 1 auto;min-height: 1px;padding: 1.25rem;">
          <h5 class="card-title" style="box-sizing: border-box;margin-top: 0;margin-bottom: .75rem;font-weight: 500;line-height: 1.2;font-size: 1.25rem;">Vedio meeting</h5>
          <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;">  We are pleased to invite  on Online Video Conference schedule  from
          <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.created}</strong> .please acknowledge this appointment !! your patient name  is 
          <strong style="box-sizing: border-box;font-weight: bolder;">${details.name}</strong> email   <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.email}</strong>
            
              
         
         
        </div>
      </div> 
    </body>
    
    </html>
                   
                `,
    });
    console.log(info);
  }
  // -------------------------------------------------------------------expert and user room created email---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  async sendEmailToexpertbooked(email, details) {
    console.log("sendEmailToExpert");
    let info = await this.transporter.sendMail({
      to: email,
      from: `infomanodayamshakthi6@gmail.com`,
      subject: "Your appointment has been booked.",
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
        <img src="https://imgur.com/FypMf7S" class="card-img-top" style="width: 100%;height: auto;box-sizing: border-box;vertical-align: middle;border-style: none;page-break-inside: avoid;-ms-flex-negative: 0;flex-shrink: 0;border-top-left-radius: calc(.25rem - 1px);border-top-right-radius: calc(.25rem - 1px);" alt="...">
        <div class="card-body" style="box-sizing: border-box;-ms-flex: 1 1 auto;flex: 1 1 auto;min-height: 1px;padding: 1.25rem;">
          <h5 class="card-title" style="box-sizing: border-box;margin-top: 0;margin-bottom: .75rem;font-weight: 500;line-height: 1.2;font-size: 1.25rem;">Vedio meeting</h5>
          <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;">We are pleased to invite  on Online Video Conference schedule  from
          <strong style="box-sizing: border-box;font-weight: bolder;"> ${
            details.created
          }</strong> .Please confirm your acceptance via on-line registration available 
 
  
          .please acknowledge this appointment !! your patient name  is   <strong style="box-sizing: border-box;font-weight: bolder;">${
            details.name
          }</strong> email
           <strong style="box-sizing: border-box;font-weight: bolder;"> ${
             details.email
           }</strong>please  join  meeting      
                    <a href="${
                      "https://confrecall.herokuapp.com/" + details.room_no
                    }" class="btn btn-primary" style="box-sizing: border-box;color: #fff;text-decoration: none;background-color: #007bff;display: inline-block;font-weight: 400;text-align: center;vertical-align: middle;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid transparent;padding: .375rem .75rem;font-size: 1rem;line-height: 1.5;border-radius: .25rem;transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;border-color: #007bff;">  <i class="fas fa-video" style="box-sizing: border-box;-moz-osx-font-smoothing: grayscale;-webkit-font-smoothing: antialiased;display: inline-block;font-style: normal;font-variant: normal;text-rendering: auto;line-height: 1;font-family: &quot;Font Awesome 5 Pro&quot;;font-weight: 900;"></i>join Meeting</a></p>
         
        </div>
      </div> 
    </body>
    
    </html>
                   
                `,
    });
    console.log(info);
  }

  async sendEmailToUserbooked(email, details) {
    console.log("sendEmailToExpert");
    let info = await this.transporter.sendMail({
      to: email,
      from: `infomanodayamshakthi6@gmail.com`,
      subject: "Your appointment has been booked.",
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
        <img src="https://imgur.com/FypMf7S" class="card-img-top" style="width: 100%;height: auto;box-sizing: border-box;vertical-align: middle;border-style: none;page-break-inside: avoid;-ms-flex-negative: 0;flex-shrink: 0;border-top-left-radius: calc(.25rem - 1px);border-top-right-radius: calc(.25rem - 1px);" alt="...">
        <div class="card-body" style="box-sizing: border-box;-ms-flex: 1 1 auto;flex: 1 1 auto;min-height: 1px;padding: 1.25rem;">
          <h5 class="card-title" style="box-sizing: border-box;margin-top: 0;margin-bottom: .75rem;font-weight: 500;line-height: 1.2;font-size: 1.25rem;">Vedio meeting</h5>
          <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;">Thanku  you for approaching  us @ Manodayam !! Would like to inform you  that you have a scheduled appointment with
          <strong style="box-sizing: border-box;font-weight: bolder;"> ${
            details.created
          }</strong> .Please confirm your acceptance via on-line registration available 
 
            <strong style="box-sizing: border-box;font-weight: bolder;">https://swarnratnaindia.com/</strong>.
            If you have any questions or queries before or after the session ,pls feel free to  mail   <strong style="box-sizing: border-box;font-weight: bolder;">${
              details.name
            }</strong>
           <strong style="box-sizing: border-box;font-weight: bolder;"> ${
             details.email
           }</strong>please join meeting   <a href="${
        "https://confrecall.herokuapp.com/" + details.room_no
      }" class="btn btn-primary" style="box-sizing: border-box;color: #fff;text-decoration: none;background-color: #007bff;display: inline-block;font-weight: 400;text-align: center;vertical-align: middle;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid transparent;padding: .375rem .75rem;font-size: 1rem;line-height: 1.5;border-radius: .25rem;transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;border-color: #007bff;">  <i class="fas fa-video" style="box-sizing: border-box;-moz-osx-font-smoothing: grayscale;-webkit-font-smoothing: antialiased;display: inline-block;font-style: normal;font-variant: normal;text-rendering: auto;line-height: 1;font-family: &quot;Font Awesome 5 Pro&quot;;font-weight: 900;"></i>join Meeting</a></p>
         
        </div>
      </div> 
    </body>
    
    </html>
                   
                `,
    });
    console.log(info);
  }
  // -----------------------------------------------------------------------email send otp-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  async sendEmailForotp(email, seq_otp) {
    let info = await this.transporter.sendMail({
      to: email,
      from: `infomanodayamshakthi6@gmail.com`,
      subject: "infoManodayam otp verification ",
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
      
      <div class="card-body" style="box-sizing: border-box;-ms-flex: 1 1 auto;flex: 1 1 auto;min-height: 1px;padding: 1.25rem;">
      
        <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;"> Dear Manodayam User<strong style="box-sizing: border-box;font-weight: bolder;"> ${seq_otp}</strong>  is your otp  and is valid for 20 minutes.Please do not share the otp with anyone.

          <strong style="box-sizing: border-box;font-weight: bolder;">https://swarnratnaindia.com/</strong>.
        
      </div>
    </div> 
  </body>
    </html>
                   
                `,
    });
    console.log(info);
  }

  // ---------------------------------------------------------------------Expert and user email  join group--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  async sendEmailToUserJoingroup(email, details) {
    console.log("sendEmailtoUser");
    let info = await this.transporter.sendMail({
      to: email,
      from: `infomanodayamshakthi6@gmail.com`,
      subject: "Your appointment has been booked.",
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
      <img src="https://imgur.com/FypMf7S" class="card-img-top" style="width: 100%;height: auto;box-sizing: border-box;vertical-align: middle;border-style: none;page-break-inside: avoid;-ms-flex-negative: 0;flex-shrink: 0;border-top-left-radius: calc(.25rem - 1px);border-top-right-radius: calc(.25rem - 1px);" alt="...">
      <div class="card-body" style="box-sizing: border-box;-ms-flex: 1 1 auto;flex: 1 1 auto;min-height: 1px;padding: 1.25rem;">
        <h5 class="card-title" style="box-sizing: border-box;margin-top: 0;margin-bottom: .75rem;font-weight: 500;line-height: 1.2;font-size: 1.25rem;">Vedio meeting</h5>
        <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;">Thanku  you for approaching  us @ Manodayam !! Would like to inform you  that you have a scheduled appointment with
        <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.date}</strong> .Please confirm your acceptance via on-line registration available 

          <strong style="box-sizing: border-box;font-weight: bolder;">https://swarnratnaindia.com/</strong>.
          If you have any questions or queries before or after the session ,pls feel free   <strong style="box-sizing: border-box;font-weight: bolder;">${details.name}</strong>   email 


         <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.email}</strong>
       
      </div>
    </div>
  </body>
  
  </html>
                 
              `,
    });
    console.log(info);
  }
  async sendEmailToExpertjoingroup(email, details) {
    console.log("sendEmailToExpert");
    let info = await this.transporter.sendMail({
      to: email,
      from: `infomanodayamshakthi6@gmail.com`,
      subject: "Your appointment has been booked.",
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
      <img src="https://imgur.com/FypMf7S" class="card-img-top" style="width: 100%;height: auto;box-sizing: border-box;vertical-align: middle;border-style: none;page-break-inside: avoid;-ms-flex-negative: 0;flex-shrink: 0;border-top-left-radius: calc(.25rem - 1px);border-top-right-radius: calc(.25rem - 1px);" alt="...">
      <div class="card-body" style="box-sizing: border-box;-ms-flex: 1 1 auto;flex: 1 1 auto;min-height: 1px;padding: 1.25rem;">
        <h5 class="card-title" style="box-sizing: border-box;margin-top: 0;margin-bottom: .75rem;font-weight: 500;line-height: 1.2;font-size: 1.25rem;">Vedio meeting</h5>
        <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;">  We are pleased to invite  on Online Video Conference schedule  from
        <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.created}</strong> .please acknowledge this appointment !! your patient name  is 
        <strong style="box-sizing: border-box;font-weight: bolder;">${details.name}</strong> email   <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.email}</strong>
          
            
       
       
      </div>
    </div> 
  </body>
  
  </html>
                 
              `,
    });
    console.log(info);
  }
  // -------------------------------------------------------------------expert and user join group room created email---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  async sendEmailToExpertjoingroupbooked(email, details) {
    console.log("sendEmailToExpert");
    let info = await this.transporter.sendMail({
      to: email,
      from: `infomanodayamshakthi6@gmail.com`,
      subject: "Your appointment has been booked.",
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
      <img src="https://imgur.com/FypMf7S" class="card-img-top" style="width: 100%;height: auto;box-sizing: border-box;vertical-align: middle;border-style: none;page-break-inside: avoid;-ms-flex-negative: 0;flex-shrink: 0;border-top-left-radius: calc(.25rem - 1px);border-top-right-radius: calc(.25rem - 1px);" alt="...">
      <div class="card-body" style="box-sizing: border-box;-ms-flex: 1 1 auto;flex: 1 1 auto;min-height: 1px;padding: 1.25rem;">
        <h5 class="card-title" style="box-sizing: border-box;margin-top: 0;margin-bottom: .75rem;font-weight: 500;line-height: 1.2;font-size: 1.25rem;">Vedio meeting</h5>
        <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;">We are pleased to invite  on Online Video Conference schedule  from
       Please confirm your acceptance via on-line registration available 


        .please acknowledge this appointment !! your patient name  is   <strong style="box-sizing: border-box;font-weight: bolder;">${
          details.name
        }</strong> email
         <strong style="box-sizing: border-box;font-weight: bolder;"> ${
           details.email
         }</strong>please  join  meeting      
                  <a href="${
                    "https://confrecall.herokuapp.com/" + details.room_no
                  }" class="btn btn-primary" style="box-sizing: border-box;color: #fff;text-decoration: none;background-color: #007bff;display: inline-block;font-weight: 400;text-align: center;vertical-align: middle;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid transparent;padding: .375rem .75rem;font-size: 1rem;line-height: 1.5;border-radius: .25rem;transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;border-color: #007bff;">  <i class="fas fa-video" style="box-sizing: border-box;-moz-osx-font-smoothing: grayscale;-webkit-font-smoothing: antialiased;display: inline-block;font-style: normal;font-variant: normal;text-rendering: auto;line-height: 1;font-family: &quot;Font Awesome 5 Pro&quot;;font-weight: 900;"></i>join Meeting</a></p>
       
      </div>
    </div> 
  </body>
  
  </html>
                 
              `,
    });
    console.log(info);
  }

  async sendEmailToUserJoingroupbooked(email, details) {
    console.log("sendEmailToExpert");
    let info = await this.transporter.sendMail({
      to: email,
      from: `infomanodayamshakthi6@gmail.com`,
      subject: "Your appointment has been booked.",
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
      <img src="https://imgur.com/FypMf7S" class="card-img-top" style="width: 100%;height: auto;box-sizing: border-box;vertical-align: middle;border-style: none;page-break-inside: avoid;-ms-flex-negative: 0;flex-shrink: 0;border-top-left-radius: calc(.25rem - 1px);border-top-right-radius: calc(.25rem - 1px);" alt="...">
      <div class="card-body" style="box-sizing: border-box;-ms-flex: 1 1 auto;flex: 1 1 auto;min-height: 1px;padding: 1.25rem;">
        <h5 class="card-title" style="box-sizing: border-box;margin-top: 0;margin-bottom: .75rem;font-weight: 500;line-height: 1.2;font-size: 1.25rem;">Vedio meeting</h5>
        <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;">Thanku  you for approaching  us @ Manodayam !! Would like to inform you  that you have a scheduled appointment with
       Please confirm your acceptance via on-line registration available 

          <strong style="box-sizing: border-box;font-weight: bolder;">https://swarnratnaindia.com/</strong>.
          If you have any questions or queries before or after the session ,pls feel free to  mail   <strong style="box-sizing: border-box;font-weight: bolder;">${
            details.name
          }</strong>
         <strong style="box-sizing: border-box;font-weight: bolder;"> ${
           details.email
         }</strong>please join meeting   <a href="${
        "https://confrecall.herokuapp.com/" + details.room_no
      }" class="btn btn-primary" style="box-sizing: border-box;color: #fff;text-decoration: none;background-color: #007bff;display: inline-block;font-weight: 400;text-align: center;vertical-align: middle;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid transparent;padding: .375rem .75rem;font-size: 1rem;line-height: 1.5;border-radius: .25rem;transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;border-color: #007bff;">  <i class="fas fa-video" style="box-sizing: border-box;-moz-osx-font-smoothing: grayscale;-webkit-font-smoothing: antialiased;display: inline-block;font-style: normal;font-variant: normal;text-rendering: auto;line-height: 1;font-family: &quot;Font Awesome 5 Pro&quot;;font-weight: 900;"></i>join Meeting</a></p>
       
      </div>
    </div> 
  </body>
  
  </html>
                 
              `,
    });
    console.log(info);
  }

  // -------------------------------------------------------------email for subscription plane book------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  async sendEmailToUser(email, details) {
    console.log("sendEmailtoUser");
    let info = await this.transporter.sendMail({
      to: email,
      from: `infomanodayamshakthi6@gmail.com`,
      subject: "Your Subscription  has been booked.",
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
      <img src="https://imgur.com/FypMf7S" class="card-img-top" style="width: 100%;height: auto;box-sizing: border-box;vertical-align: middle;border-style: none;page-break-inside: avoid;-ms-flex-negative: 0;flex-shrink: 0;border-top-left-radius: calc(.25rem - 1px);border-top-right-radius: calc(.25rem - 1px);" alt="...">
      <div class="card-body" style="box-sizing: border-box;-ms-flex: 1 1 auto;flex: 1 1 auto;min-height: 1px;padding: 1.25rem;">
        <h5 class="card-title" style="box-sizing: border-box;margin-top: 0;margin-bottom: .75rem;font-weight: 500;line-height: 1.2;font-size: 1.25rem;">Vedio meeting</h5>
        <p class="card-text font-italic text-info" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;font-style: italic!important;color: #17a2b8!important;">Thanku  you for approaching  us @ Manodayam !! Would like to inform you  that you have a scheduled appointment with
        <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.date}</strong> .Please confirm your acceptance via on-line registration available 

          <strong style="box-sizing: border-box;font-weight: bolder;">https://swarnratnaindia.com/</strong>.
          If you have any questions or queries before or after the session ,pls feel free   <strong style="box-sizing: border-box;font-weight: bolder;">${details.name}</strong>   email 


         <strong style="box-sizing: border-box;font-weight: bolder;"> ${details.email}</strong>
       
      </div>
    </div>
  </body>
  
  </html>
                 
              `,
    });
    console.log(info);
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

//
//
//       <h5 class="card-title">infomanodayam otp</h5>
//       <p class="card-text font-italic text-info">  <strong>${seq_otp}</strong>. is your otp  and is valid for 20 minutes. Do not share the otp with anyone.
{
  /* <strong>{https://swarnratnaindia.com/}</strong>. */
}
//
//
// </body>
//
// </html>
