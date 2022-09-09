type CMSHeadProps = {
  title: string;
  seo_title: string;
  search_description: string;
  seo_keywords: string;
  og_twitter_title: string;
  og_twitter_url: string;
  og_twitter_description: string;
  og_twitter_image: { meta: { download_url: string } };
  twitter_card: string;
  twitter_site: string;
  twitter_creator: string;
};

type ImageContent = {
  title: string;
  url: string;
};

type SVGImageContent = {
  title: string;
  url: string;
  view_box: string;
};

type ImageValue = {
  image?: ImageContent;
  svg_image?: SVGImageContent;
  width?: number;
  height?: number;
};

type ImageType = {
  type: string;
  value: ImageValue;
  id: string;
};

type Link = [
  {
    id: string;
    type: string;
    value: string;
  }
];

type ButtonValue = {
  text: string;
  style_type:
    | 'whiteContained'
    | 'whiteOutlined'
    | 'cornflowerContained'
    | 'gradientContained'
    | 'linkWaterContained';
  icon?: ImageContent;
  has_arrow?: boolean;
  link?: Link;
};

type Button = {
  id: string;
  value: ButtonValue;
};

type Testimonial = {
  id: number;
  bg_image: ImageContent[];
  logo: SVGImageContent[];
  title: string;
  text: string;
  full_text: string;
  author: string;
  author_job_title: string;
  can_display: boolean;
};

type HomePageHeader = {
  title: string;
  subtitle: string;
  buttons: Button[];
  partner_images_header: string;
  partner_images: ImageType[];
};

type HomePageFeature = {
  header_svg: ImageValue;
  header_text: string;
  title: string;
  text: string;
  link_text: string;
  link: Link;
  side_svg_big: SVGImageContent;
  side_svg_small: SVGImageContent;
  side_svg_small_top_offset: number;
  side_svg_small_right_offset: number;
  side_svg_big_mobile: SVGImageContent;
  side_svg_small_mobile: SVGImageContent;
  side_svg_small_top_offset_mobile: number;
  side_svg_small_right_offset_mobile: number;
};

type HomePage = {
  cms_head_props: CMSHeadProps;

  header: { value: HomePageHeader }[];

  section_1_title: string;
  section_1_sub_title: string;
  section_1_center_title_count: string;
  section_1_center_title: string;
  section_1_center_text: string;
  section_1_button: Button[];

  features_sections: {
    id: string;
    value: HomePageFeature;
  }[];

  testimonials: Testimonial[];
  quoteless_testimonials: Testimonial[];

  learn_more_section_title: string;

  learn_more_tile_1_header_image: ImageType[];
  learn_more_tile_1_link: Link;
  learn_more_tile_1_header_author_image: ImageType[];
  learn_more_tile_1_author_name: string;
  learn_more_tile_1_resource_type: string;
  learn_more_tile_1_video_id: string;
  learn_more_tile_1_pill_text: string;
  learn_more_tile_1_resource_title: string;
  learn_more_tile_1_resource_snippet: string;
  learn_more_tile_1_resource_date: string;

  learn_more_tile_2_header_image: ImageType[];
  learn_more_tile_2_link: Link;
  learn_more_tile_2_author_name: string;
  learn_more_tile_2_resource_type: string;
  learn_more_tile_2_video_id: string;
  learn_more_tile_2_pill_text: string;
  learn_more_tile_2_resource_title: string;
  learn_more_tile_2_resource_snippet: string;
  learn_more_tile_2_resource_date: string;

  learn_more_tile_3_header_image: ImageType[];
  learn_more_tile_3_link: Link;
  learn_more_tile_3_header_author_image: ImageType[];
  learn_more_tile_3_author_name: string;
  learn_more_tile_3_resource_type: string;
  learn_more_tile_3_video_id: string;
  learn_more_tile_3_pill_text: string;
  learn_more_tile_3_resource_title: string;
  learn_more_tile_3_resource_snippet: string;
  learn_more_tile_3_resource_date: string;

  learn_more_tile_4_title: string;

  learn_more_tile_5_title: string;
  learn_more_tile_5_link: Link;
};

type Section3Card = {
  title: string;
  text: string;
  icon: ImageType;
};

type ProductPageFeature = {
  title: string;
  text: string;
  side_svg_big: SVGImageContent;
  side_svg_small: SVGImageContent;
  side_svg_small_top_offset: number;
  side_svg_small_right_offset: number;
  side_svg_mobile: SVGImageContent;
};

type ProductPage = {
  cms_head_props: CMSHeadProps;

  header_title: string;
  header_text: string;
  header_buttons: Button[];
  header_side_image_1: ImageType[];
  header_side_image_2: ImageType[];

  section_1_title: string;
  section_1_image: ImageType[];
  section_1_image_mobile: ImageType[];

  section_2_title: string;
  section_2_text: string;
  feature_items: {
    id: number;
    value: ProductPageFeature;
  }[];

  section_3_title: string;
  section_3_text: string;

  section_3_card_1_title: string;
  section_3_card_1_text: string;
  section_3_card_1_icon: ImageType[];

  section_3_card_2_title: string;
  section_3_card_2_text: string;
  section_3_card_2_icon: ImageType[];

  section_3_card_3_title: string;
  section_3_card_3_text: string;
  section_3_card_3_icon: ImageType[];

  section_4_title: string;
  testimonials: Testimonial[];
};

type WhitepaperBPage = {
  cms_head_props: CMSHeadProps;

  id: number;

  header_title: string;
  header_text: string;
  header_image: ImageType[];
  header_image_mobile: ImageType[];
  header_richtext: string;
  section_1_title: string;
  section_1_text: string;
  section_1_button: Button[];
  section_1_richtext: string;
};

type ContactPage = {
  cms_head_props: CMSHeadProps;

  id: number;
  header_title: string;
  header_richtext: string;
};

type ResourceListingPage = {
  cms_head_props: CMSHeadProps;

  header_title: string;
  header_text: string;
  contact_section_title: string;
  contact_section_text: string;
  contact_section_button: Button[];

  resource_list: ResourceList;
};

type ResourceListItem = {
  id: number;

  resource_type: string;
  listing_image: ImageType[];
  listing_title: string;
  relative_url: string;

  header_title: string;
  header_image_mobile: ImageType[];
};

type ResourceList = ResourceListItem[];
