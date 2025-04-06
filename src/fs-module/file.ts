import { writeFile } from "fs/promises";

const exec = async () => {
    const dogs = ["Jolie", "Moana", "Maui"];
    const dogsTxt = dogs.join(", ");

    await writeFile("./src/fs-module/teste.txt", dogsTxt);
}

exec();