import { supabase } from "../../lib/initSupabase";

export type Question = {
    metric: string,
    options: Option[],
    intensityRange?: [number, number],
    intensityLabels?: Array<string>
}

export type Option = {
    label: string,
    id: string,
    index: number
}

export async function saveQuestion(question: Question) {
    return await supabase.from("Questions").insert([question])
}