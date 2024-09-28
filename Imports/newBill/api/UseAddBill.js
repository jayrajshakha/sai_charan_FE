const base_url = process.env.NEXT_PUBLIC_BASE_API_URL;

const UseAddBill = async (token, data) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${base_url}/admin/newBill`, fetchOptions);

    if (!response.ok) {
      return response.statusText;
    } else {
      return response.json();
    }
  } catch (error) {
    return error;
  }
};

export default UseAddBill;
