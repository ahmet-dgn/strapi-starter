import type { Schema, Attribute } from '@strapi/strapi';

export interface AyarlarDepertmanlar extends Schema.Component {
  collectionName: 'components_ayarlar_depertmanlars';
  info: {
    displayName: 'Depertmanlar';
    icon: 'calendar';
  };
  attributes: {
    Depertmanlar: Attribute.String;
    Telefon: Attribute.String;
    EPosta: Attribute.String;
    Yetkili: Attribute.String;
  };
}

export interface AyarlarIletisimBilgileri extends Schema.Component {
  collectionName: 'components_ayarlar_iletisim_bilgileris';
  info: {
    displayName: '\u0130leti\u015Fim Bilgileri';
    icon: 'key';
    description: '';
  };
  attributes: {
    Baslik: Attribute.String;
    Adres: Attribute.Text;
    Telefon: Attribute.String;
    EPosta: Attribute.String;
    GoogleMapsLink: Attribute.Text;
  };
}

export interface BlocksDosya extends Schema.Component {
  collectionName: 'components_blocks_dosyas';
  info: {
    displayName: 'Dosya';
    icon: 'cog';
  };
  attributes: {
    Icerik: Attribute.Component<'content-for-blocks.dosya-icerik', true>;
  };
}

export interface BlocksFeaturedProducts extends Schema.Component {
  collectionName: 'components_blocks_featured_products';
  info: {
    displayName: 'FeaturedProducts';
    icon: 'cube';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    products: Attribute.Relation<
      'blocks.featured-products',
      'oneToMany',
      'api::product.product'
    >;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    icon: 'crown';
    description: '';
  };
  attributes: {
    ImagePosition: Attribute.Enumeration<['Left', 'Right']> &
      Attribute.DefaultTo<'Left'>;
    Title: Attribute.String;
    SubTitle: Attribute.String;
    OverLineText: Attribute.String;
    ButtonName: Attribute.String;
    Link: Attribute.String;
    Image: Attribute.Media;
    Description: Attribute.RichText;
  };
}

export interface BlocksKutuBannerAlani extends Schema.Component {
  collectionName: 'components_blocks_kutu_banner_alani';
  info: {
    displayName: 'Kutu Banner Alan\u0131';
    icon: 'dashboard';
  };
  attributes: {
    Icerik: Attribute.Component<'content-for-blocks.kutu-banner-icerik', true>;
    Baslik: Attribute.String;
    Aciklama: Attribute.Text;
  };
}

