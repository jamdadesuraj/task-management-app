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
import { signupResolver } from "../../utils/validator/signupResolver";
import { auth } from "../../utils/firebase";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../components/Authentication/AuthProvider";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({ resolver: signupResolver });

  const history = useHistory();

  const { user } = useContext(AuthContext);
  console.log(user);

  const onSubmit = ({ email, password }) => {
    clearErrors("API_ERROR");
    console.log(email, password);
    //firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        setError("API_ERROR", { message: err.message });
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
      <h2 className="text-center display-6 fw-bold text-black mb-2">
        Register
      </h2>
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

          <FormControl mt="2" isInvalid={errors.repeat_password}>
            <FormLabel htmlFor="repeat_password">confirm password </FormLabel>
            <Input
              type="password"
              name="repeat_password"
              placeholder="enter your confirm password"
              {...register("repeat_password")}
            />
            <FormErrorMessage>
              {errors.repeat_password && errors.repeat_password.message}
            </FormErrorMessage>
          </FormControl>

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
            Sign up
          </Button>
          <Text textAlign="center" p="2" size="xs">
            <Link as={ReactRouterLink} color="gray.500" to="/login">
              Already registered ?
            </Link>
          </Text>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
