tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#5A4FFF",
        dark: "#292929",
        background: "#FEF9F2",
      },
    },
  },
};

const togglePassword = () => {
  const password = document.getElementById("password");
  const eye = document.getElementById("eye");
  if (password.type === "password") {
    password.type = "text";
    eye.src = "eye.svg";
  } else {
    password.type = "password";
    eye.src = "eye-slash.svg";
  }
};
