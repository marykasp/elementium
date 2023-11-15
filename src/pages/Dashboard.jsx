import Button from "../components/buttons/Button";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div>
        <Button variant="danger" icon>
          Delete
        </Button>
        <Button variant="light">
          <FaCloudDownloadAlt />
          Light Button
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
