import Child from "./Child"
const Parent = () => {
  return (
    <div style={{textAlign:"center"}}>
    <Child  name="Amir" gender="male" salary={50}/>
    <Child  name="zainab" gender="female" weight={50}/>
    </div>
  )
}

export default Parent