import { Mission } from './mission.model';

export interface MissionList {
    Id?: string,
    ListName: string,
    Order: number,
    Missions: Mission[],
}