import stringSimilarity from 'string-similarity';
import { fetchQuestions } from './api';

// OCR文本匹配题库
export async function matchQuestion(ocrText) {
  const data = await fetchQuestions();
  if (!ocrText) return { question: null, answer: null };

  // 清洗 OCR 文本
  const cleanedText = ocrText.replace(/\s+/g, '').trim();

  let bestMatch = { question: null, answer: null, score: 0 };

  data.forEach(item => {
    const itemText = item.question.replace(/\s+/g, '');
    const similarity = stringSimilarity.compareTwoStrings(cleanedText, itemText);
    if (similarity > bestMatch.score) {
      bestMatch = { question: item.question, answer: item.answer, score: similarity };
    }
  });

  // 设置阈值（比如 0.5），匹配度低则提示未匹配
  if (bestMatch.score < 0.5) return { question: null, answer: null };

  return { question: bestMatch.question, answer: bestMatch.answer };
}

