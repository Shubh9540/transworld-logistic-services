// ============================================================
// Transworld — TypeScript Interfaces
// All interfaces defined here — NEVER inline in components
// ============================================================

// ------------------------------------------------------------
// COMMON / SHARED
// ------------------------------------------------------------

export interface BreadcrumbData {
  title: string;
  paths: { label: string; url?: string }[];
  bgImage: string;
}

export interface TopBarData {
  hours?: string;
  phone?: string;
  email?: string;
  address?: string;
  socialLinks?: { id: string; icon: string; url: string }[];
}

export interface HeaderNavLink {
  id: string;
  label: string;
  url?: string;
  subLinks?: { id: string; label: string; url: string }[];
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinks: HeaderNavLink[];
  contactButton: { text: string; url: string };
}

// ------------------------------------------------------------
// FOOTER
// ------------------------------------------------------------

export interface FooterColumnLink {
  id: string;
  label: string;
  url: string;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: FooterColumnLink[];
}

export interface FooterContactItem {
  id: string;
  icon: string;
  text: string;
  subText?: string;
}

export interface FooterContact {
  title?: string;
  items: FooterContactItem[];
}

export interface FooterNewsletterData {
  title: string;
  description: string;
  placeholder: string;
  buttonIcon: string;
}

export interface FooterFeatureData {
  id: string;
  icon: string;
  label: string;
}

export interface FooterBottomRightData {
  icon: string;
  text: string;
}

export interface TransworldFooterData {
  backgroundImage?: string;
  logo: string;
  logoAlt: string;
  description: string;
  socialLinks: { id: string; icon: string; url: string }[];
  columns: FooterColumn[];
  contact?: FooterContact;
  newsletter?: FooterNewsletterData;
  features?: FooterFeatureData[];
  copyright: string;
  bottomCenterText?: string;
  bottomLinks?: { id: string; label: string; url: string }[];
  bottomRight?: FooterBottomRightData;
  testimonials?: {
    variants?: {
      TransworldTestimonials1?: TransworldTestimonialsData;
    };
  };
}

// ------------------------------------------------------------
// HERO SECTION
// ------------------------------------------------------------

export interface HeroSlide {
  id: string;
  image: string;
  imageAlt: string;
  tagline: string;
  title: string;
  titleHighlight: string;
  description: string;
  primaryButton: { text: string; url: string };
  secondaryButton: { text: string; url: string };
}

export interface TransworldHeroData {
  footerTags?: string[];
  slides: HeroSlide[];
}

// ------------------------------------------------------------
// ABOUT US SECTION
// ------------------------------------------------------------

export interface AboutFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AboutStatItem {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface AboutFeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TransworldAboutData {
  imagePlane: string;
  imageMain: string;
  worldMapBg: string;
  experienceBadge: { years: string; label: string; icon: string };
  stats: AboutStatItem[];
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  features: AboutFeatureItem[];
  buttonText: string;
  buttonUrl: string;
  callLabel: string;
  callNumber: string;
}

export interface TransworldAboutPageContentData {
  subtitle: string;
  watermarkText: string;
  titlePart1: string;
  titleHighlight: string;
  descriptions: string[];
  image1: string;
  image2: string;
  image1Alt: string;
  image2Alt: string;
  experienceYears: string;
  experienceLabel: string;
  bottomTags: string[];
}

// ------------------------------------------------------------
// WHY CHOOSE US SECTION
// ------------------------------------------------------------

export interface WhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TransworldWhyChooseUsData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  image: string;
  imageAlt: string;
  scriptText: string;
  bottomTagline: string;
  features: WhyChooseUsFeature[];
}

export interface TransworldMissionData {
  backgroundNumber: string;
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description1: string;
  description2: string;
  image: string;
  imageAlt: string;
}

export interface TransworldVisionData {
  backgroundNumber: string;
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description1: string;
  description2: string;
  image: string;
  imageAlt: string;
}

// ------------------------------------------------------------
// SERVICES SECTION
// ------------------------------------------------------------

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  url: string;
  iconBgTheme?: 'navy' | 'olive';
}

export interface TransworldServicesData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  bgImage: string;
  services: ServiceItem[];
}

