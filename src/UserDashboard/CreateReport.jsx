import { Link } from "react-router-dom";

const CreateReport = () => {
   
  return (
    <div>
      <div className="bg-green-900 flex justify-evenly items-center ">
        <h1 className="text-3xl">Your Previous Reports</h1>
        <Link to="/issues">create New Issue!</Link>
      </div>
      {/* Form for creating a report */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Report number</th>
              <th>Category</th>
              <th>Description</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
              <td>Accepted</td>
            </tr>
          </tbody>
        </table>
      </>
    </div>
  );
};

export default CreateReport;
