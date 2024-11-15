import { LANGAGE_VERSIONS } from '@/configs/ideConfig'
import {Select} from 'antd'


const langages = Object.entries(LANGAGE_VERSIONS)
export default function LangageSelect({ langage, onSelect }: { langage: string, onSelect: (lang: string) => void }){
    return (
        
        <Select showSearch
            placeholder="Select a language" 
            style={{ width: "max-content"}}
            options={
                langages.map(([langages, version]) => (
                    ({value: `${langages}`, label: `${langages}`}))
                )
            }
            onSelect={(e) => onSelect(e)}
        />
    )
}