// ------------------------------------------------------------
// PROCESS / HOW IT WORKS SECTION
// ------------------------------------------------------------

export interface ProcessStep {
  id: string;
  icon: string;
  stepNumber: string;
  title: string;
  description: string;
}

export interface TransworldProcessData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  steps: ProcessStep[];
  image: string;
  imageAlt: string;
}

// ------------------------------------------------------------
// TEAM SECTION
// ------------------------------------------------------------

export interface SocialLink {
  id: string;
  icon: string;
  url: string;
}

export interface TeamMemberQuickInfo {
  position: string;
  experience: string;
  specialization: string;
  certification: string;
  location: string;
}

export interface TeamMemberExpertise {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  image: string;
  name: string;
  role: string;
  shortDescription: string;
  quote: string;
  biography: string;
  experience: string;
  certification: string;
  specialization: string;
  trainingStyle: string;
  quickInfo: TeamMemberQuickInfo;
  expertise: TeamMemberExpertise[];
  social: SocialLink[];
}

export interface TransworldTeamData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  members: TeamMember[];
}

export interface TransworldTeamDetailData {
  teamMemberId?: string;
  // Note: Detail pages typically read directly from the main list.
  // We can pass the whole member object to the detail component.
}

// ------------------------------------------------------------
// COUNTER / STATS SECTION
// ------------------------------------------------------------

export interface CounterStat {
  id: string;
  value: string;
  suffix: string;
  label: string;
  icon: string;
}

export interface TransworldCounterData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  backgroundImage: string;
  stats: CounterStat[];
}

// ------------------------------------------------------------
// PARTNERS SECTION
// ------------------------------------------------------------

export interface TransworldPartnerItem {
  id: string;
  image: string;
  name: string;
}

export interface TransworldPartnersData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  partners: TransworldPartnerItem[];
}

// ------------------------------------------------------------
// TESTIMONIALS SECTION
// ------------------------------------------------------------

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  image: string;
  imageAlt?: string;
  rating: number;
  text: string;
}

export interface TransworldTestimonialsData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description?: string;
  testimonials: Testimonial[];
}

// ------------------------------------------------------------
// BLOG SECTION
// ------------------------------------------------------------

export interface BlogPost {
  id: string;
  image: string;
  imageAlt: string;
  category: string;
  date: string;
  dateFull?: string;
  day: string;
  month: string;
  author: string;
  authorImage?: string;
  comments?: string;
  title: string;
  excerpt: string;
  url: string;
  readMoreText: string;
  content?: string;
  tags?: string[];
}

export interface TransworldBlogData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  blogs: BlogPost[];
  buttonText: string;
  buttonUrl: string;
}

export interface TransworldBlogDetailData {
  posts: BlogPost[];
}

export interface TransworldBlogGridData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  posts: BlogPost[];
}



// ------------------------------------------------------------
// TRAINING SECTION
// ------------------------------------------------------------

export interface TrainingProgramItem {
  id: string;
  category: string;
  title: string;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
}

export interface TransworldTrainingData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  programs: TrainingProgramItem[];
  buttonText?: string;
  buttonUrl?: string;
  buttonSideLines?: boolean;
}

// ------------------------------------------------------------
// TRAINING DETAIL SECTION
// ------------------------------------------------------------

export interface TrainingDetailFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TrainingDetailItem {
  id: string;
  slug: string;
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  overviewFeatures: TrainingDetailFeature[];

  programType: string;
  level: string;
  duration: string;
  trainerSupport: string;
  equipment: string;
  location: string;
  suitableFor: { id: string; text: string }[];

  image1: string;
  image2: string;
  highlightsSubtitle: string;
  highlightsTitlePart1: string;
  highlightsTitleHighlight: string;
  highlights: TrainingDetailFeature[];

  bannerSubtitle: string;
  bannerTitlePart1: string;
  bannerTitleHighlight: string;
  bannerDescription: string;
  bannerBgImage: string;
}

export interface TransworldTrainingDetailData {
  programs: TrainingDetailItem[];
}


// ------------------------------------------------------------
// CONTACT SECTION
// ------------------------------------------------------------

