
import Job from './Job';

interface Job {
	id: number;
	new: boolean;
	featured: boolean;
	logo: string;
	role: string;
	level: string;
	tools: string[];
	languages: string[];
	company: string;
	location: string;
	postedAt: string;
	position: string;
	contract: string;
}

interface Request {
	method: "PUT" | "DELETE" | "CLEAR";
	property: string;
	value: string;
}

interface Props {
	jobs: Job[];
	handleClick: (request: Request) => void;
}

export default function JobListings({ jobs, handleClick }: Props) {
	return (
		<ul className='jobListings | flow'>
		{
			jobs.map(job => (
				<Job 
					key={job.id}
					job={job}
					handleClick={handleClick}
				/>
			))
		}
		</ul>
	)
}
