export interface TweetGetResData {
    data: TweetGetRes []
}

export interface TweetGetRes {
    content:string;
    created:string;
}

export interface TweetPostReqData {
    data:TweetPostReq
}

export interface TweetPostReq{
    content:string;
}

export interface TweetPostResData {
    data:TweetPostRes
}

export interface TweetPostRes{
    message:string;
}