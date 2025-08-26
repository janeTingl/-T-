const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/janeTingl/小T的辅导能手/main/data/questions.json';


export async function fetchQuestions() {
  try {
    const response = await fetch(GITHUB_RAW_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('题库数据获取失败:', error);
    return [];
  }
}
