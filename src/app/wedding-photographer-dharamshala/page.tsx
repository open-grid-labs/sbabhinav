import LocationPage, { locationMetadata } from "@/components/LocationPage";
import { getLocation } from "@/data/locations";

const location = getLocation("wedding-photographer-dharamshala");

export const metadata = locationMetadata(location);

export default function DharamshalaPage() {
  return <LocationPage location={location} />;
}
