import { _siteDetails } from "@/lib/config";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteList = [
    {
      url: _siteDetails.domain,
      changefreq: "daily",
      priority: 1.0,
    },
  ];

  _siteDetails.menuLinks.forEach((item) => {
    siteList.push({
      url: `${_siteDetails.domain}${item.link}`,
      changefreq: "daily",
      priority: 0.8,
    });
  });

  return siteList;
}