import { Mood } from "../lib/model/MoodTypes";

export default function MoodCard(props: { mood: Mood }) {
    return (
        <div>
            <Card style={{ width: 300 }}>
                <p>{`mood is ${props.mood.mood}, intensity is ${props.mood.intensity}`}</p>
            </Card>
        </div>
    )
}