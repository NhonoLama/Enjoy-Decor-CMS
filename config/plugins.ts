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
                user: env('SMTP_USER'),
                pass: env('SMTP_PASS'),
            },
        },
        settings: {
            defaultFrom: env('ADMIN_EMAIL'),
            defaultReplyTo: env('ADMIN_EMAIL'),
        },
        },
  },
});

export default config;
