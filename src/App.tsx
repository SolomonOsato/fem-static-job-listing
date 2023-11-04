import { useEffect, useState } from "react";
import { Jobs } from "./assets/data";
import "./App.scss";
import Job from "./components/Job";
import JobListings from "./components/JobListings";
import FilterSection from "./components/FilterSection";
import Header from "./components/Header";

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

interface Chip {
  property: string;
  value: string;
}

interface Request {
  method: "PUT" | "DELETE" | "CLEAR";
  property: string;
  value: string;
}

export default function App() {
  const emptyChipStore: Chip[] = [];
  const emptyJobs: Job[] = Jobs;
  const [jobs, setJobs] = useState(emptyJobs);
  const [chipStore, setChipStore] = useState(emptyChipStore);
  useEffect(() => {
    filterJobs([...chipStore]);
  }, [chipStore]);

  function addChip(request: Request): void {
    const store = [...chipStore];
    const newStore = store.filter((st) => st.value !== request.value);
    setChipStore([
      ...newStore,
      {
        property: request.property,
        value: request.value,
      },
    ]);
  }

  function delChip(request: Request): void {
    const store = [...chipStore];
    const newStore = store.filter((st) => st.value !== request.value);
    setChipStore(newStore);
  }

  function filterJobs(chipStore: Chip[]): void {
    let newJobs = [...Jobs];

    for (const chip of chipStore) {
      switch (chip.property) {
        case "role":
          newJobs = newJobs.filter((job) => {
            return job.role === chip.value;
          });
          break;
        case "level":
          newJobs = newJobs.filter((job) => {
            return job.level === chip.value;
          });
          break;
        case "languages":
          newJobs = newJobs.filter((job) => {
            return job.languages.indexOf(chip.value) !== -1;
          });
          break;
        case "tools":
          newJobs = newJobs.filter((job) => {
            return job.tools.indexOf(chip.value) !== -1;
          });
          break;
        default:
          setJobs(newJobs);
      }
    }
    setJobs(newJobs);
  }

  function handleClick(request: Request): void {
    switch (request.method) {
      case "PUT":
        addChip(request);
        break;
      case "DELETE":
        delChip(request);
        break;
      case "CLEAR":
        setChipStore(emptyChipStore);
        break;
      default:
        setChipStore(emptyChipStore);
    }
  }

  jobs.forEach((job) => {
    const logoNameArray = job.logo.split("/");
    const logoName = logoNameArray[logoNameArray.length - 1];
    const logo = `/${logoName}`;
    job.logo = logo;
	alert(job.logo)
  });

  return (
    <>
      <div className="bg-page">
        <Header />
        <div className="container">
          <main>
            <FilterSection chipStore={chipStore} handleClick={handleClick} />
            <JobListings jobs={jobs} handleClick={handleClick} />
          </main>
        </div>
      </div>
    </>
  );
}
