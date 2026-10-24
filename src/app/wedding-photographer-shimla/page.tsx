import LocationPage, { locationMetadata } from "@/components/LocationPage";
import { getLocation } from "@/data/locations";

const location = getLocation("wedding-photographer-shimla");

export const metadata = locationMetadata(location);

export default function ShimlaPage() {
  return <LocationPage location={location} />;
}
