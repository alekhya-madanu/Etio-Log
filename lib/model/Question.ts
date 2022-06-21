import { supabase } from "../../lib/initSupabase";

export type Question = {
    id?: string,
    metric: string,
    options: Option[],
    // intensityRange?: [number, number],
    // intensityLabels?: Array<string>
}

export type Option = {
    label: string,
    id: string,
    intensity: number
    index?: number,
}

export async function saveQuestion(question: Question) {
    return await supabase.from("Questions").insert([question])
}

export async function getQuestions(): Promise<Question[]> {
    let {data, error} = await supabase.from('Questions') .select('*')
    if (error) { throw error; }
    return data as Question[];
}

export async function deleteQuestion(id: string) {
    return await supabase.from("Questions").delete().eq('id', id)
}