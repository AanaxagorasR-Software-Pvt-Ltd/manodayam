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
                    

                    <html lang="en">

            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
                integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
              <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossorigin="anonymous"></script>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

              <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
                integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
                crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"
                integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2"
                crossorigin="anonymous"></script>
              <title>Document</title>
            </head>
            
            <body>
            
              
              <div class="card" style="width: 24rem;">
                <img src="docter.jpg" class="card-img-top" style="width: 100%; height: auto;" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Vedio meeting</h5>
                  <p class="card-text font-italic text-info">congratulations Your appointment has been schedule on
                  <strong>${details.created} </strong>. I hope you will be able to accept our invitation to attend this important session. your patient name <strong>${details.name} </strong> Disorder <strong>${details.disorder}</strong>
                    ${details.email}</p>
                  <a href="#" class="btn btn-primary">  <i class="fas fa-video"></i>join Meeting</a>
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
      alternatives: [{ contentType: "text/html" }],
      html: `
                    
                   <html lang="en">

  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
    integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
    integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"
    integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2"
    crossorigin="anonymous"></script>
  <title>Document</title>
</head>

<body>

  
  <div class="card" style="width: 24rem;">
    <img src="docter.jpg" class="card-img-top" style="width: 100%; height: auto;" alt="...">
    <div class="card-body">
      <h5 class="card-title">Vedio meeting</h5>
      <p class="card-text font-italic text-info">congratulations Your appointment has been schedule on
      <strong> ${details.schedule}</strong> . I hope you will be able to accept our invitation to attend this important session. Please
        confirm your participation by
        filling the on-line registration form available at:
        http://www.itu.int/itu-d/cyb/app/e-health/register_sept10.html. If you
        have any questions or require further information, please do not hesitate to contact Docter <strong>${details.name}</strong>
       <strong> ${details.email}</strong> </p>
      <a href="#" class="btn btn-primary">  <i class="fas fa-video"></i> Join Meeting</a>
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
                    

                    <html lang="en">

            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
                integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
              <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossorigin="anonymous"></script>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

              <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
                integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
                crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"
                integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2"
                crossorigin="anonymous"></script>
              <title>Document</title>
            </head>
            
            <body>
            
              
              <div class="card" style="width: 24rem;">
                <img src="docter.jpg" class="card-img-top" style="width: 100%; height: auto;" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Vedio meeting</h5>
                  <p class="card-text font-italic text-info">congratulations Your appointment has been schedule on
                  <strong>${details.created} </strong>. I hope you will be able to accept our invitation to attend this important session. your patient name <strong>${details.name} </strong> Disorder <strong>${details.disorder}</strong>
                    ${details.email}</p>
                  <a href="#" class="btn btn-primary">  <i class="fas fa-video"></i>join Meeting</a>
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
      alternatives: [{ contentType: "text/html" }],
      html: `
                    
                   <html lang="en">

  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
    integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
    integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"
    integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2"
    crossorigin="anonymous"></script>
  <title>Document</title>
</head>

<body>

  
  <div class="card" style="width: 24rem;">
    <img src="docter.jpg" class="card-img-top" style="width: 100%; height: auto;" alt="...">
    <div class="card-body">
      <h5 class="card-title">Vedio meeting</h5>
      <p class="card-text font-italic text-info">congratulations Your appointment has been schedule on
      <strong> ${details.schedule}</strong> . I hope you will be able to accept our invitation to attend this important session. Please
        confirm your participation by
        filling the on-line registration form available at:
        http://www.itu.int/itu-d/cyb/app/e-health/register_sept10.html. If you
        have any questions or require further information, please do not hesitate to contact Docter <strong>${details.name}</strong>
       <strong> ${details.email}</strong> </p>
      <a href="#" class="btn btn-primary">  <i class="fas fa-video"></i> Join Meeting</a>
    </div>
  </div>
</body>

</html>
                   
                `
    }); console.log(info);


  }

}
module.exports = new EmailService();