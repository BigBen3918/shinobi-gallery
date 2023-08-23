import axios from "axios";

const GetData = async () => {
    try {
        const result = await axios.get(
            "https://www.narutodb.xyz/api/akatsuki",
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        return result.data;
    } catch (err: any) {
        return [];
    }
};

export { GetData };
