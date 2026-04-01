import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
    email: {
        config: {
        provider: 'nodemailer',
        providerOptions: {
            host: env('SMTP_HOST', 'smtp.gmail.com'),
            port: env.int('SMTP_PORT', 587),
            secure: false,
            auth: {
                user: env('SMTP_USERNAME'),
                pass: env('SMTP_PASSWORD'),
            },
        },
        settings: {
            defaultFrom: env('EMAIL_FROM'),
            defaultReplyTo: env('EMAIL_REPLY_TO'),
        },
        },
  },
});

export default config;
