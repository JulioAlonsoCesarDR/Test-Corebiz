import { TextField } from "@mui/material";
import { useState } from "react";

const Newsletter = () => {
  const [dataForm, setDataForm] = useState({
    name: {
      value: "",
      error: false,
    },

    email: {
      value: "",
      error: false,
    },
  });

  const handleChange = (id, value) => {
    setDataForm((dataForm) => ({
      ...dataForm,
      [id]: {
        ...dataForm.email,
        ...dataForm.name,
        value,
        error: false,
      },
    }));
  };

  const handleValidate = () => {
    if (dataForm.name.value === "") {
      setDataForm((dataForm) => ({
        ...dataForm,
        name: {
          ...dataForm.name,
          error: true,
        },
      }));
    }
    if (dataForm.email.value === "") {
      setDataForm((dataForm) => ({
        ...dataForm,
        email: {
          ...dataForm.email,
          error: true,
        },
      }));
    }
  };

  var raw = `{"email": "${dataForm.email.value}","name": "${dataForm.name.value}"}`;

  var requestOptions = {
    method: "POST",
    body: raw,
    redirect: "follow",
  };

  const handleSubmit = async () => {
    await handleValidate();

    if (!dataForm.name.value === "" && !dataForm.email.value === "") {
      fetch(
        "https://corebiz-test.herokuapp.com/api/v1/newsletter",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
    resetForm();
  };

  const resetForm = () => {
    setDataForm({
      name: {
        value: "",
        error: false,
      },

      email: {
        value: "",
        error: false,
      },
    });
  };

  return (
    <div style={{ height: "150px", background: "#F2F2F2" }}>
      <div className="container text-center my-5 py-4">
        <h4>¡Únete a nuestras novedades y promociones!</h4>
        <form className="d-flex flex-row justify-content-center">
          <TextField
            value={dataForm.name.value}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            className="mx-2"
            id="name"
            label="Ingresa tu nombre"
            variant="outlined"
            required
            error={dataForm.name.error}
          />
          <TextField
            value={dataForm.email.value}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            className="mx-2"
            id="email"
            label="ingresa tu email"
            variant="outlined"
            required
            error={dataForm.email.error}
          />
          <button
            type="button"
            className="btn btn-dark h-100"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
