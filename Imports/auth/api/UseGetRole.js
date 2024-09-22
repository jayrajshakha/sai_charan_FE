const base_url = process.env.NEXT_PUBLIC_BASE_API_URL;

export const UseGetUser = async (token) => {
  const fetchOptions = {
    method: "GET",
    headers: {
      Authorization: token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(`${base_url}/admin/loginUser`, fetchOptions);
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
