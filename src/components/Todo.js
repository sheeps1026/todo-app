import React, { useContext, useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Remove, Update_data } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { DeleteContext } from "./context/ContextProvider";

const Todo = () => {
  const { User_data } = useSelector((state) => state.todoreducers);
  // console.log(User_data);

  const { dlttask, setDlttask } = useContext(DeleteContext);

  const dispatch = useDispatch();

  // show modal state
  const [showeye, setShoweye] = useState(false);

  // setvalue state
  const [showeyevalue, setShoweyeValue] = useState("");

  const [show, setShow] = useState(false);

  const [update, setUpdate] = useState("");

  const [ind, setInd] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (v) => {
    setShow(true);
    setUpdate(v);
  };

  // dlt function
  const remove = (id) => {
    dispatch(Remove(id));
    setDlttask(true);
  };

  // update function
  const usertask_update = () => {
    dispatch(Update_data(update, ind));
    handleClose();
  };

  return (
    <>
      <div className="todo_data col-lg-5 mx-auto mt-2">
        {User_data.map((v, i) => {
          return (
            <>
              <div
                key={i}
                className="todo_container mb-2 d-flex justify-content-between align-items-center px-2"
                style={{
                  background: "#dcdde1",
                  borderRadius: "3px",
                  height: "45px",
                }}
              >
                <li style={{ listStyle: "none" }}>{v}</li>
                <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">
                  <ModeEditIcon
                    onClick={() => {
                      handleShow(v);
                      setInd(i);
                    }}
                    style={{ color: "#3c40c6", cursor: "pointer" }}
                  />
                  <DeleteIcon
                    onClick={() => remove(i)}
                    style={{ color: "red", cursor: "pointer" }}
                  />
                  <RemoveRedEyeIcon
                    onClick={() => {
                      setShoweye(true);
                      setShoweyeValue(v);
                    }}
                    style={{ color: "#1dd1a1", cursor: "pointer" }}
                  />
                </div>
              </div>
            </>
          );
        })}

        {/* read modal */}
        <Modal show={showeye}>
          <h1 className="text-center">{showeyevalue}</h1>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShoweye(false)}>
              닫기
            </Button>
          </Modal.Footer>
        </Modal>

        {/* update modal */}
        <Modal show={show} onHide={handleClose}>
          <h3 className="text-center mt-2">할 일을 수정하세요</h3>
          <Modal.Header>
            <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
              <input
                type="text"
                name="task"
                value={update}
                onChange={(e) => setUpdate(e.target.value)}
                className="form-control col-lg-5 mt-2"
              />
            </div>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              닫기
            </Button>
            <Button variant="primary" onClick={() => usertask_update()}>
              수정
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Todo;
