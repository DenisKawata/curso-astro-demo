import { type Doc, type APISpaceXResponse } from "../types/api"

export const getLaunchBy = async ({id}:{id:string}) => {
        const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)

    const launche = (await res.json()) as Doc
    return launche
}
