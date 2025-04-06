import z from 'zod';

const schema = z.object({
    name: z.literal("Debs"),
    email: z.string().email(),
    age: z.number().min(18).max(120).optional(),
    status: z.boolean(),
    skills: z.array(
        z.object({
            name: z.string(),
            value: z.number(),
        })
    )
});

type User = z.infer<typeof schema>;

let data: User = {
    name: "Debs",
    email: "malheirodev@gmail.com",
    age: 27,
    status: true,
    skills: [
        {
            name: "nodejs",
            value: 5
        },
        {
            name: "react",
            value: 8
        }
    ]
};

const result = schema.parse(data);
console.log(result);

