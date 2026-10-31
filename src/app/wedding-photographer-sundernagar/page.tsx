import LocationPage, { locationMetadata } from "@/components/LocationPage";
import { getLocation } from "@/data/locations";

const location = getLocation("wedding-photographer-sundernagar");

export const metadata = locationMetadata(location);

export default function SundernagarPage() {
  return <LocationPage location={location} />;
}