export interface ContactInfo {
  id: string;
  icon: string;
  title: string;
  lines: string[];
}

export interface TransworldContactData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  contactInfo: ContactInfo[];
  socialLinks: { id: string; icon: string; url: string }[];

  formSubtitle: string;
  formTitlePart1: string;
  formTitleHighlight: string;
  formDescription: string;
  submitText: string;
}

export interface TransworldContactLocationData {
  mapUrl: string;
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  backgroundImage: string;
}

// ------------------------------------------------------------
// SITEMAP PAGE
// ------------------------------------------------------------

export interface SitemapLink {
  id: string;
  label: string;
  url: string;
}

export interface SitemapCategory {
  id: string;
  title: string;
  links: SitemapLink[];
}

export interface TransworldSitemapData {
  categories: SitemapCategory[];
}


// ------------------------------------------------------------
// PRICING SECTION
// ------------------------------------------------------------

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  isPopular?: boolean;
  features: string[];
}

export interface PricingCardsData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2?: string;
  description: string;
  plans: PricingPlan[];
}

export interface PricingFeatureRow {
  id: string;
  featureName: string;
  basic: string | boolean;
  standard: string | boolean;
  premium: string | boolean;
  elite: string | boolean;
}

export interface PricingTableData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  plans: string[];
  features: PricingFeatureRow[];
}


// ------------------------------------------------------------
// CONSULTATION SECTION
// ------------------------------------------------------------

export interface ConsultationFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ConsultationTopData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  features: ConsultationFeature[];
  formSubtitle: string;
  formTitlePart1: string;
  formTitleHighlight: string;
  formDescription: string;
  buttonText: string;
  privacyText: string;
}

export interface ConsultationStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

export interface ConsultationBottomData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  steps: ConsultationStep[];
  image: string;
  imageAlt: string;
  imageOverlayText: string;
}

// ------------------------------------------------------------
// AWARDS & CERTIFICATIONS SECTION
// ------------------------------------------------------------

export interface AwardsCounterStat {
  id: string;
  icon: string;
  value: string;
  suffix: string;
  title: string;
  description: string;
}

export interface TransworldAwardsCounterData {
  stats: AwardsCounterStat[];
}

export interface AwardsMilestone {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  year: string;
  description: string;
}

export interface TransworldAwardsMilestonesData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonUrl?: string;
  milestones: AwardsMilestone[];
}

// ------------------------------------------------------------
// FAQ SECTION
// ------------------------------------------------------------

export interface FAQStat {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FAQPromo {
  image: string;
  imageAlt: string;
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface FAQContactBoxItem {
  id: string;
  icon: string;
  title: string;
  details: string[];
}

export interface FAQContactBox {
  title: string;
  items: FAQContactBoxItem[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TransworldFAQData {
  topStats: FAQStat[];
  promo: FAQPromo;
  contactBox: FAQContactBox;
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  faqs: FAQItem[];
}

export interface LegalSection {
  id: string;
  title: string;
  content: string;
}

export interface TransworldNotFoundData {
  bgImage: string;
  bgImageAlt?: string;
  zeroImage: string;
  zeroImageAlt?: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  textLeft: string[];
  textRight: string[];
}

export interface TransworldThankYouData {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  backgroundImage?: string;
}

export interface TransworldLegalContentData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  sections: LegalSection[];
}

export interface TransworldCallToActionData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  backgroundImage: string;
}

export interface AwardsCertification {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface TransworldAwardsCertificationsData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  certifications: AwardsCertification[];
}

export interface AwardsCommitmentFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TransworldAwardsCommitmentData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  backgroundImage: string;
  features: AwardsCommitmentFeature[];
  rightHighlightText: string;
}

// ------------------------------------------------------------
// GALLERY SECTIONS
// ------------------------------------------------------------

export interface GalleryTab {
  id: string;
  label: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  category: string;
  image: string;
  imageAlt: string;
}

export interface TransworldImageGalleryData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  tabs: GalleryTab[];
  images: GalleryImage[];
  loadMoreText: string;
}

export interface GalleryVideo {
  id: string;
  thumbnail: string;
  thumbnailAlt: string;
  duration: string;
  title: string;
  description: string;
  videoUrl: string;
}

