import {atom} from "recoil"

export const profileAtom = atom({
    key: "profileAtom",
    default:{
        credits:5,
        uid:""
    } as Profile
})