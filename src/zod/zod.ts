import z from 'zod';

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(120),
});

let data = {
    name: "Deborah",
    email: "malheirodev@gmail.com",
    age: 27
};

const result = schema.safeParse(data);

if (result.success) {
    console.log("Success");
    console.log(result.data);
} else {
    console.log("Error")
}