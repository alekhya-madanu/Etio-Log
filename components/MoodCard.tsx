import { Mood } from "../lib/model/MoodTypes";

export default function MoodCard(props: { mood: Mood }) {
    return (
        <div>
            <p>{`mood is ${props.mood.mood}, intensity is ${props.mood.intensity}`}</p>
        </div>
    )
}