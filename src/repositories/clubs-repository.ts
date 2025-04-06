import fs from "fs/promises";
import {ClubModel} from "../models/club-model";

export const findAllClubs = async (): Promise<ClubModel[]> => {
    const data = await fs.readFile("./src/data/clubs.json", "utf8");
    const clubs: ClubModel[] = JSON.parse(data);
    return clubs;
}