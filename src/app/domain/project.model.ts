export interface Project {
    Id?: string;
    Name: string;
    Desc: string;
    BeginDate: Date;
    EndDate: Date;
    CoverImage: string;
    OwnerId: string;
    OwnerFirstName: string;
    OwnerLastName: string;
    State: number;
    ScoreTot: number;
    MissionLists?: string[];
    MemberIds?: string[];
}