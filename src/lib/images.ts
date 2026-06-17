import heroAsset from "../assets/images/hero-construction.png.asset.json";
import abstractAsset from "../assets/images/abstract-industrial.png.asset.json";
import sectorTenantAsset from "../assets/images/sector-tenant.png.asset.json";
import sectorWarehouseAsset from "../assets/images/sector-warehouse.png.asset.json";
import serviceCeilingsAsset from "../assets/images/service-ceilings.png.asset.json";
import serviceDrywallAsset from "../assets/images/service-drywall.png.asset.json";
import serviceFramingAsset from "../assets/images/service-framing.png.asset.json";
import faviconAsset from "../assets/site/favicon.svg.asset.json";
import favicon192Asset from "../assets/site/favicon-192.svg.asset.json";
import favicon512Asset from "../assets/site/favicon-512.svg.asset.json";
import ogAsset from "../assets/site/opengraph.jpg.asset.json";

export const IMG = {
  hero: heroAsset.url,
  abstract: abstractAsset.url,
  sectorTenant: sectorTenantAsset.url,
  sectorWarehouse: sectorWarehouseAsset.url,
  serviceCeilings: serviceCeilingsAsset.url,
  serviceDrywall: serviceDrywallAsset.url,
  serviceFraming: serviceFramingAsset.url,
  favicon: faviconAsset.url,
  favicon192: favicon192Asset.url,
  favicon512: favicon512Asset.url,
  og: ogAsset.url,
} as const;
