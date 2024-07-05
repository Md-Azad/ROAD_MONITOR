import { useNavigate } from "react-router-dom";

const Feedback = () => {
    const navigate = useNavigate();
    const handleFeedback = (event) =>{
        event.preventDefault();
        const feedback = event.target.feedback.value;
        fetch("http://localhost:8004/api/admin", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(feedback),
          })
            .then((res) => res.json())
            .then((data) => {
                if(data){
                    
                    alert("Your Feedback has been successfully Received!");
                    navigate("/userhome");
                }
            });
        
    }
  return (
    <div>
    <h1>Every Feedback Is Important</h1>
    {/* Feedback form */}
    <form onSubmit={handleFeedback}>
      <textarea
        name="feedback"
        className="textarea textarea-primary"
        placeholder="Feedback"
      ></textarea>
      <button type="submit" className="btn btn-outline btn-secondary">
        Submit
      </button>
    </form>
  </div>
  );
};

export default Feedback;