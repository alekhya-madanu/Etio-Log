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