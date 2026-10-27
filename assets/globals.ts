const urls = {
  CONTACT: 'contact',
  EDUCATION: 'education',
  HOME: '',
  PROJECTS: 'projects',
  CAREER: 'career',
};

/** Ids of the sections of the (single) page, used by the navbar links. */
const sections = {
  HOME: 'home',
  CAREER: 'career',
  EDUCATION: 'education',
};

const externalUrls = {
  LINKEDIN: 'https://www.linkedin.com/in/joao-f-oliveira/',
  GITHUB: 'https://github.com/joaooliveira97',
};

/** The CV PDF in a language (en, pt). */
const cvUrl = (language: string) => `/assets/cv/joao_oliveira_cv_${language}.pdf`;

export const GLOBALS = {
  URLS: urls,
  SECTIONS: sections,
  EXTERNAL_URLS: externalUrls,
  cvUrl,
};
