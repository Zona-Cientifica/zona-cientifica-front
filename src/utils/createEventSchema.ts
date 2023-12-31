import {z} from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpg", "image/jpeg", "image/png"];

export const zodSchema = z.object({
    title: z.string().trim().min(1, "Você deve informar um título!"),
    description: z.string().trim().min(1, "Você deve informar o conteúdo!"),
    theme: z.string().trim().min(1, "Você deve informar a categoria do evento!"),
    date: z.string().trim().min(1, "Você deve informar uma data!"),
    location: z.string().trim().min(1, "Você deve informar uma localização!"),
})

export type ICreateEvent = z.infer<typeof zodSchema>; 