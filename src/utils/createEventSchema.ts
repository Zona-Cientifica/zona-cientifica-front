import {z} from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpg", "image/jpeg", "image/png"];

export const zodSchema = z.object({
    title: z.string().trim().min(1, "Você deve informar um título!"),
    description: z.string().trim().min(1, "Você deve informar o conteúdo!"),
    picture: z.any()
            .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {message: "Tamanho máximo 5MB."})
            .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {message: "Arquivo não é JPEG, JPG ou PNG."}),
    theme: z.string().trim().min(1, "Você deve informar o tema do evento!")
})

export type ICreateEvent = z.infer<typeof zodSchema>; 