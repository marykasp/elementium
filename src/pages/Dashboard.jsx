import { useState } from "react";
import Button from "../components/buttons/Button";
import Modal from "../components/modal/Modal";
import { FaTrashAlt } from "react-icons/fa";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div>
        <Button variant="danger" icon handleClick={() => setOpen(true)}>
          Delete
        </Button>
        {/* <Button variant="light">
          <FaCloudDownloadAlt />
          Light Button
        </Button> */}
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="w-56">
          <FaTrashAlt size={56} className="mx-auto text-red-500" />
          <div className="mx-auto my-4">
            <h3 className="text-center text-lg font-black text-gray-800">
              Confirm Delete
            </h3>
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this item?
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              variant="danger"
              icon
              handleClick={() => alert("Action confirmed!")}
            >
              Confirm
            </Button>
            <Button variant="light" handleClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
