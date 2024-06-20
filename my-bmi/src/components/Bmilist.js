import Trlist from "./Trlist";


function Bmilist({ range, bmi }) {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>BMI</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>{Object.keys(range).map((rData, rKey) => (  
              <Trlist index={rKey+1} bmi={bmi}    data={range[rData]}  key={range[rData].id} />
            ))}
        </tbody>
      </table>
    </>
  )
}

export default Bmilist
