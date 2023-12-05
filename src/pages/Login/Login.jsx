import { useContext, useEffect } from "react";
import { Box } from "@chakra-ui/layout";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";

import { Link as ReactRouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginResolver } from "../../utils/validator/loginResolver";
import { auth } from "../../utils/firebase";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../components/Authentication/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({ resolver: loginResolver });

  const history = useHistory();

  const { user } = useContext(AuthContext);
  console.log(user);

  const onSubmit = ({ email, password }) => {
    clearErrors("API_ERROR");
    console.log(email, password);
    //firebase
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        setError("API_ERROR", { message: "plz enter valid email or password" });
      });
  };

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <Box
      bg="gray.200"
      width="100%"
      minH="100vh"
      d="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <h2 className="text-center display-6 fw-bold text-black mb-2">Login</h2>
      <Box
        width={{ base: "90%", md: "40%", lg: "30%" }}
        bg="white"
        p={12}
        rounded={6}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email </FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="enter your email"
              {...register("email")}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl mt="2" isInvalid={errors.password}>
            <FormLabel htmlFor="password">password </FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="enter your password"
              {...register("password")}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Text textAlign="end" p="2" size="xs">
            <Link as={ReactRouterLink} color="gray.500" to="/reset-pass">
              Reset Password ?
            </Link>
          </Text>
          <Box mt="5" color="red.500">
            {errors.API_ERROR && errors.API_ERROR.message}
          </Box>
          <Button
            isLoading={isSubmitting}
            mt={4}
            colorScheme="messenger"
            type="submit"
            w="100%"
          >
            LogIn
          </Button>
          <Text textAlign="center" p="2" size="xs">
            <Link as={ReactRouterLink} color="gray.500" to="/signup">
              create Account ?
            </Link>
          </Text>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
