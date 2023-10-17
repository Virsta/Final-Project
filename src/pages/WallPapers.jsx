import Layout from "../layout/MainLayout";
import Container from "../components/Container/Container";
import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../App";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "../components/Button/Button";
import { useFormik } from "formik";

import "../styles/index.scss";

const WallPapers = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
    },
    onSubmit: (values, { resetForm }) => {
      localStorage.setItem("name", values.name);
      localStorage.setItem("surname", values.surname);
      localStorage.setItem("email", values.email);

      localStorage.setItem("isFormSubmitted", "true");

      resetForm();
    }
  });

  useEffect(() => {
    const isFormSubmitted = localStorage.getItem("isFormSubmitted");

    if (isFormSubmitted === "true") {
      localStorage.removeItem("name");
      localStorage.removeItem("surname");
      localStorage.removeItem("email");
      localStorage.removeItem("isFormSubmitted");
      
      formik.resetForm();
    } else {
      const savedName = localStorage.getItem("name");
      const savedSurname = localStorage.getItem("surname");
      const savedEmail = localStorage.getItem("email");

      if (savedName && savedSurname && savedEmail) {
        formik.setValues({
          name: savedName,
          surname: savedSurname,
          email: savedEmail,
        });
      }
    }
  }, []);
  const theme = useContext(ThemeContext);

  return (
    <Layout>
      <Container>
        <div className="box">
          <h1 className="uppercase text-pageMoreWlprs">More WallPapers</h1>
          <form
            className={`formGetMore formGetMore--${theme.theme}`}
            onSubmit={formik.handleSubmit}
          >
            <Box
              sx={{
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <p
                className={`form-caption form-caption--${theme.theme} text-center`}
              >
                If you want to receive more wallpapers to your email
                <p className="text-center">Please fill out the form:</p>
              </p>
              <TextField
                name="name"
                id="name"
                type="text"
                label="Name"
                variant="standard"
                required
                InputLabelProps={{
                  style: {
                    color: theme.theme === "dark" ? "white" : "#546e7a",
                    backgroundColor: "transparent",
                  },
                }}
                inputProps={{
                  style: {
                    color: theme.theme === "dark" ? "white" : "black",
                    backgroundColor: "transparent",
                  },
                }}
                {...formik.getFieldProps("name")}
              />
              <TextField
                name="surname"
                id="surname"
                label="Surname"
                variant="standard"
                required
                InputLabelProps={{
                  style: {
                    color: theme.theme === "dark" ? "white" : "#546e7a",
                  },
                }}
                inputProps={{
                  style: {
                    color: theme.theme === "dark" ? "white" : "black",
                  },
                }}
                {...formik.getFieldProps("surname")}
              />
              <TextField
                name="email"
                type="email"
                id="email"
                label="Email"
                variant="standard"
                required
                InputLabelProps={{
                  style: {
                    color: theme.theme === "dark" ? "white" : "#546e7a",
                  },
                }}
                inputProps={{
                  style: {
                    color: theme.theme === "dark" ? "white" : "black",
                  },
                }}
                {...formik.getFieldProps("email")}
              />
            </Box>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </Container>
    </Layout>
  );
};

export default WallPapers;




// import Layout from "../layout/MainLayout";
// import Container from "../components/Container/Container";
// import React, { useContext, useEffect } from "react";
// import { ThemeContext } from "../App";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "../components/Button/Button";
// import { useFormik } from "formik";

// import "../styles/index.scss";

// const WallPapers = ({ onSubmit }) => {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       surname: "",
//       email: "",
//     },
//     onSubmit: (values, e) => {
//       e.preventDefault();
//       onSubmit(values.submit);
//       onSubmit();
//       localStorage.setItem("name", (values.name));
//       localStorage.setItem("surname", (values.surname));
//       localStorage.setItem("email", (values.email));
//       console.log(values);
//     },
//   });

//   useEffect(() => {
//     const savedName = localStorage.getItem("name");
//     const savedSurname = localStorage.getItem("surname");
//     const savedEmail = localStorage.getItem("email");
    
//     if (savedName && savedSurname && savedEmail) {
//       formik.setValues({
//         firstName: savedName,
//         lastName: savedSurname,
//         email: savedEmail,
//       });
//     }
//   }, [formik]);

//   const theme = useContext(ThemeContext);

//   return (
//     <Layout>
//       <Container>
//         <div className="box">
//           <h1 className="uppercase text-pageMoreWlprs">More WallPapers</h1>
//           <form
//             className={`formGetMore formGetMore--${theme.theme}`}
//             onSubmit={formik.handleSubmit.resetForm}
            
//           >
//             <Box
//               sx={{
//                 marginBottom: "20px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 gap: "20px",
//               }}
//             >
//               <p
//                 className={`form-caption form-caption--${theme.theme} text-center`}
//               >
//                 If you want to receive more wallpapers to your email
//                 <p className="text-center">Please fill out the form:</p>
//               </p>
//               <TextField
//                 name="name"
//                 id="name"
//                 type="text"
//                 label="Name"
//                 variant="standard"
//                 required
//                 InputLabelProps={{
//                   style: {
//                     color: theme.theme === "dark" ? "white" : "#546e7a",
//                     backgroundColor: 'transparent'
//                   },
//                 }}
//                 inputProps={{
//                   style: {
//                     color: theme.theme === "dark" ? "white" : "black",
//                     backgroundColor: 'transparent'
//                   },
//                 }}
//                 {...formik.getFieldProps("name")}
//               />
//               <TextField
//                 name="surname"
//                 id="surname"
//                 label="Surname"
//                 variant="standard"
//                 required
//                 InputLabelProps={{
//                   style: {
//                     color: theme.theme === "dark" ? "white" : "#546e7a",
//                   },
//                 }}
//                 inputProps={{
//                   style: {
//                     color: theme.theme === "dark" ? "white" : "black",
//                   },
//                 }}
//                 {...formik.getFieldProps("surname")}
//               />
//               <TextField
//                 name="email"
//                 type="email"
//                 id="email"
//                 label="Email"
//                 variant="standard"
//                 required
//                 InputLabelProps={{
//                   style: {
//                     color: theme.theme === "dark" ? "white" : "#546e7a",
//                   },
//                 }}
//                 inputProps={{
//                   style: {
//                     color: theme.theme === "dark" ? "white" : "black",
//                   },
//                 }}
//                 {...formik.getFieldProps("email")}
//               />
//             </Box>
//             <Button type="submit">Submit</Button>
//           </form>
//         </div>
//       </Container>
//     </Layout>
//   );
// };

// export default WallPapers;
