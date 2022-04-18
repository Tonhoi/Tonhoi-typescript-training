type student = ({id, name}: {id: number, name: string}) => void


const studentA: Parameters<student>[0] = {
    id:1,
    name:"Hội"
}
