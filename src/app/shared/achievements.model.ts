export interface Tier {
  count: number;
  points: number;
}

export interface Achievement {
  id: number;
  name: string;
  description: string;
  requirement: string;
  locked_text: string;
  type: string;
  flags: any[];
  tiers: Tier[];
}

export interface Category {
  id: number;
  name: string;
  description: string;
  order: number;
  icon: string;
  achievements: number[];
}

export interface Account {
  id: string;
  name: string;
  world: number;
  guilds: string[];
  created: Date;
  access: string;
  commander: boolean;
  fractal_level: number;
  daily_ap: number;
  monthly_ap: number;
  wvw_rank: number;
}

export interface AccountAchievement {
  id: number;
  current: number;
  max: number;
  done: boolean;
  bits: number[];
  unlocked?: boolean;
  repeated?: number;
}
