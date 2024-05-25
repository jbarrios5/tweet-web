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
