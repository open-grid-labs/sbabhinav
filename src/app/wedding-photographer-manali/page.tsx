import LocationPage, { locationMetadata } from "@/components/LocationPage";
import { getLocation } from "@/data/locations";

const location = getLocation("wedding-photographer-manali");

export const metadata = locationMetadata(location);

export default function ManaliPage() {
  return <LocationPage location={location} />;
}
