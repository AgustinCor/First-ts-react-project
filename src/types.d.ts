export interface Sub{
    nick:string
    avatar:string
    months:number
    description?:string
  }

  export type SubsResponseFromApi = Array<{
    nick:string
    months:number
    profileUrl:string
    description:string
  }>