export default {
  send: async (ctx: any) => {
    const { name, email, phone, service, budget, message, subscribe } =
      ctx.request.body;

    if (!name || !email || !message) {
      return ctx.badRequest("Name, email, and message are required.");
    }

    try {
      await strapi.plugins.email.services.email.send({
        to: process.env.ADMIN_EMAIL,
        from: process.env.SMTP_USER,
        replyTo: email,
        subject: `New Project Brief from ${name}`,
        html: `...`, // your existing html
      });

      await strapi.plugins.email.services.email.send({
        to: email,
        from: process.env.SMTP_USER,
        subject: "We received your brief — Enjoy Decor",
        html: `...`, // your existing html
      });

      return ctx.send({ ok: true });
    } catch (err) {
      strapi.log.error("Contact email failed:", err);
      return ctx.internalServerError("Failed to send email.");
    }
  },
};