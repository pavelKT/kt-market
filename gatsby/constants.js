import { resolve } from 'path';

const TEMPLATES_PATH = 'src/templates';
const TEMPLATES_PATH_CALCULATOR = resolve(TEMPLATES_PATH, 'TemplateCalculator.js');
const TEMPLATES_PATH_FAQ = resolve(TEMPLATES_PATH, 'TemplateFAQ.js');
const TEMPLATES_PATH_GUIDE = resolve(TEMPLATES_PATH, 'TemplateGuide.js');
const TEMPLATES_PATH_HUB = resolve(TEMPLATES_PATH, 'TemplateHub.js');
const TEMPLATES_PATH_PRODUCT = resolve(TEMPLATES_PATH, 'TemplateProduct.js');
const TEMPLATES_PATH_PREVIEW = resolve(TEMPLATES_PATH, 'TemplatePreview.js');

export const PUBLIC_FOLDER = 'public';
export const STATIC_FILES_PATH = '/static-assets';
export const STATIC_FILES_REGEX = /(.js$|.css|page-data|static$)/g;

export default {
  CALCULATOR: TEMPLATES_PATH_CALCULATOR,
  FAQ: TEMPLATES_PATH_FAQ,
  GUIDE: TEMPLATES_PATH_GUIDE,
  HUB: TEMPLATES_PATH_HUB,
  PRODUCT: TEMPLATES_PATH_PRODUCT,
  PREVIEW: TEMPLATES_PATH_PREVIEW,
  STATIC_FILES_REGEX
};
