
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
	job: Job;
	handleClick: (request: Request) => void;
}


export default function Job({ job, handleClick }: Props) {
	const priority = job.new && job.featured
	return (

		<li key = {job.id} className={`job | shadow-regular radius-regular flow ${priority && "priority"}`} data-flow = "sm">
				<img className="company-logo" src = { job.logo } alt = {`${job.company}'s logo`}/>
				<div className="flow" data-flow = "sm">
			<div className="flex">
				<div className='companyName | text-primary fw-bold'>
					{ job.company }
				</div>
				{
					job.new && <span className='new | badge | text-white bg-primary'>New!</span>
				}
				{
					job.featured && <span className='featured | badge | text-white bg-neutral-200'>Featured!</span>
				}
			</div>
			<div className="flow" data-flow = "sm">
				<h2 className='position | fw-bold'>
					{ job.position }
				</h2>
				<div className="text-neutral-500 flex">
					<span className='postedAt'>
						{job.postedAt}
					</span> 
					<span className="text-neutral-500" style={{ transform: "translateY(-20%)", fontSize: "28px", }}>.</span>
					<span className='contract'>
						{ job.contract }
					</span>
					<span className="text-neutral-500" style={{ transform: "translateY(-20%)", fontSize: "28px", }}>.</span>
					<span className='location'>
						{ job.location }
					</span>
				</div>
			</div>
			</div>
			<hr />
			<div className='filters | cluster'>
				<button 
					className="bg-tab text-primary fw-bold radius-regular"
					onClick={() => handleClick({
						method: "PUT",
						property: "role",
						value: job.role
							})}>
					{ job.role }
				</button>
				<button
					className="bg-tab text-primary fw-bold radius-regular"
					onClick={() => handleClick({
						method: "PUT",
						property: "level",
						value: job.level
							})}>
					{ job.level }
				</button>
				{
					job.languages.map(language => <button
					className="bg-tab text-primary fw-bold radius-regular"
					onClick={() => handleClick({
						method: "PUT",
						property: "languages",
						value: language
							})}>
						{ language }
					</button>)
				}
				{
					job.tools.map(tool => <button
					className="bg-tab text-primary fw-bold radius-regular"
					onClick={() => handleClick({
						method: "PUT",
						property: "tools",
						value: tool
							})}>
						{ tool }
					</button>)
				}
			</div>
		</li>
	)
}
