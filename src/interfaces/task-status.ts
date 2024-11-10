export interface ITaskStatus {
    todo: string;
    inprogress: string;
    complete: string;
}

export interface ITasks{
    id: string,
    task: string;
    status:string
  }
  
 export interface IInitialState{
   tasks: [] | ITasks[]
  }
  