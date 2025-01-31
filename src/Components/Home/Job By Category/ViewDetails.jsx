import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import './Job.css';
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const ViewDetails = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const job = useLoaderData();

    const { job_title, salary_range, job_description, job_applicants_number, job_banner_url, job_category, application_deadline, email } = job;

    // Convert application_deadline to Date object for comparison
    const deadlineDate = new Date(application_deadline);
    const currentDate = new Date();

    // Check if the current user is the employer or if the deadline has passed
    const isDeadlinePassed = currentDate > deadlineDate;
    const isEmployer = user.email === email;

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const applicantEmail = form.email.value;
        const applicantName = form.name.value;
        const resume = form.resume_link.value;

        const newAppliedJob = {
            email: applicantEmail,
            name: applicantName,
            resume,
            LoginEmail: user.email,
            LoginUserName: user.displayName,
            job_title,
            salary_range,
            job_category
        };
        console.log(newAppliedJob);

        // send data to the server
        fetch('https://assignment-11-server-five-puce.vercel.app/appliedJob', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAppliedJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate(location?.state ? location.state : '/AppliedJob');
                if (data.insertedId) {
                    Swal.fire({
                        title: "Item Added Successfully",
                        icon: "success"
                    });
                }
            });
    }

    return (
        <div>
            <div className="mt-16 mb-12 border-2 border-[#00e2bd] lg:w-[1250px] lg:h-[550px] lg:ml-[140px] rounded-xl">
                <div className="lg:flex md:flex gap-10 lg:pl-[50px]">
                    <div className="lg:mt-[36px] mt-[80px] ml-[80px] lg:ml-0 md:ml-0">
                        <img className="w-[200px] h-[150px] lg:w-[400px] lg:h-[350px] md:w-[390px] md:h-[350px] rounded-xl" src={job_banner_url} alt="" />
                    </div>
                    <div className="mt-[100px] ml-[20px] lg:ml-0 md:ml-0">
                        <p className="text-2xl font-semibold mb-5">{job_title}</p>
                        <p className="text-base font-medium mb-5">Description : {job_description}</p>
                        <p className="text-base font-medium mb-5">Category : {job_category}</p>
                        <p className="text-base font-medium mb-5">Deadline : {application_deadline}</p>
                        <p className="flex lg:gap-[380px] md:gap-[50px] gap-[20px]">
                            <span className="text-base font-semibold">Salary : {salary_range}</span>

                            {isDeadlinePassed ? (
                                <p className="text-red-500">Application deadline has passed.</p>
                            ) : isEmployer ? (  
                                <p className="text-red-500">You cannot apply to your own job.</p>
                            ) : (
                                <Link>
                                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className="button22">Apply Now</button>
                                </Link>
                            )}

                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <form onSubmit={handleSubmit}>
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Your Email</h3>
                                        <input className="input2" type="text" required placeholder="Your Email" name="email" defaultValue={user.email} />

                                        <h3 className="font-bold text-lg mt-5">Your Name</h3>
                                        <input className="input2" type="text" required placeholder="Your Name" name="name" defaultValue={user.displayName} />

                                        <input className="input2 hidden" type="text" required placeholder="Applied Job Title" name="job_title" defaultValue={job_title} />

                                        <input className="input2 hidden" type="text" required placeholder="Salary Range" name="salary_range" defaultValue={salary_range} />

                                        <input className="input2 hidden" type="text" required placeholder="Job Category" name="job_category" defaultValue={job_category} />

                                        <h3 className="font-bold text-lg mt-5">Submit Resume</h3>
                                        <input className="input2" type="text" required placeholder="Submit resume link" name="resume_link" />

                                        <div className="modal-action mr-[50px] mt-10">
                                            <input className="button22" type="submit" value="Submit" />
                                            <form method="dialog">
                                                <button className="button22">Close</button>
                                            </form>
                                        </div>
                                        <p className="h-[20px]"></p>
                                    </div>
                                </form>
                            </dialog>
                        </p>
                    </div>
                </div>
                <div className="rounded-b-xl h-[130px] pt-[50px] bg-[#00e2bd] mt-8">
                    <div className="flex gap-10 lg:pl-[443px] md:pl-[200px] text-center">
                        <p className="text-2xl font-bold">Total Applicants Number : {job_applicants_number}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
