import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const Header = () => {
  const [showForm, setShowForm] = useState(true);
  const [showNew, setShowNew] = useState(true);
  const [showDelete, setShowDelete] = useState(true);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);
  const [showList, setShowList] = useState(true);
  const [editMessage, setEditMessage] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [deleteMessageSuccess, setDeleteMessageSuccess] = useState(false);
  const [inputId, setInputId] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [items, setItems] = useState([
    {
      id: "001",
      userId: "001",
      title: "Default Task",
      desc: "Default Description",
      status: false,
    },
  ]);

  const handleInput = (e) => {
    setInputTitle(e.target.value);
  };

  const handleInputDesc = (e) => {
    setInputDesc(e.target.value);
  };

  console.log(showForm,showNew,showDelete,editMessage,deleteMessageSuccess,setEditMessage)

  //   SUBMITTING FORM
  const handleSubmit = (e) => {
    setShowList(true);
    setShowNew(true);

    e.preventDefault();
    if (!inputTitle || !inputDesc) {
      alert("fill data");
      showList(false);
    } else if (inputTitle && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return {
              ...elem,
              id: inputId,
              title: inputTitle,
              desc: inputDesc,
            };
          }
          return elem;
        })
      );

      setInputId("");
      setInputTitle("");
      setInputDesc("");
      setToggleSubmit(true);
      setShowForm(false);
      setShowDelete(true);
    } else {
      const allInputTitle = {
        id: new Date().getMilliseconds().toString(),
        title: inputTitle,
        desc: inputDesc,
      };
      setItems([allInputTitle, ...items]);
      setInputTitle("");
      setInputDesc("");
      setShowForm(false);
    }
  };
  //   SUBMITTING FORM

  //   DELETE
  const handleDelete = (index) => {
    console.log(index);
    const updatedItems = items.filter((elem) => {
      return index !== elem.id;
    });
    setDeleteMessage(true);

    setTimeout(() => {
      setItems(updatedItems);
      setDeleteMessage(false);
    }, 2000);
    setDeleteMessageSuccess(false);
  };
  //   DELETE

  //   EDIT
  const handleEdit = (id) => {
    setShowList(true);
    setShowDelete(false);
    setShowNew(true);
    setShowForm(true);

    setToggleSubmit(false);
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    setInputTitle(newEditItem.title);
    setInputDesc(newEditItem.desc);
    // setshowDelete(true)

    setIsEditItem(id);
    console.log(newEditItem);
  };
  //   EDIT

  // ADD NEW TASK
  const handleAdd = () => {
    //   alert("hello")
    setShowForm(true);
    setShowList(true);
    setShowNew(false);
  };
  // ADD NEW TASK
  return (
    <>
      <div className="container mt-5">
        <div className="col-12 text-end">
          <button
            className="btn btn-info fw-bold text-white mb-4"
            onClick={handleAdd}
          >
            Add New Task
          </button>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="container border rounded d-flex justify-content-center  p-3 mb-5 bg-info rounded">
              <div className="row">
                <div className="text-center">
                  <h2 className="text-white fw-bolder display-6">
                    {toggleSubmit ? "Add Task" : " Edit Task"}
                  </h2>
                </div>

                <form className="col-12 p-2" onSubmit={handleSubmit}>
                  <label htmlFor="title" className="my-2">
                    Enter Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="title"
                    className="w-100 my-1 p-2"
                    onChange={handleInput}
                    value={inputTitle}
                  />
                  <label className="my-2" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    cols="3"
                    rows="3"
                    name="description"
                    id="description"
                    placeholder="Description"
                    className="form-control w-100 my-1 p-2"
                    onChange={handleInputDesc}
                    value={inputDesc}
                  ></textarea>

                  {/* <div className="text-center"> */}
                  {toggleSubmit ? (
                    <div className="text-center">
                      <button className="btn btn-success my-2 w-75 fw-bold">
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <button className="btn btn-primary my-2 w-75 fw-bold">
                        Update
                      </button>
                    </div>
                  )}
                  {/* </div> */}
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-12">
            {showList ? (
              <div className="container py-2 ">
                {deleteMessage ? (
                  <p className="text-center text-danger">
                    Item Deleted Successfully
                  </p>
                ) : (
                  ""
                )}
                <div className="table-responsive">
                  <table class="table table-bordered">
                    <thead className="table-dark">
                      <tr className="bg-info">
                        <th scope="col">User Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>

                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((elem, index) => {
                        return (
                          <tr>
                            <th scope="row" key={elem.id}>
                              {elem.id}
                            </th>

                            <th scope="row">{elem.title}</th>
                            <th scope="row">{elem.desc}</th>

                            <th scope="row">
                              <button
                                className="btn btn-primary mx-2 btn-sm"
                                onClick={() => handleEdit(elem.id)}
                              >
                                <FaEdit />
                              </button>
                              <button
                                className="btn btn-danger mx-2 btn-sm"
                                onClick={() => handleDelete(elem.id)}
                              >
                                <FaTrash />
                              </button>
                            </th>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
