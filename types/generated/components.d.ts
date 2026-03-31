import type { Schema, Struct } from '@strapi/strapi';

export interface CompanyStatsCompanyStats extends Struct.ComponentSchema {
  collectionName: 'components_company_stats_company_stats';
  info: {
    displayName: 'company_stats';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ServiceServiceDetailList extends Struct.ComponentSchema {
  collectionName: 'components_service_service_detail_lists';
  info: {
    displayName: 'service_detail_list';
    icon: 'arrowRight';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SocialLinkSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_social_link_social_links';
  info: {
    displayName: 'social_link';
  };
  attributes: {
    handler: Schema.Attribute.String;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    location_href: Schema.Attribute.String;
    location_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'company-stats.company-stats': CompanyStatsCompanyStats;
      'service.service-detail-list': ServiceServiceDetailList;
      'social-link.social-link': SocialLinkSocialLink;
    }
  }
}
