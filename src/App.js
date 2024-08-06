import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

const App = ({signUp}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password, reason } = data;
    signUp(name, email, password, reason);
    reset();
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <h1>Signup Today!</h1>
          <label htmlFor="name">name</label>
          <input
              id="name"
              aria-invalid={errors.name ? "true" : "false"}
              {...register("name", {
                required: "required",
              })}
              placeholder="name"
          />
          {errors.name && <p role="alert">{errors.name.message}</p>}

          <label htmlFor="email">Email</label>
          <input
              id="email"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              type="email"
              placeholder="example@mail.com"
          />
          {errors.email && <p role="alert">{errors.email.message}</p>}

          <label htmlFor="password">password</label>
          <input
              id="password"
              aria-invalid={errors.password ? "true" : "false"}
              {...register("password", {
                required: "required",
                minLength: {
                  value: 5,
                  message: "Password must be at least 5 characters long",
                },
              })}
              placeholder="password"
          />
          {errors.password && <p role="alert">{errors.password.message}</p>}
        </section>

        <label htmlFor="reason">Reason for signing up</label>
        <select
            defaultValue={"DEFAULT"}
            {...register("reason", {
              validate: (value) => {
                return value === "DEFAULT" ? "Please select an option" : true;
              },
            })}
        >
          <option value="DEFAULT">-- select an option --</option>
          <option value="work">work</option>
          <option value="personal">personal</option>
          <option value="other">other</option>
        </select>
        {errors.reason && <p role="alert">{errors.reason.message}</p>}

        <button type="submit">SUBMIT</button>
      </form>
  );
};

export default App;
