import circleInfo from './circle-info.json';

export interface MemberCount {
  active: number;
  discord: number;
  lastUpdated: string;
}

export interface CircleInfo {
  memberCount: MemberCount;
  awardsCount: number;
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
