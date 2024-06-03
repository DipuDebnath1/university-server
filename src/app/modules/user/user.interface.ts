export type TUser = {
    id:string,
    password:string,
    needsPasswordChange:boolean,
    isDeleted:boolean,
    role:'admin'|'faculty'|'student',
    status:'in-progress'|'blocked',
}