export interface TransworldVideoGalleryData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  videos: GalleryVideo[];
  loadMoreText: string;
}

// ------------------------------------------------------------
// GLOBAL UI STRINGS
// ------------------------------------------------------------

export interface GlobalUIData {
  loading: string;
  notFound: {
    title: string;
    subtitle: string;
    description: string;
    homeButtonText: string;
    homeButtonUrl: string;
  };
}

// ------------------------------------------------------------
// ROOT TEMPLATE DATA INTERFACE
// ------------------------------------------------------------

export interface TransworldTemplateData {
  common: {
    globalUI: GlobalUIData;
    breadcrumbs: {
      AboutBreadcrumb?: BreadcrumbData;
      WhyChooseUsBreadcrumb?: BreadcrumbData;
      ServicesBreadcrumb?: BreadcrumbData;
      BlogBreadcrumb?: BreadcrumbData;
      ContactBreadcrumb?: BreadcrumbData;
      GalleryBreadcrumb?: BreadcrumbData;
      PricingBreadcrumb?: BreadcrumbData;
      TestimonialsBreadcrumb?: BreadcrumbData;
      FAQBreadcrumb?: BreadcrumbData;
      AwardsBreadcrumb?: BreadcrumbData;
      [key: string]: BreadcrumbData | undefined;
    };
    Footer: TransworldFooterData;
  };
  categories: {
    Transworld: {
      templateComponents?: {
        Transworld?: {
          shared?: Record<string, string>;
          pages?: Record<string, { components: { key: string; component: string }[] }>;
        };
      };
      sections: {
        TopBar: { variants: Record<string, TopBarData> };
        Header: { variants: Record<string, HeaderData> };
        Hero: { variants: Record<string, TransworldHeroData> };
        AboutUs: { variants: Record<string, TransworldAboutData> };
        AboutPageContent: { variants: Record<string, TransworldAboutPageContentData> };
        WhyChooseUs: { variants: Record<string, TransworldWhyChooseUsData> };
        Mission: { variants: Record<string, TransworldMissionData> };
        Vision: { variants: Record<string, TransworldVisionData> };
        Process: { variants: Record<string, TransworldProcessData> };
        Team: { variants: Record<string, TransworldTeamData> };
        TeamDetail: { variants: Record<string, TransworldTeamDetailData> };
        Counter: { variants: Record<string, TransworldCounterData> };
        Testimonials: { variants: Record<string, TransworldTestimonialsData> };
        Blog: { variants: Record<string, TransworldBlogData> };
        BlogDetail: { variants: Record<string, TransworldBlogDetailData> };
        TrainingDetail: { variants: Record<string, TransworldTrainingDetailData> };
        Contact: { variants: Record<string, TransworldContactData> };
        ContactLocation: { variants: Record<string, TransworldContactLocationData> };
        Sitemap: { variants: Record<string, TransworldSitemapData> };
        PricingCards: { variants: Record<string, PricingCardsData> };
        PricingTable: { variants: Record<string, PricingTableData> };
        ConsultationTop: { variants: Record<string, ConsultationTopData> };
        ConsultationBottom: { variants: Record<string, ConsultationBottomData> };
        AwardsCounter: { variants: Record<string, TransworldAwardsCounterData> };
        AwardsMilestones: { variants: Record<string, TransworldAwardsMilestonesData> };
        AwardsCertifications: { variants: Record<string, TransworldAwardsCertificationsData> };
        AwardsCommitment: { variants: Record<string, TransworldAwardsCommitmentData> };
        ImageGallery: { variants: Record<string, TransworldImageGalleryData> };
        VideoGallery: { variants: Record<string, TransworldVideoGalleryData> };
        FAQ: { variants: Record<string, TransworldFAQData> };
        LegalContent: { variants: Record<string, TransworldLegalContentData> };
        NotFoundContent: { variants: Record<string, TransworldNotFoundData> };
        ThankYouContent: { variants: Record<string, TransworldThankYouData> };
        Partners: { variants: Record<string, TransworldPartnersData> };
        [key: string]: any;
      };
    };
  };
}
