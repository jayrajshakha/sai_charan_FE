const login_url = process.env.NEXT_PUBLIC_LOGIN_URL;

export const UseLogin = async (data) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${login_url}`, fetchOptions);
    if (!response.ok) {
      const text = await response.text();
      console.log(JSON.parse(text).error);
    } else {
      return response.json();
    }
  } catch (error) {
    console.log(error.message);
  }
};
