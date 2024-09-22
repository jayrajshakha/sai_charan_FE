const base_url = process.env.NEXT_PUBLIC_BASE_API_URL;

const useGetOneBill = async (id, token) => {
  const fetchOptions = {
    method: "GET",
    headers: {
      Authorization: token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(
      `${base_url}/admin/bill/one/${id}`,
      fetchOptions
    );
    if (!response.ok) {
      return response.statusText;
    } else {
      return response.json();
    }
  } catch (error) {
    return error;
  }
};

export default useGetOneBill;
