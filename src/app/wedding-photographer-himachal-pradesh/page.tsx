import LocationPage, { locationMetadata } from "@/components/LocationPage";
import { getLocation } from "@/data/locations";

const location = getLocation("wedding-photographer-himachal-pradesh");

export const metadata = locationMetadata(location);

export default function HimachalPradeshPage() {
  return <LocationPage location={location} />;
}
