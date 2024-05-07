

function Bmiscore({ bmiNo, bmiName, wtpe }) {

  return (
    <div className="bg-secondary   p-5">
      bmi score {bmiNo} <br />
      bmi Type {bmiName}
      bmi status {wtpe.type} <br />
      bmi msg {wtpe.msg} <br />
    </div>
  )
}

export default Bmiscore
