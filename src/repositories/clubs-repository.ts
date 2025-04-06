import {ClubModel} from "../models/club-model";

const database = [
    {
        id: 1,
        name: "Vasco"
    },
    {
        id: 2,
        name: "Fluminense"
    },
];

export const findAllClubs = async (): Promise<ClubModel[]> => {
    return database;
}