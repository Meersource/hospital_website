export default function robots() {
  const base = 'https://www.cheemahospitalcomplex.com';
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}


