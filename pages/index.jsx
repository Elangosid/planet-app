import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [hideForm, setHideForm] = useState(false);
  const [hideDetails, setHideDetails] = useState(false);
  const [data, setData] = useState([]);
  const [obj, setObj] = useState({});

  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then((response) => response.json())
      .then((response) => {
        setData(response?.results);
      });
  }, []);

  function handleDelete(i) {
    let temp = data.filter((item, index) => index !== i);
    setData(temp);
  }

  const onSubmit = (formValues) => {
    setData([...data, formValues]);
    setHideForm(false)
  };

  return (
    <div className={"container"}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        />
      </Head>

      <div className="container my-4">
        <div className="d-flex justify-content-between my-4">
          <h3>Planet</h3>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => setHideForm(true)}
          >
            Add
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Rotation Period</th>
              <th scope="col">Orbital Period</th>
              <th scope="col">Diameter</th>
              <th scope="col">Climate</th>
              <th scope="col">Action 1</th>
              <th scope="col">Action 2</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={8}>No Data Found</td>
              </tr>
            ) : (
              ""
            )}
            {data?.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e?.name}</td>
                  <td>{e?.rotation_period}</td>
                  <td>{e?.orbital_period}</td>
                  <td>{e?.diameter}</td>
                  <td>{e?.climate}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setHideDetails(true), setObj(e);
                      }}
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        setHideDetails(false), handleDelete(i);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {hideForm ? (
          <div className="shadow-lg px-5 py-2 mb-5 bg-white rounded">
            <form onSubmit={handleSubmit(onSubmit)} className="my-4">
              <div className="row">
                <div className="col-6 mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("name", { required: true })}
                  />
                  <p className="errMsg">
                    {errors.name?.type === "required" && "Name is required"}
                  </p>
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Rotation Period
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("rotation_period", { required: true })}
                  />
                  <p className="errMsg">
                    {errors.rotation_period?.type === "required" &&
                      "Rotation Period is required"}
                  </p>
                </div>

                <div className="col-6 mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Orbital Period
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("orbital_period", { required: true })}
                  />
                  <p className="errMsg">
                    {errors.orbital_period?.type === "required" &&
                      "Orbital Period is required"}
                  </p>
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Diameter
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("diameter", { required: true })}
                  />
                  <p className="errMsg">
                    {errors.diameter?.type === "required" &&
                      "Diameter is required"}
                  </p>
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Climate
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("climate", { required: true })}
                  />
                  <p className="errMsg">
                    {errors.climate?.type === "required" &&
                      "Climate is required"}
                  </p>
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Gravity
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("gravity", { required: true })}
                  />
                  <p className="errMsg">
                    {errors.gravity?.type === "required" &&
                      "Gravity is required"}
                  </p>
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Surface Water
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("surface_water", { required: true })}
                  />
                  <p className="errMsg">
                    {errors.surface_water?.type === "required" &&
                      "Surface Water is required"}
                  </p>
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Population
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("population", { required: true })}
                  />
                  <p className="errMsg">
                    {errors.population?.type === "required" &&
                      "Population is required"}
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-success mt-2"
                  // onClick={() => setHideForm(false)}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
        {hideDetails ? (
          <div className="shadow px-5 py-4 mb-5 bg-white rounded">
            <div className="row">
              <div className="col-4 d-flex">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Name :
                </label>
                <p className="mx-2">{obj?.name}</p>
              </div>
              <div className="col-4 d-flex">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Orbital Period :
                </label>
                <p className="mx-2">{obj?.orbital_period}</p>
              </div>
              <div className="col-4 d-flex">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Climate :
                </label>
                <p className="mx-2">{obj?.climate}</p>
              </div>
              <div className="col-4 d-flex">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Surface water :
                </label>
                <p className="mx-2">{obj?.surface_water}</p>
              </div>
              <div className="col-4 d-flex">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Rotation Period :
                </label>
                <p className="mx-2">{obj?.rotation_period}</p>
              </div>
              <div className="col-4 d-flex">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Diometer :
                </label>
                <p className="mx-2">{obj?.diameter}</p>
              </div>
              <div className="col-4 d-flex">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Gravity :
                </label>
                <p className="mx-2">{obj?.gravity}</p>
              </div>
              <div className="col-4 d-flex">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Population :
                </label>
                <p className="mx-2">{obj?.population}</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