export interface BlocksLastBlogs extends Schema.Component {
  collectionName: 'components_blocks_last_blogs';
  info: {
    displayName: 'lastBlogs';
    icon: 'medium';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface BlocksNewProducts extends Schema.Component {
  collectionName: 'components_blocks_new_products';
  info: {
    displayName: 'NewProducts';
    icon: 'cube';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    products: Attribute.Relation<
      'blocks.new-products',
      'oneToMany',
      'api::product.product'
    >;
  };
}

export interface BlocksResimBanner extends Schema.Component {
  collectionName: 'components_blocks_resim_banners';
  info: {
    displayName: 'Resim Banner';
    icon: 'picture';
  };
  attributes: {
    Resim: Attribute.Media;
  };
}

export interface BlocksSlider extends Schema.Component {
  collectionName: 'components_blocks_sliders';
  info: {
    displayName: 'Slider';
    icon: 'landscape';
  };
  attributes: {
    Content: Attribute.Component<'content-for-blocks.slider-content', true>;
  };
}

export interface BlocksTextWithOverlayImage extends Schema.Component {
  collectionName: 'components_blocks_text_with_overlay_images';
  info: {
    displayName: 'TextWithOverlayImage';
    icon: 'layout';
  };
  attributes: {
    Title: Attribute.String;
    SubTitle: Attribute.String;
    OverLineText: Attribute.String;
    Link: Attribute.String;
    ButtonName: Attribute.String;
    Image: Attribute.Media;
    Description: Attribute.Text;
  };
}

export interface BlocksVideo extends Schema.Component {
  collectionName: 'components_blocks_videos';
  info: {
    displayName: 'Video';
    icon: 'paperPlane';
  };
  attributes: {
    Video: Attribute.Media;
  };
}

export interface BlocksYatayVitrin extends Schema.Component {
  collectionName: 'components_blocks_yatay_vitrins';
  info: {
    displayName: 'Yatay Vitrin';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Baslik: Attribute.String;
    Aciklama: Attribute.RichText;
    Icerik: Attribute.Component<
      'content-for-blocks.yatay-vitrin-icerigi',
      true
    >;
  };
}

export interface BlocksYaziVeSlider extends Schema.Component {
  collectionName: 'components_blocks_yazi_ve_sliders';
  info: {
    displayName: 'Yaz\u0131VeSlider';
    description: '';
  };
  attributes: {
    Baslik: Attribute.String;
    Aciklama: Attribute.Blocks;
    Resim: Attribute.Media;
  };
}

export interface ContentForBlocksDosyaIcerik extends Schema.Component {
  collectionName: 'components_content_for_blocks_dosya_iceriks';
  info: {
    displayName: 'DosyaIcerik';
    icon: 'archive';
  };
  attributes: {
    Baslik: Attribute.String;
    VitrinResim: Attribute.Media;
    Dosya: Attribute.Media;
  };
}

export interface ContentForBlocksKutuBannerIcerik extends Schema.Component {
  collectionName: 'components_content_for_blocks_kutu_banner_iceriks';
  info: {
    displayName: 'KutuBannerIcerik';
    icon: 'crown';
  };
  attributes: {
    Baslik: Attribute.String;
    Resim: Attribute.Media;
    Link: Attribute.String;
  };
}

export interface ContentForBlocksSliderContent extends Schema.Component {
  collectionName: 'components_content_for_blocks_slider_contents';
  info: {
    displayName: 'SliderContent';
    icon: 'layer';
    description: '';
  };
  attributes: {
    OverLineText: Attribute.String;
    Title: Attribute.String;
    Description: Attribute.RichText;
    Link: Attribute.String;
    ButtonName: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface ContentForBlocksYatayVitrinIcerigi extends Schema.Component {
  collectionName: 'components_content_for_blocks_yatay_vitrin_icerigis';
  info: {
    displayName: 'Yatay Vitrin \u0130\u00E7eri\u011Fi';
    icon: 'bulletList';
  };
  attributes: {
    Baslik: Attribute.String;
    Aciklama: Attribute.Text;
    Link: Attribute.String;
    Resim: Attribute.Media;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ayarlar.depertmanlar': AyarlarDepertmanlar;
      'ayarlar.iletisim-bilgileri': AyarlarIletisimBilgileri;
      'blocks.dosya': BlocksDosya;
      'blocks.featured-products': BlocksFeaturedProducts;
      'blocks.hero': BlocksHero;
      'blocks.kutu-banner-alani': BlocksKutuBannerAlani;
      'blocks.last-blogs': BlocksLastBlogs;
      'blocks.new-products': BlocksNewProducts;
      'blocks.resim-banner': BlocksResimBanner;
      'blocks.slider': BlocksSlider;
      'blocks.text-with-overlay-image': BlocksTextWithOverlayImage;
      'blocks.video': BlocksVideo;
      'blocks.yatay-vitrin': BlocksYatayVitrin;
      'blocks.yazi-ve-slider': BlocksYaziVeSlider;
      'content-for-blocks.dosya-icerik': ContentForBlocksDosyaIcerik;
      'content-for-blocks.kutu-banner-icerik': ContentForBlocksKutuBannerIcerik;
      'content-for-blocks.slider-content': ContentForBlocksSliderContent;
      'content-for-blocks.yatay-vitrin-icerigi': ContentForBlocksYatayVitrinIcerigi;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
