import { Form, Input, Slider, DatePicker, TimePicker, Button, InputNumber} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { NextPage } from "next";
import { useState } from "react";
import { supabase } from "../lib/initSupabase";

const AddQuestion : NextPage = () =>{
    const [metric, setMetric] = useState("");
    const [options, setOptions] = useState([""]);
    const [labels, setLabels] = useState([""]);
    const [low, setLow] = useState(null);
    const [high, setHigh] = useState(null);
    var customQ: Question = {
        metric: metric,
        options: options
    }

    if(low != null && high != null){
        customQ['intensityRange'] = [low, high]
    }
    if(labels.length != 0){
        customQ['intensityLabels'] = labels
    }

    function changeOption(index:number, value:string){
        if(index < options.length){
            const options2 = [...options]
            options2[index] = value
            setOptions(options2)
        }
    }
    function changeLabel(index:number, value:string){
        if(index < labels.length){
            const labels2 = [...labels]
            labels2[index] = value
            setLabels(labels2)
        }
    }

    const submitQuestion = async () => {
        const { data, error } = await supabase
        .from('Questions')
        .insert([
          customQ
        ])
      console.log(data);
      if (error) {
        console.error(error);
      }
    }

    return (
        <div>
          <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal">
            <Form.Item label="Metric" name="metric">
              <Input onChange={(event) => setMetric(event.target.value)}/>
            </Form.Item>

            <Form.Item label="Options" name="options">
                {options.map((option,i) => 
                <Input key={i} onChange={(event) => changeOption(i,event.target.value)}/>)
                }
              <Button onClick={() => setOptions([...options,""])} icon={<PlusOutlined />}></Button>
            </Form.Item>

            <Form.Item label="IntensityLow" name="intensityLow">
                <InputNumber size="small" defaultValue={1} onChange={(event) => setLow(event) } />
            </Form.Item>

            <Form.Item label="IntensityHigh" name="intensityHigh">
            <InputNumber size="small" defaultValue={10} onChange={(event) => setHigh(event) } />
            </Form.Item>

            <Form.Item label="IntensityLabels" name="intensityLabels">
            {labels.map((label,i) => 
                <Input key={i} onChange={(event) => changeLabel(i,event.target.value)}/>)
                }
              <Button onClick={() => setLabels([...labels,""])} icon={<PlusOutlined />}></Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={submitQuestion}>Submit</Button>
            </Form.Item>
          </Form>
        </div>
        );
}

export default AddQuestion;