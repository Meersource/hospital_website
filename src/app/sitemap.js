import { services } from '../data/services';

export default async function sitemap() {
  const base = 'https://www.cheemahospitalcomplex.com';

  const staticRoutes = ['', '/about', '/contact', '/appointment', '/services'].map((path) => ({
    url: `${base}${path || '/'}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1.0 : 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes];
}


