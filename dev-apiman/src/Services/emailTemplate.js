const url = `localhost:3000/confirm`
const csvData = `data:image/png;base64,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`
const emailHtml = (name)=>(`<!DOCTYPE html>
<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<style type="text/css">    
    /* CLIENT-SPECIFIC STYLES */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; }

    /* RESET STYLES */
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }

    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width:600px){
        h1 {
            font-size: 32px !important;
            line-height: 32px !important;
        }
    }

    /* ANDROID CENTER FIX */
    div[style*="margin: 16px 0;"] { margin: 0 !important; }
</style>

<style type="text/css">

</style>
</head>
<body style="background-color: #5d11e9; margin: 0 !important; padding: 0 !important;">

<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    Change Password
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <!-- LOGO -->
    <tr>
        <td bgcolor="#f4f4f4" align="center">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >
                <tr>
                    <td align="center" valign="top" style="padding: -15px 10px 40px 10px;">
                        <a href="#" target="_blank">
                            <img alt="Logo" src="cid:809Ruby90O" width="250" height="250" style="display: block; width: 169px; max-width: 169px; min-width: 169px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;" border="0">
                        </a>
                    </td>
                </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
    </tr>
    <!-- HERO -->
    <tr>
        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >
                <tr>
                    <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                      <h1 style="font-size: 28px; font-weight: 400; margin: 0; letter-spacing: 0px;">Welcome to Virtual Clinick</h1>
                    </td>
                </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
    </tr>
    <!-- COPY BLOCK -->
    <tr>
        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >
              <!-- COPY -->
              <tr>
                <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >
                  <p style="margin: 0;">Dear ${name},<br>
                  We're excited to have you get started. First, you need to confirm your account. Just press the button below.</p>
                </td>
              </tr>
              <!-- BULLETPROOF BUTTON -->
              <tr>
                <td bgcolor="#ffffff" align="left">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;">
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                              <td align="center" style="border-radius: 36px;" bgcolor="#4A35EA"><a href=${url} target="_blank" style="    font-size: 23px;
                                font-family: Helvetica, Arial, sans-serif;
                                color: #ffffff;
                                text-decoration: none;
                                color: #ffffff;
                                text-decoration: dotted;
                                padding: 15px 25px;
                                border-radius: 34px;
                                border: 5px solid #4A35EA;
                                display: inline-block;">Reset Password</a></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- COPY -->
              <tr>
                <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 0px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >
                  <p style="margin: 0;">If that doesn't work, copy and paste the following link in your browser:</p>
                </td>
              </tr>
              <!-- COPY -->
                <tr>
                  <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 20px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >
                    <p style="margin: 0;"><a href="http://litmus.com" target="_blank" style="color: #4A35EA;">${url}</a></p>
                  </td>
                </tr>
              <!-- COPY -->
              <tr>
                <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >
                  <p style="margin: 0;">If you have any questions, just reply to this email—we're always happy to help out.</p>
                </td>
              </tr>
              <!-- COPY -->
              <tr>
                <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >
                  <p style="margin: 0;">Cheers,<br>The Ceej Team</p>
                </td>
              </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
    </tr>
    <!-- FOOTER -->
    <tr>
        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >
              <!-- NAVIGATION -->
              <!-- <tr>
                <td bgcolor="#f4f4f4" align="left" style="padding: 30px 30px 30px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;" >
                  <p style="margin: 0;">
                    <a href="http://litmus.com" target="_blank" style="color: #111111; font-weight: 700;">Dashboard</a> -
                    <a href="http://litmus.com" target="_blank" style="color: #111111; font-weight: 700;">Billing</a> -
                    <a href="http://litmus.com" target="_blank" style="color: #111111; font-weight: 700;">Help</a>
                  </p>
                </td>
              </tr> -->
              <!-- PERMISSION REMINDER -->
              <tr>
                <td bgcolor="#f4f4f4" align="left" style="padding: 30px 30px 30px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;" >
                  <p style="margin: 0;">You received this email because you just signed up for a new account. If it looks weird, <a href="http://litmus.com" target="_blank" style="color: #111111; font-weight: 700;">view it in your browser</a>.</p>
                </td>
              </tr>
              <!-- UNSUBSCRIBE -->
              <tr>
                <td bgcolor="#f4f4f4" align="left" style="padding: 30px 30px 30px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;" >
                  <p style="margin: 0;">If these emails get annoying, please feel free to <a href="http://litmus.com" target="_blank" style="color: #111111; font-weight: 700;">unsubscribe</a>.</p>
                </td>
              </tr>
              <!-- ADDRESS -->
              <tr>
                <td bgcolor="#f4f4f4" align="left" style="padding: 0px 30px 30px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;" >
                  <p style="margin: 0;">Ceej - 1234 Main Street - Anywhere, MA - 56789</p>
                </td>
              </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
    </tr>
</table>
    
</body>
</html>`);
module.exports = emailHtml