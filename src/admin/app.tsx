import type { StrapiApp } from '@strapi/strapi/admin';
import Logo from "../../src/extensions/favicon.jpg"; // Adjust the path to your logo image

export default {
  config: {
    // You can also add logos here if you want (optional)
    // auth: { logo: AuthLogo },
    // menu: { logo: MenuLogo },

    head:{
      favicon : Logo,
    },

    translations: {
      en: {   // Change 'en' if you use another language
        "Auth.form.welcome.title": "Welcome to Enjoy-Decor CMS!",           
        "Auth.form.welcome.subtitle": "Log in to your admin dashboard", 
      },
    },
  },

  bootstrap(app: StrapiApp) {
    // You can add more custom logic here later if needed
  },
};
