import LocationPage, { locationMetadata } from "@/components/LocationPage";
import { getLocation } from "@/data/locations";

const location = getLocation("pre-wedding-shoot-shimla");

export const metadata = locationMetadata(location);

export default function PreWeddingShimlaPage() {
  return <LocationPage location={location} />;
}
