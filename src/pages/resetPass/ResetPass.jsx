import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../utils/firebase/index";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Text, Link, Input } from "@chakra-ui/react";

const ResetPass = () => {
  const [values, setValues] = useState({
    email: "",
  });

  const [errMsg, setErrMsg] = useState("");

  const resetSubmission = () => {
    if (!values.email) {
      setErrMsg("Please valid email");
      return;
    }
    setErrMsg("");
    sendPasswordResetEmail(auth, values.email)
      .then((res) => {
        console.log(res);
        alert("please check your email");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(values);
  };

  return (
    <>
      <Box
        bg="gray.200"
        width="100%"
        minH="100vh"
        d="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <h2 className="text-center display-6 fw-bold text-black mb-2">
          Reset Password
        </h2>
        <Box
          width={{ base: "90%", md: "40%", lg: "30%" }}
          bg="white"
          p={12}
          rounded={6}
        >
          <div className="outerBox">
            <div className="innerBox">
              <Input
                type="email"
                name="email"
                placeholder="enter your email"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
              />

              <div className="signup-footer">
                <p>{errMsg}</p>

                <br />
                <div className="text-center">
                  <button
                    className="btn btn-info text-white fw-bold w-50"
                    onClick={resetSubmission}
                  >
                    Send
                  </button>
                </div>
                <br />

                <Text textAlign="center" p="2" size="xs">
                  <Link as={ReactRouterLink} color="gray.500" to="/signup">
                    create Account ?
                  </Link>
                </Text>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default ResetPass;
