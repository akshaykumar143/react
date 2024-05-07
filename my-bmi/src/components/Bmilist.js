
function Bmilist({ range, bmi }) {
  console.log(range);
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
        <tbody>
          <tr className={bmi <= 18 ? "table-warning" : ''}>
            <td>1</td>
            <td>under weight</td>
            <td>18</td>
            <td>{range.underweight.low}</td>
          </tr>
          <tr className={((bmi <=28) && (bmi > 18)) ? "table-warning" : ''}>
            <td>2</td>
            <td>normal</td>
            <td>18.1 - 27.9</td>
            <td>{range.normal.low + " - " + range.normal.high}</td>
          </tr>
          <tr className={((bmi <=30) && (bmi > 28)) ? "table-warning" : ''}>
            <td>3</td>
            <td>overweight</td>
            <td>28 -30</td>
            <td>{range.overweight.low + " - " + range.overweight.high}</td>
          </tr>
          <tr className={ bmi > 30 ? "table-warning" : ''}>
            <td>4</td>
            <td>obesity One</td>
            <td>30 </td>
            <td>{range.obesityOne.low + " - " + range.obesityOne.high}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Bmilist
