// emailTemplateHelper.js

/**
 * Generates a simple HTML email template with dynamic content.
 * @param {string} recipientEmail - The recipient's email address to personalize the template.
 * @param {string} subject - The subject of the email.
 * @param {string} message - The main message/body content of the email.
 * @returns {string} - The HTML string for the email.
 */
function generateEmailTemplate(recipientEmail, subject, message) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>${subject}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          margin: 0; padding: 20px;
          color: #333;
        }
        .container {
          max-width: 600px;
          background: white;
          margin: auto;
          padding: 30px;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        h1 {
          color: #007bff;
        }
        p {
          font-size: 16px;
          line-height: 1.5;
        }
        .footer {
          margin-top: 30px;
          font-size: 12px;
          color: #999;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>${subject}</h1>
        <p>Hello, <strong>${recipientEmail}</strong>!</p>
        <p>${message}</p>
        <div class="footer">
          &copy; ${new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;
}

module.exports = { generateEmailTemplate };
