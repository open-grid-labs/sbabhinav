import LocationPage, { locationMetadata } from "@/components/LocationPage";
import { getLocation } from "@/data/locations";

const location = getLocation("wedding-photographer-mandi");

export const metadata = locationMetadata(location);

export default function MandiPage() {
  return <LocationPage location={location} />;
}
