import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  Baby,
  BookOpenText,
  BriefcaseBusiness,
  Compass,
  CreditCard,
  Database,
  FileSearch,
  Globe,
  Handshake,
  HeartHandshake,
  Leaf,
  MapPinned,
  Megaphone,
  MonitorSmartphone,
  Scale,
  Sparkles,
  Smartphone,
  Trees,
  Ticket,
  Users,
  WandSparkles,
} from "lucide-react";
import type { IconKey } from "@/lib/data";

const iconMap = {
  accessibility: Accessibility,
  baby: Baby,
  "book-open-text": BookOpenText,
  "briefcase-business": BriefcaseBusiness,
  compass: Compass,
  "credit-card": CreditCard,
  database: Database,
  "file-search": FileSearch,
  globe: Globe,
  handshake: Handshake,
  "heart-handshake": HeartHandshake,
  leaf: Leaf,
  "map-pinned": MapPinned,
  megaphone: Megaphone,
  "monitor-smartphone": MonitorSmartphone,
  scale: Scale,
  sparkles: Sparkles,
  smartphone: Smartphone,
  trees: Trees,
  ticket: Ticket,
  users: Users,
  "wand-sparkles": WandSparkles,
} satisfies Record<IconKey, LucideIcon>;

interface LucideGlyphProps {
  name: IconKey;
  className?: string;
  strokeWidth?: number;
  size?: number;
}

export default function LucideGlyph({
  name,
  className = "",
  strokeWidth = 1.8,
  size = 18,
}: LucideGlyphProps) {
  const Icon = iconMap[name];

  return <Icon aria-hidden="true" className={className} size={size} strokeWidth={strokeWidth} />;
}
