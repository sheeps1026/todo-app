import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Todo from "./Todo";
import { Add } from "../redux/actions/action";
import { useDispatch } from "react-redux";

const Home = () => {
  const [data, setData] = useState("");
  console.log(data);

  const dispatch = useDispatch();

  const addData = () => {
    dispatch(Add(data));
    setData("");
  };

  return (
    <>
      <div className="container">
        <section className="mt-3 text-center">
          <h5>할 일을 입력하세요</h5>

          <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
            <input
              type="text"
              name="task"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="form-control"
            />
            <Button
              variant="contained"
              onClick={() => addData()}
              className="mx-2"
              style={{ background: "#ee5253" }}
            >
              <AddIcon />
            </Button>
          </div>

          <Todo />
        </section>
      </div>
    </>
  );
};

export default Home;
