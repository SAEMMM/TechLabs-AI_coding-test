import axios, { AxiosResponse } from "axios";

interface PostData {
  startDate: string;
  endDate: string;
  category: string;
  keyword: string;
  timeUnit: string;
  gender: string;
  device: string;
  ages: string[];
}

const postData = async (
  startDate: string,
  endDate: string,
  category: string,
  keyword: string,
  timeUnit: string,
  gender: string,
  device: string,
  ages: string[]
): Promise<void> => {
  const data: PostData = {
    startDate,
    endDate,
    category,
    keyword,
    timeUnit,
    gender,
    device,
    ages,
  };

  try {
    const response: AxiosResponse = await axios.post<PostData>(
      '/v1/datalab/shopping/category/keyword/age',
      data,
      {
        headers: {
          "X-Naver-Client-Id": process.env.REACT_APP_CLIENT_ID,
          "X-Naver-Client-Secret": process.env.REACT_APP_CLIENT_SECRET,
        },
      }
    );
    console.log("POST 요청 성공:", response.data);
  } catch (error) {
    console.error("POST 요청 실패:", error);
  }
};

export default postData;
