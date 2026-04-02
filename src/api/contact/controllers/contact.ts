
export default {
  send: async (ctx: any) => {
    const { name, email, phone, service, budget, message, subscribe } =
      ctx.request.body;

    if (!name || !email || !message) {
      return ctx.badRequest("Name, email, and message are required.");
    }

    const adminHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Project Brief</title>
</head>
<body style="margin:0;padding:0;background:#F5F1EA;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F1EA;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border-top:3px solid #5C4F3A;">

        <!-- Header -->
        <tr>
          <td style="padding:40px 48px 32px;border-bottom:1px solid #EDE8DF;">
            <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#9A8C7E;">Interior Design Studio</p>
            <h1 style="margin:0;font-size:28px;color:#4A3C2A;font-weight:normal;letter-spacing:1px;">Enjoy Decor</h1>
          </td>
        </tr>

        <!-- Title -->
        <tr>
          <td style="padding:32px 48px 24px;">
            <a href="https://www.enjoy-decor.com" style="text-decoration:none;display:inline-block;margin-bottom:12px;">
              <img src="https://cms.enjoy-decor.com/logo.png" alt="Enjoy Decor" width="60" height="60" style="display:block;" />
            </a>
            <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#9A8C7E;">New Inquiry</p>
            <h2 style="margin:0;font-size:22px;color:#4A3C2A;font-weight:normal;">Project Brief from ${name}</h2>
          </td>
        </tr>

        <!-- Details -->
        <tr>
          <td style="padding:0 48px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #EDE8DF;">
              ${[
                ["Name", name],
                ["Email", email],
                phone ? ["Phone", phone] : null,
                service ? ["Service", service] : null,
                budget ? ["Budget", budget] : null,
                ["Newsletter", subscribe ? "Yes" : "No"],
              ]
                .filter(Boolean)
                .map(
                  ([label, value], i) => `
              <tr style="background:${i % 2 === 0 ? "#FAFAF8" : "#FFFFFF"};">
                <td style="padding:12px 16px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#9A8C7E;width:36%;border-right:1px solid #EDE8DF;">${label}</td>
                <td style="padding:12px 16px;font-family:Arial,sans-serif;font-size:14px;color:#4A3C2A;">${value}</td>
              </tr>`
                )
                .join("")}
            </table>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding:0 48px 40px;">
            <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#9A8C7E;">Message</p>
            <div style="background:#F5F1EA;border-left:3px solid #5C4F3A;padding:20px 24px;">
              <p style="margin:0;font-size:15px;color:#4A3C2A;line-height:1.8;">${message}</p>
            </div>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:0 48px 40px;">
            <a href="mailto:${email}" style="display:inline-block;background:#5C4F3A;color:#EDE8DF;text-decoration:none;font-family:Arial,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;padding:14px 28px;">Reply to ${name}</a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 48px;border-top:1px solid #EDE8DF;background:#FAFAF8;">
            <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#9A8C7E;line-height:1.6;">
              Enjoy Decor &nbsp;·&nbsp; Interior Design Studio<br/>
              This email was generated automatically from your website contact form.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

    const clientHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>We received your brief</title>
</head>
<body style="margin:0;padding:0;background:#F5F1EA;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F1EA;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border-top:3px solid #5C4F3A;">

        <!-- Header -->
        <tr>
          <td style="padding:40px 48px 32px;border-bottom:1px solid #EDE8DF;">
          <a href="https://www.enjoy-decor.com" style="text-decoration:none;display:inline-block;margin-bottom:12px;">
            <img src="https://cms.enjoy-decor.com/logo.png" alt="Enjoy Decor" width="60" height="60" style="display:block;" />
          </a>
            <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#9A8C7E;">Interior Design Studio</p>
            <h1 style="margin:0;font-size:28px;color:#4A3C2A;font-weight:normal;letter-spacing:1px;">Enjoy Decor</h1>
          </td>
        </tr>

        <!-- Greeting -->
        <tr>
          <td style="padding:40px 48px 24px;">
            <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#9A8C7E;">Thank you</p>
            <h2 style="margin:0 0 20px;font-size:22px;color:#4A3C2A;font-weight:normal;">We've received your brief, ${name}.</h2>
            <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;color:#7A6D5E;line-height:1.8;">
              Thank you for reaching out to Enjoy Decor. We've received your project brief and one of our designers will be in touch within <strong style="color:#4A3C2A;font-weight:normal;border-bottom:1px solid #C8BDB0;">1–2 business days</strong>.
            </p>
          </td>
        </tr>

        <!-- Summary -->
        <tr>
          <td style="padding:0 48px 32px;">
            <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#9A8C7E;">Your submission</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #EDE8DF;">
              ${[
                service ? ["Service", service] : null,
                budget ? ["Budget", budget] : null,
              ]
                .filter(Boolean)
                .map(
                  ([label, value], i) => `
              <tr style="background:${i % 2 === 0 ? "#FAFAF8" : "#FFFFFF"};">
                <td style="padding:12px 16px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#9A8C7E;width:36%;border-right:1px solid #EDE8DF;">${label}</td>
                <td style="padding:12px 16px;font-family:Arial,sans-serif;font-size:14px;color:#4A3C2A;">${value}</td>
              </tr>`
                )
                .join("")}
              <tr>
                <td style="padding:12px 16px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#9A8C7E;border-right:1px solid #EDE8DF;vertical-align:top;">Message</td>
                <td style="padding:12px 16px;font-family:Arial,sans-serif;font-size:14px;color:#4A3C2A;line-height:1.7;">${message}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- What's next -->
        <tr>
          <td style="padding:0 48px 40px;">
            <div style="background:#F5F1EA;border-left:3px solid #5C4F3A;padding:20px 24px;">
              <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#5C4F3A;">What happens next</p>
              <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#7A6D5E;line-height:1.8;">
                Our team will review your brief and prepare tailored ideas for your space. We'll reach out to schedule an initial consultation at a time that suits you.
              </p>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 48px;border-top:1px solid #EDE8DF;background:#FAFAF8;">
            <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:11px;color:#9A8C7E;">
              Enjoy Decor &nbsp;·&nbsp; Interior Design Studio
            </p>
            <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#C8BDB0;">
              Please do not reply to this email. To reach us directly, visit our website.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

    try {
      await strapi.plugins.email.services.email.send({
        to: process.env.ADMIN_EMAIL,
        from: process.env.SMTP_USER,
        replyTo: email,
        subject: `New Project Brief from ${name}`,
        html: adminHtml,
      });

      await strapi.plugins.email.services.email.send({
        to: email,
        from: process.env.SMTP_USER,
        subject: "We received your brief — Enjoy Decor",
        html: clientHtml,
      });

      return ctx.send({ ok: true });
    } catch (err) {
      strapi.log.error("Contact email failed:", err);
      return ctx.internalServerError("Failed to send email.");
    }
  },
};