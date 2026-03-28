import circleInfo from './circle-info.json';
import socialLinksData from './social-links.json';

export interface MemberCount {
  active: number;
  discord: number;
  lastUpdated: string;
}

export interface CircleInfo {
  memberCount: MemberCount;
  awardsCount: number;
}

export interface SocialLink {
  id: 'twitter' | 'marshmallow' | string;
  platform: string;
  title: string;
  description: string;
  handle: string;
  url: string;
  cta: string;
  primary?: boolean;
}

interface SocialLinksData {
  socialLinks: SocialLink[];
}

export function getCircleInfo(): CircleInfo {
  return circleInfo as CircleInfo;
}

export function getMemberCount(): MemberCount {
  return circleInfo.memberCount;
}

export function getAwardsCount(): number {
  return circleInfo.awardsCount;
}

export function getSocialLinks(): SocialLink[] {
  return (socialLinksData as SocialLinksData).socialLinks;
}
