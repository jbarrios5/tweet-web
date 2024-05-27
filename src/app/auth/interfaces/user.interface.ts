export interface UserPostReqData{
    data: UserPostReq
}
export interface UserPostReq{
    fullName:string;
    password:string
    userName:string;
    email:string;

}

export interface UserPostRes{
    message:string;
    isUserInserted:boolean
}
export interface UserPostResData{
    data:UserPostRes;
}
///
export interface UserGetResData{
    data: UserGetRes[]
}
export interface UserGetRes{
    id:number;
    fullName:string;
    userName:string;
    email:string;
    followers:number;
    followed:number
}

export interface UserFollowGetResData{
    data: UserFollowGetRes
}
export interface UserFollowGetRes{
    followers:UserFollowDTO [];
    followed:UserFollowedDTO[];
}
export interface UserFollowDTO{
    fullName:string;
    id:number;
    userName:string;
    email:string;
    isFollowed:boolean;

}
export interface UserFollowedDTO{
    fullName:string;
    id:number;
    userName:string;
    email:string;
}