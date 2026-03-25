import CosmicBadge from '@/components/CosmicBadge';

export default function CosmicBadgeWrapper({
  bucketSlug,
}: {
  bucketSlug: string;
}) {
  return <CosmicBadge bucketSlug={bucketSlug} />;
}